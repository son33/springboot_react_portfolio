package com.son.portfolio.project.model.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.son.portfolio.project.model.vo.Project;

@Repository
public class ProjectDaoImpl implements ProjectDao {
	@Autowired
	private SqlSessionTemplate session;
	
	@Override
	public ArrayList<Project> getProjectList() {
		return new ArrayList<Project>(session.selectList("projectMapper.getProjectList"));
	}

}
