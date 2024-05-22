package com.son.portfolio.main.model.service;

import java.util.ArrayList;

import com.son.portfolio.main.model.vo.AboutMe;
import com.son.portfolio.main.model.vo.Introduce;
import com.son.portfolio.main.model.vo.Main;
import com.son.portfolio.main.model.vo.Skill;

public interface MainService {

	ArrayList<Main> getMain();

	Introduce getIntroduce();

	AboutMe getAboutMe();

	ArrayList<Skill> getSkill();
}