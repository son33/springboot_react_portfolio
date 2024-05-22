package com.son.portfolio.project.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.son.portfolio.project.model.service.ProjectService;
import com.son.portfolio.project.model.vo.Project;

@RestController
@RequestMapping("/project")
public class ProjectController {
	@Autowired
	private ProjectService service;

	@GetMapping("")
	public ArrayList<Project> getProjectList() {
		return service.getProjectList();
	}
}