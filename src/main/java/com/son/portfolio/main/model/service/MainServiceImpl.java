package com.son.portfolio.main.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.son.portfolio.main.model.dao.MainDao;
import com.son.portfolio.main.model.vo.AboutMe;
import com.son.portfolio.main.model.vo.Introduce;
import com.son.portfolio.main.model.vo.Main;
import com.son.portfolio.main.model.vo.Skill;

@Service
public class MainServiceImpl implements MainService {
	@Autowired
	private MainDao dao;

	@Override
	public ArrayList<Main> getMain() {
		return dao.getMain();
	}

	@Override
	public Introduce getIntroduce() {
		return dao.getIntroduce();
	}

	@Override
	public AboutMe getAboutMe() {
		return dao.getAboutMe();
	}

	@Override
	public ArrayList<Skill> getSkill() {
		return dao.getSkill();
	}
}
