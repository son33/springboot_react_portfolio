package com.son.portfolio.main.model.vo;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonPropertyOrder
public class AboutMe {
	private String name;
	private String address;
	private String sex;
	private String birthday;
	private String mail1;
	private String mail2;
	private String phone;
}
