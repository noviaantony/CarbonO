package com.carbonO.Dish;

import com.carbonO.Exceptions.DishNotFoundException;
import com.carbonO.Ingredient.Ingredient;
import com.carbonO.Ingredient.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishService {
    private final DishRepository dishRepository;
    private final DishRecipeRepository dishRecipeRepository;
    private final IngredientRepository ingredientRepository;

    public DishService(DishRepository dishRepository, DishRecipeRepository dishRecipeRepository, IngredientRepository ingredientRepository) {
        this.dishRepository = dishRepository;
        this.dishRecipeRepository = dishRecipeRepository;
        this.ingredientRepository = ingredientRepository;
    }
    //get dish by id
    public Dish getDishById(Long id){
        return dishRepository.findById(id).orElseThrow(()-> new DishNotFoundException("Dish by id " + id + " was not found"));
    }
    //create a new dish
//    public Dish addNewDish(String dishName) {
//        Dish dish = new Dish(dishName);
//
//        return dishRepository.save(dish);
//    }

    public void updateTotalCarbonFootprint(Dish dish) {
        List<DishRecipe> dishRecipeList = dish.getRecipeIngredients();

        Double total = 0.0;
        for (DishRecipe dishRecipe : dishRecipeList) {

            Ingredient ingredient = dishRecipe.getIngredient();
            Double quantity = dishRecipe.getQuantity();
            Double footprint = ingredient.getCarbonFootprint();

            total += quantity * footprint;
        }

        dish.setTotalCarbonFootprint(total);
    }

}
