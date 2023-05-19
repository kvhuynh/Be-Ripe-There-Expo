package com.kvhuynh.server.services;


import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.kvhuynh.server.models.LoginUser;
import com.kvhuynh.server.models.User;
import com.kvhuynh.server.repositories.UserRepository;


// @Service
// public class UserService {
	
// 	@Autowired
// 	private UserRepository userRepository;
	
// 	public User register(User newUser, BindingResult result) {

// 		// check if email is unique
// 		if (userRepository.findByEmail(newUser.getEmail()).isPresent()) {
// 			result.rejectValue("email", "Unique", "Email is already in use.");
// 		}
		
// 		// check if password matches confirm password
// 		// if (!newUser.getPassword().equals(newUser.getConfirmPassword())) {
// 		// 	result.rejectValue("confirm", "Matches", "Passwords must match.");
// 		// }
		
// 		// final check to see if there are errors
// 		if (result.hasErrors()) {
// 			System.out.println(result.getFieldError());
// 			return null;
// 		}
		
// 		String hashedPassword = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
// 		newUser.setPassword(hashedPassword);
		

// 		System.out.println("Successfully registered user...");


// 		return userRepository.save(newUser);
// 	}
	
// 	public User login(LoginUser newLogin, BindingResult result) {
// 		if (result.hasErrors()) {
// 			return null;
// 		}
		
// 		// check if the email is present in the database
// 		Optional<User> potentialUser = userRepository.findByEmail(newLogin.getEmail());
// 		if (!potentialUser.isPresent()) {
// 			result.rejectValue("email", "Unique", "Invalid Credentials.");
// 			// if email isn't found don't bother checking password
// 			return null;
// 		}
		
// 		// gets User object from the Optional
// 		User user = potentialUser.get();
// 		if (!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
// 			result.rejectValue("password", "Matches", "Invalid Credentials.");
// 		}
		
// 		return user;
		
// 	}
	
// 	public User getOne(Long id) {
// 		return userRepository.findById(id).orElse(null);
// 	}

// }