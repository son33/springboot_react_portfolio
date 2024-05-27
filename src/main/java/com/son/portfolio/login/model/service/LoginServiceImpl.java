package com.son.portfolio.login.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.son.portfolio.login.model.dao.LoginDao;
import com.son.portfolio.login.model.vo.User;

@Service
public class LoginServiceImpl implements LoginService {
	@Autowired
	private LoginDao dao;

	@Override
	public int loginResult(User user) {
		return dao.loginResult(user);
	}
}
