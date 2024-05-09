package com.son.portfolio.project.model.vo;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonPropertyOrder
public class Project {
	private int projectNo;
	private String title;
	private String start;
	private String end;
	private String content;
	private String frontEnd;
	private String backEnd;
	private String db;
	private String url;
}
