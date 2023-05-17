package com.kvhuynh.server.config;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;

@Service
public class JwtService {

    public String extractUsername(String token) {
        return null;
    }

    private Claims extractAllClaims(String token) {
        
    }
    
}
