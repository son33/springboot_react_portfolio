package com.son.portfolio.board.controller;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.son.portfolio.board.model.service.BoardService;
import com.son.portfolio.board.model.vo.Board;

@RestController
@RequestMapping("board")
public class BoardController {
	@Autowired
	private BoardService service;
	
	@GetMapping("")
	public ArrayList<Board> getBoardList() {
		ArrayList<Board> b =  service.getBoardList();
		return service.getBoardList();
	}
	
	@PostMapping("/write")
	public int writeBoard(@RequestBody Map<String, String> request) {
		String content = request.get("content");
		return service.writeBoard(content);
	}
}
