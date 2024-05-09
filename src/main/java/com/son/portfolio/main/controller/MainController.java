package com.son.portfolio.main.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.son.portfolio.main.model.service.MainService;
import com.son.portfolio.main.model.vo.AboutMe;
import com.son.portfolio.main.model.vo.Introduce;
import com.son.portfolio.main.model.vo.Main;
import com.son.portfolio.main.model.vo.Skill;

@RestController
@RequestMapping("/main")
public class MainController {
	@Autowired
	private MainService service;

	@GetMapping("")
	public ArrayList<Main> getMain() {
		return service.getMain();
	}
	
	@GetMapping("/introduce")
	public Introduce getIntroduce() {
		return service.getIntroduce();
	}
	
	@GetMapping("/aboutMe")
	public AboutMe getAboutMe() {
		return service.getAboutMe();
	}
	
	@GetMapping("/skill")
	public ArrayList<Skill> getSkill() {
		return service.getSkill();
	}
}
