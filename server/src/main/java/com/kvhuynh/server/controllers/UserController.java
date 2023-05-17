package com.kvhuynh.server.controllers;

import java.io.IOException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kvhuynh.server.models.User;
import com.kvhuynh.server.services.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
public class UserController {

    @Autowired
    private UserService userService;


    
	@GetMapping("/api")
	public String index() {
		System.out.println("yo");
		return "test";
	}

	@PostMapping("/api/register")
	// public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) throws IOException {
		
	// public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model) throws IOException {
	public String register(@Valid @RequestBody User newUser, BindingResult result, HttpSession session) throws IOException {
		System.out.println("yo");
		User user = userService.register(newUser, result);

		System.out.println(user);

		if (result.hasErrors()) {
			// model.addAttribute("newLogin", new LoginUser());
			// model.addAttribute("hasRegistrationError", "hasRegistrationError");
			// return "login-register.jsp";

			return result.getFieldErrors().toString();
		}

		session.setAttribute("uuid", user.getId());
		
		return "Successfully registered";
		// return "redirect:/";
	}
	


}
