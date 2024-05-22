package com.son.portfolio.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.son.portfolio.login.model.service.LoginService;

@RestController
@RequestMapping("/user")
public class LoginController {
	@Autowired
	private LoginService service;
	
	@PostMapping("/login")
	public int loginResult(@RequestParam("id") String id, @RequestParam("password") String password) {
		return service.loginResult(id, password);
	}
}
