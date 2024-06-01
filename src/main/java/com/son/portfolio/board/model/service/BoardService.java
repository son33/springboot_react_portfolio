package com.son.portfolio.board.model.service;

import java.util.ArrayList;

import com.son.portfolio.board.model.vo.Board;

public interface BoardService {

	ArrayList<Board> getBoardList();

	int writeBoard(String content);

}
