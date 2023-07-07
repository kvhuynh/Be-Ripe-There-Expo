package com.kvhuynh.server.security.services;

import java.io.IOException;
import java.util.HashMap;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kvhuynh.server.models.User;
import com.kvhuynh.server.repositories.UserRepository;
import com.kvhuynh.server.security.config.JwtService;
import com.kvhuynh.server.security.models.AuthenticationRequest;
import com.kvhuynh.server.security.models.AuthenticationResponse;
import com.kvhuynh.server.security.models.RegisterRequest;
import com.kvhuynh.server.security.models.Token;
import com.kvhuynh.server.security.models.enums.TokenType;
import com.kvhuynh.server.security.repositories.TokenRepository;
import com.kvhuynh.server.services.CalendarService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor; 


@Service
@RequiredArgsConstructor
public class AuthenticationService {

  private final CalendarService calendarService;

  private final UserRepository userRepository;

  private final TokenRepository tokenRepository;

  private final PasswordEncoder passwordEncoder;

  private final JwtService jwtService;

  private final AuthenticationManager authenticationManager;

  public AuthenticationResponse register(User request, BindingResult result, HttpSession session) {

    if (userRepository.findByEmail(request.getEmail()).isPresent()) {
			result.rejectValue("email", "Unique", "Email is already in use.");
		}

    if (!request.getPassword().equals(request.getConfirmPassword())) {
      System.out.println("passwords dont match");
      result.rejectValue("confirmPassword", "Matches", "Passwords must match.");
    }

    if (result.hasErrors()) {

      return null;
    }

      var user = User.builder()
          .firstName(request.getFirstName())
          .lastName(request.getLastName())
          .email(request.getEmail())
          .password(passwordEncoder.encode(request.getPassword()))
          .confirmPassword(request.getConfirmPassword())
          .role(request.getRole())
          .build();
      var savedUser = userRepository.save(user);
      calendarService.createCalendar(savedUser);
      var jwtToken = jwtService.generateToken(user);
      var refreshToken = jwtService.generateRefreshToken(user);
      saveUserToken(savedUser, jwtToken);
      session.setAttribute("uuid", savedUser.getId());
      return AuthenticationResponse.builder()
          .accessToken(jwtToken)
              .refreshToken(refreshToken)
          .build();

  }

  public AuthenticationResponse authenticate(AuthenticationRequest request, HttpSession session) {

    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );

    var user = userRepository.findByEmail(request.getEmail())
        .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        session.setAttribute("uuid", user.getId());

    return AuthenticationResponse.builder()
        .accessToken(jwtToken)
            .refreshToken(refreshToken)
        .build();
  }

  private void saveUserToken(User user, String jwtToken) {

    var token = Token.builder()
        .user(user)
        .token(jwtToken)
        .tokenType(TokenType.BEARER)
        .expired(false)
        .revoked(false)
        .build();
    tokenRepository.save(token);
  }

  private void revokeAllUserTokens(User user) {

    var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
    if (validUserTokens.isEmpty())
      return;

    validUserTokens.forEach(token -> {
      token.setExpired(true);
      token.setRevoked(true);
    });

    tokenRepository.saveAll(validUserTokens);
  }

  public void refreshToken(
          HttpServletRequest request,
          HttpServletResponse response
  ) throws IOException {

    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
    final String refreshToken;
    final String userEmail;

    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
      return;
    }

    refreshToken = authHeader.substring(7);
    userEmail = jwtService.extractUsername(refreshToken);
    if (userEmail != null) {

      var user = this.userRepository.findByEmail(userEmail)
              .orElseThrow();
      if (jwtService.isTokenValid(refreshToken, user)) {
        
        var accessToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);
        var authResponse = AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();

        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
      }
    }
  }

  public AuthenticationResponse generateError(BindingResult result) throws JsonProcessingException {

    HashMap<String, String> errors = new HashMap<>();
    for (FieldError error : result.getFieldErrors()) {

      errors.put(error.getField() + "Error", error.getDefaultMessage());
    }
    errors.put("errors", "true");
    System.out.println(errors);
    return AuthenticationResponse.builder().error(errors).build(); 
  }
}
