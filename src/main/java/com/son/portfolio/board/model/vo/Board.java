package com.son.portfolio.board.model.vo;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonPropertyOrder
public class Board {
	private int boardId;
	private String content;
	private String createDate;
	private String state;
}
