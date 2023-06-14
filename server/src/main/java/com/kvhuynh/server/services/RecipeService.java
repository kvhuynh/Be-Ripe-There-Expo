package com.kvhuynh.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;

import com.kvhuynh.server.models.User;
import com.kvhuynh.server.models.recipes.Ingredient;
import com.kvhuynh.server.models.recipes.Recipe;
import com.kvhuynh.server.repositories.recipes.IngredientRepository;
import com.kvhuynh.server.repositories.recipes.RecipeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;

    private final IngredientRepository ingredientRepository;

    public Recipe createRecipe(@RequestBody Recipe recipe, BindingResult result) {
        if (result.hasErrors()) {
            System.out.println("we have errors");
        }

        return recipeRepository.save(recipe);

    }

    public void processIngredient(Recipe recipe) {
        for (int i = 0; i < recipe.getIngredients().size(); i++) {
            Ingredient ingredient = new Ingredient();
            ingredient.setIngredientName(recipe.getIngredients().get(i).getIngredientName());
            ingredient.setIngredientQuanitity(recipe.getIngredients().get(i).getIngredientQuanitity());
            ingredient.setRecipe(recipe);
            ingredientRepository.save(ingredient);

        }
    }

	public List<Recipe> getAllRecipes() {

		return recipeRepository.findAll();
	}

    public Recipe getOneRecipeById(Long id) {

        return recipeRepository.findById(id).get();
    }

    public void toggleFavoriteRecipe(Recipe recipe, User user) {
        boolean isFavorited = recipe.getUsers().contains(user);
        System.out.println(isFavorited);
        List<User> favoritedUsers = recipe.getUsers();
        // System.out.println(favoritedUsers);
        // System.out.println(user);
        System.out.println("we are in toggle favorite recipe from service");
        if (isFavorited) {
            System.out.println("we are removing a favorite to this user before");
            favoritedUsers.remove(user);
            System.out.println("we are removing a favorite to this user after");

        } else {
            System.out.println("we are adding a favorite to this user before");
            favoritedUsers.add(user);
            System.out.println("we are adding a favorite to this user after");
        }
        
        recipeRepository.save(recipe);

    }

    public List<Recipe> getFavorites(Long id) {
        return null;
    }

}
