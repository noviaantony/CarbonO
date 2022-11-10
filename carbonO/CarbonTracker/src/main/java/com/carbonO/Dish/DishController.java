package com.carbonO.Dish;

import com.carbonO.Exceptions.DishNotFoundException;
import com.carbonO.Ingredient.Ingredient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/carbonO/carbonTracker/dish")
public class DishController {
    private final DishService dishService;

    @Autowired
    public DishController(DishService dishService) {
        this.dishService = dishService;
    }

    //Retrieve all dishes in the database
    @GetMapping("/getAllDishes")
    public ResponseEntity<List<Dish>> getAllDishes() {
        return ResponseEntity.ok().body(dishService.getAllDishes());
    }

    @GetMapping("/getAllIngredientsFromDish")
    public ResponseEntity<List<Ingredient>> getAllIngredientsFromDish(@RequestParam("dishId") Long dishId) {
        List<Ingredient> ingredientList = new ArrayList<>();
        try {
            Dish dish = dishService.findDishById(dishId);

            List<DishRecipe> dishRecipeList = dish.getRecipeIngredients();

            for (DishRecipe dishRecipe : dishRecipeList) {
                List<DishRecipe> dishRecipes = new ArrayList<>();
                dishRecipes.add(dishRecipe);
                Ingredient ingredient = dishRecipe.getIngredient();
                ingredient.setDishRecipe(dishRecipes);
                ingredientList.add(ingredient);
            }
        } catch (DishNotFoundException e) {
            return ResponseEntity.status(400).body(ingredientList);
        }
        return ResponseEntity.ok().body(ingredientList);
    };
}
