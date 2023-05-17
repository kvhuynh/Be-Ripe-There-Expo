package com.kvhuynh.server.repositories;

import org.springframework.data.repository.CrudRepository;

import com.kvhuynh.server.models.Recipe;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {
    
}
