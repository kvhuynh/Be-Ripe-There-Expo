package com.kvhuynh.server.models.recipes;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecipeRequest {
   
    private String recipeName;

    private String recipeDescription;

    private Double carbohydrateAmount;
}
