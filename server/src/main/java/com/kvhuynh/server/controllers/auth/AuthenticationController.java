package com.kvhuynh.server.controllers.auth;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kvhuynh.server.models.auth.AuthenticationRequest;
import com.kvhuynh.server.models.auth.AuthenticationResponse;
import com.kvhuynh.server.models.auth.RegisterRequest;
import com.kvhuynh.server.services.auth.AuthenticationService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        System.out.println("from register");
        return ResponseEntity.ok(authService.register(request));

    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
        HttpServletRequest request,
        HttpServletResponse response
    ) throws IOException {
      authService.refreshToken(request, response);
    }
}