package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/movement")
public class MovementFormController {
	
	
	@RequestMapping("")
	public String index() {
		return "index";
	}

}
