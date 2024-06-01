package com.son.portfolio.board.model.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.son.portfolio.board.model.vo.Board;

@Repository
public class BoardDaoImpl implements BoardDao {
	@Autowired
	private SqlSessionTemplate session;
	
	@Override
	public ArrayList<Board> getBoardList() {
		return new ArrayList<Board>(session.selectList("boardMapper.getBoardList"));
	}

	@Override
	public int writeBoard(String content) {
		return session.insert("boardMapper.writeBoard",content);
	}

}
