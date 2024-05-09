package com.son.portfolio.main.model.vo;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonPropertyOrder
public class Skill {
	private String kind;
	private String title;
	private String icon;
}
