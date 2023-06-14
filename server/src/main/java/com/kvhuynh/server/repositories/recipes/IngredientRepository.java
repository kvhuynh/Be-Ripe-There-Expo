package com.kvhuynh.server.repositories.recipes;

import org.springframework.data.repository.CrudRepository;

import com.kvhuynh.server.models.recipes.Ingredient;

public interface IngredientRepository extends CrudRepository<Ingredient, Long> {
    
} 
