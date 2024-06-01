package com.son.portfolio.board.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.son.portfolio.board.model.dao.BoardDao;
import com.son.portfolio.board.model.vo.Board;

@Service
public class BoardServiceImpl implements BoardService{
	@Autowired
	private BoardDao dao;
	
	@Override
	public ArrayList<Board> getBoardList() {
		return dao.getBoardList();
	}

	@Override
	public int writeBoard(String content) {
		return dao.writeBoard(content);
	}

}
