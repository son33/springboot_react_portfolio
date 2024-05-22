package com.son.portfolio.login.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.son.portfolio.login.model.dao.LoginDao;

@Service
public class LoginServiceImpl implements LoginService {
	@Autowired
	private LoginDao dao;

	@Override
	public int loginResult(String id, String password) {
		return dao.loginResult(id, password);
	}
}
