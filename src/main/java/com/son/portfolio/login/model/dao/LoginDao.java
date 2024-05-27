package com.son.portfolio.login.model.dao;

import com.son.portfolio.login.model.vo.User;

public interface LoginDao {

	int loginResult(User user);
}