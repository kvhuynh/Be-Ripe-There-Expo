package com.kvhuynh.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import com.kvhuynh.server.services.RecipeService;

public class RecipeController {
    @Autowired
    private RecipeService recipeService;
}
