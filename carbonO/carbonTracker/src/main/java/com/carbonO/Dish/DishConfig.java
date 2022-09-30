package com.carbonO.Dish;

import com.carbonO.Ingredient.Ingredient;
import com.carbonO.Ingredient.IngredientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class DishConfig {

    @Bean
    CommandLineRunner commandLineRunner(DishRepository dishRepository, IngredientRepository ingredientRepository, DishRecipeRepository dishRecipeRepository){

        return args -> {
            Ingredient ingredient1 = new Ingredient(
                    "chicken",
                    5
            );
            Ingredient ingredient2 = new Ingredient(
                    "rice",
                    2
            );

            List<String> ingredients = new ArrayList<>();
            ingredients.add("chicken");
            ingredients.add("rice");

            Dish dish1 = new Dish(
                    "Chicken Rice"
            );

            ingredientRepository.saveAll(
                    List.of(ingredient1, ingredient2)
            );
            dishRepository.saveAll(
                    List.of(dish1)
            );

            Dish dish2 = dishRepository.findByDishName("Chicken Rice").get();
            Ingredient ingredient3 = ingredientRepository.findByIngredientName("chicken").get();
            Ingredient ingredient4 = ingredientRepository.findByIngredientName("rice").get();

            DishRecipe dishRecipe = new DishRecipe(
                    dish2,
                    ingredient3,
                    2
            );
            DishRecipe dishRecipe2 = new DishRecipe(
                    dish2,
                    ingredient4,
                    1
            );

            dishRecipeRepository.saveAll(
                    List.of(dishRecipe, dishRecipe2)
            );
        };
    }
}
