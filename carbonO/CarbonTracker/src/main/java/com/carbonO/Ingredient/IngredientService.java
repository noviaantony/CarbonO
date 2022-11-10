package com.carbonO.Ingredient;

import org.springframework.stereotype.Service;

@Service
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    public IngredientService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    //create a new ingredient
    public Ingredient addNewIngredient(String ingredientName, Double carbonFootprint) {
        Ingredient ingredient = new Ingredient(ingredientName, carbonFootprint);

        return ingredientRepository.save(ingredient);
    }
}
