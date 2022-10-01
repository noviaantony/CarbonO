package com.carbonO;

import com.carbonO.Dish.Dish;
import com.carbonO.Dish.DishRecipe;
import com.carbonO.Dish.DishRecipeRepository;
import com.carbonO.Dish.DishRepository;
import com.carbonO.Ingredient.Ingredient;
import com.carbonO.Ingredient.IngredientRepository;
import com.carbonO.UserCarbonTracker.userCarbonTracker;
import com.carbonO.UserCarbonTracker.userCarbonTrakerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Configuration
public class CarbonTrackerConfig {

    @Bean
    CommandLineRunner commandLineRunner(DishRepository dishRepository, IngredientRepository ingredientRepository, DishRecipeRepository dishRecipeRepository, userCarbonTrakerRepository userCarbonTrakerRepository) {

        return args -> {
            //arraylist of ingredients
            List<Ingredient> ingredients = new ArrayList<>();

            ingredients.add(new Ingredient("chicken",1600));
            ingredients.add(new Ingredient("rice", 565));

            Dish dish1 = new Dish(
                    "Chicken Rice",
                    ingredients.get(0).getCarbonFootprint() + ingredients.get(1).getCarbonFootprint()
            );

            ingredientRepository.saveAll(
                    List.of(ingredients.get(0), ingredients.get(1))
            );
            dishRepository.saveAll(
                    List.of(dish1)
            );

            //saving new dish recipe
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

            //user sample for food consumed
            userCarbonTracker userCarbonTracker1 = new userCarbonTracker(
                    1L,
                    dish2,
                    new Date()
            );

            userCarbonTracker userCarbonTracker2 = new userCarbonTracker(
                    2L,
                    dish2,
                    new Date()
            );

            userCarbonTrakerRepository.saveAll(
                    List.of(userCarbonTracker1, userCarbonTracker2)
            );

        };
    }
}
