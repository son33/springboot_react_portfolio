package com.son.portfolio.login.model.dao;

import java.util.HashMap;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDaoImpl implements LoginDao {
	@Autowired
	private SqlSessionTemplate session;

	@Override
	public int loginResult(String id, String password) {
		Map<String, Object> login = new HashMap<>();
		login.put("id", id);
		login.put("password", password);
		return session.selectOne("userMapper.loginResult",login);
	}
}