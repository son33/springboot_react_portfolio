package com.son.portfolio.project.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.son.portfolio.project.model.dao.ProjectDao;
import com.son.portfolio.project.model.vo.Project;

@Service
public class ProjectServiceImpl implements ProjectService {
	@Autowired
	private ProjectDao dao;

	@Override
	public ArrayList<Project> getProjectList() {
		return dao.getProjectList();
	}

}
