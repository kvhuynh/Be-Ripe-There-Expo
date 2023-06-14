package com.kvhuynh.server.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kvhuynh.server.models.recipes.Recipe;
import com.kvhuynh.server.services.RecipeService;
import com.kvhuynh.server.services.UserService;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/recipes")
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;
    private final UserService userService;

    private boolean isAuthorized(HttpSession session) {
        return session.getAttribute("uuid") == null;
    }

    @PostMapping("/create")
    private ResponseEntity<String> createRecipe(@RequestBody Recipe recipe, BindingResult result, HttpSession session) {

        System.out.println("Recipe has been successfully added to the database");
        System.out.println(session.getAttribute("uuid"));

        Recipe newRecipe = recipeService.createRecipe(recipe, result);
        recipeService.processIngredient(newRecipe);
        return ResponseEntity.ok("yo");
    }

    @GetMapping("/")
    public List<Recipe> getAllRecipes(HttpSession session) {
        System.out.println(session.getAttribute("uuid"));
        isAuthorized(session);

        return recipeService.getAllRecipes();
    }

    @GetMapping("/{recipeId}")
    public Recipe getOneRecipe(@PathVariable("recipeId") Long id, HttpSession session) {
        isAuthorized(session);
        return recipeService.getOneRecipeById((long)1);
    }




    @GetMapping("/favorite/{recipeId}")
    public void toggleFavoriteRecipe(@PathVariable("recipeId") Long id, HttpSession session) {
        // isAuthorized(session);
        System.out.println("from controller toggle favorite recipe");
        System.out.println(id + " " + session.getAttribute("uuid"));
        recipeService.toggleFavoriteRecipe(recipeService.getOneRecipeById(id),userService.getOneUserById((Long) session.getAttribute("uuid")));
        // recipeService.toggleFavoriteRecipe(recipeService.getOneRecipeById(id), (Long) session.getAttribute("uuid"));


    }

    @GetMapping("/favorite")
    public List<Recipe> getFavoriteRecipes(HttpSession session) {
        return null;
    }
}
