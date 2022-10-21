package com.carbonO.Dish;

import com.carbonO.Exceptions.DishNotFoundException;
import com.carbonO.Ingredient.Ingredient;
import com.carbonO.Ingredient.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class DishService {
    private final DishRepository dishRepository;
    private final DishRecipeRepository dishRecipeRepository;
    private final IngredientRepository ingredientRepository;

    @Autowired
    public DishService(DishRepository dishRepository, DishRecipeRepository dishRecipeRepository, IngredientRepository ingredientRepository) {
        this.dishRepository = dishRepository;
        this.dishRecipeRepository = dishRecipeRepository;
        this.ingredientRepository = ingredientRepository;
    }
    //get dish by id
    public Dish findDishById(Long id){
        return dishRepository.findById(id).orElseThrow(()-> new DishNotFoundException("Dish by id " + id + " was not found"));
    }

    //Todo: creating of a new dish
    //Todo: deletion of a dish

    @Transactional
    public void updateTotalCarbonFootprint() {
        List<Dish> dishList = dishRepository.findAll();
        for (Dish dish : dishList) {
            List<DishRecipe> dishRecipeList = dish.getRecipeIngredients();

            Double total = 0.0;
            for (DishRecipe dishRecipe : dishRecipeList) {

                Ingredient ingredient = dishRecipe.getIngredient();
                Double quantity = dishRecipe.getQuantity();
                Double footprint = ingredient.getCarbonFootprint();

                total += quantity * footprint;
            }

            dish.setTotalCarbonFootprint(total);
            dishRepository.save(dish);
        }
    }

    public List<Dish> getAllDishes() {
        return dishRepository.findAll();
    }
}
