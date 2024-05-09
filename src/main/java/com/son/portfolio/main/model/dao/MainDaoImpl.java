package com.son.portfolio.main.model.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.son.portfolio.main.model.vo.AboutMe;
import com.son.portfolio.main.model.vo.Introduce;
import com.son.portfolio.main.model.vo.Main;
import com.son.portfolio.main.model.vo.Skill;

@Repository
public class MainDaoImpl implements MainDao {
	@Autowired
	private SqlSessionTemplate session;

	@Override
	public ArrayList<Main> getMain() {
		return new ArrayList<Main>(session.selectList("mainMapper.getMain"));
	}

	@Override
	public Introduce getIntroduce() {
		return session.selectOne("introduceMapper.getIntroduce");
	}

	@Override
	public AboutMe getAboutMe() {
		return session.selectOne("aboutMeMapper.getAboutMe");
	}

	@Override
	public ArrayList<Skill> getSkill() {
		return new ArrayList<Skill>(session.selectList("skillMapper.getSkill"));
	}
}