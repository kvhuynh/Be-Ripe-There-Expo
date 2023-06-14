package com.kvhuynh.server.repositories.recipes;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.kvhuynh.server.models.recipes.Recipe;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {
    List<Recipe> findAll();
}
