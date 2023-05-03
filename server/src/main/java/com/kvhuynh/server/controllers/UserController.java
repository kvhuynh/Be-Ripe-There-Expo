package com.kvhuynh.server.controllers;

import java.io.IOException;
import java.nio.channels.Channel;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kvhuynh.server.models.LoginUser;
import com.kvhuynh.server.models.User;
import com.kvhuynh.server.services.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;


    
	@GetMapping("/api")
	public String index() {
		System.out.println("yo");
		return "test";
	}

	@PostMapping("/register")
	// public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session, Channel channel) throws IOException {
		
	public String register(BindingResult result, Model model, HttpSession session, Channel channel) throws IOException {
	
		// User user = userService.register(newUser, result);

		User newUser = new User();

		User user = userService.register(newUser, result);

		System.out.println("i am here register");

		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			model.addAttribute("hasRegistrationError", "hasRegistrationError");
			return "login-register.jsp";
		}

		session.setAttribute("uuid", user.getId());
		

		return "redirect:/";
	}
	


}
