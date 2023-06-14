package com.kvhuynh.server.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.kvhuynh.server.models.User;
import com.kvhuynh.server.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User getOneUserById(Long id) {
        System.out.println("do we get here getONeuserbyId");
        return userRepository.findById(id).orElse(null);
    }
    
}
