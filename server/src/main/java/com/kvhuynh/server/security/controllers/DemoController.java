package com.kvhuynh.server.security.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/v1/demo-controller")
public class DemoController {
    
    @GetMapping()
    public ResponseEntity<String> sayHello(HttpSession session) {
        if (session.getAttribute("uuid") == null) {
            return null;
        }
        System.out.println("why is this ok");
        return ResponseEntity.ok("Hello from secured endpoint");
    }
}
