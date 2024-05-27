package com.son.portfolio.login.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.son.portfolio.login.model.vo.User;

@Repository
public class LoginDaoImpl implements LoginDao {
	@Autowired
	private SqlSessionTemplate session;

	@Override
	public int loginResult(User user) {
		User result = session.selectOne("userMapper.loginResult",user);
		if(result != null) {
			return 1;
		} else {
			return 0;
		}
	}
}