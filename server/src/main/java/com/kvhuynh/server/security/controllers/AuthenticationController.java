package com.kvhuynh.server.security.controllers;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.kvhuynh.server.models.User;
import com.kvhuynh.server.security.models.AuthenticationRequest;
import com.kvhuynh.server.security.models.AuthenticationResponse;
import com.kvhuynh.server.security.models.RegisterRequest;
import com.kvhuynh.server.security.services.AuthenticationService;
import com.kvhuynh.server.security.services.LogoutService;
import com.kvhuynh.server.services.CalendarService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authService;

    private final LogoutService logoutService;

    private final CalendarService calendarService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@Valid @RequestBody User user, BindingResult result, HttpSession session) throws JsonProcessingException {
    // public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request, BindingResult result, HttpSession session) throws JsonProcessingException {
        System.out.println(user);
        AuthenticationResponse potentialUser = authService.register(user, result, session); // set session later with user.getId()
        if (result.hasErrors()) {

            AuthenticationResponse error = authService.generateError(result);
            return ResponseEntity.ok(error);

        }
        System.out.println(session.getAttribute("uuid"));

        System.out.println("User has successfully registered");
        return null;

    }

    // @GetMapping("/authenticate")
    // public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request, HttpSession session) {
    //     // System.out.println("User has been successfully authenticated");
    //     return ResponseEntity.ok(authService.authenticate(request, session));
    // }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@Valid @RequestBody AuthenticationRequest request, BindingResult result, HttpSession session) throws JsonProcessingException{
        // System.out.println("User has been successfully authenticated");
        // System.out.println(result);
        System.out.println("yo");
        AuthenticationResponse test = authService.authenticate(request, session, result);
        if (result.hasErrors()) {
            System.out.println("do we get here");
            AuthenticationResponse error = authService.generateError(result);

            return ResponseEntity.ok(error);
        }
        System.out.println(result);
        // System.out.println(test);
        return ResponseEntity.ok(test);
        // return ResponseEntity.ok(authService.authenticate(request, session, result));
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
        HttpServletRequest request,
        HttpServletResponse response
    ) throws IOException {
        
      authService.refreshToken(request, response);
    }

    @PostMapping("/logout")
    public String logoutDo(HttpServletRequest request, HttpServletResponse response, HttpSession session)  {
        session.removeAttribute("uuid");
        SecurityContextHolder.clearContext();
        if(session != null) {
            session.invalidate();
        }
        for(Cookie cookie : request.getCookies()) {
            cookie.setMaxAge(0);
        }
        return "User has logged out";
    }
}