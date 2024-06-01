package com.son.portfolio.board.model.dao;

import java.util.ArrayList;

import com.son.portfolio.board.model.vo.Board;

public interface BoardDao {

	ArrayList<Board> getBoardList();

	int writeBoard(String content);

}
