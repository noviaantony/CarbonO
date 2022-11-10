package com.carbonO.Dish;

import com.carbonO.Exceptions.DishNotFoundException;
import com.carbonO.Ingredient.Ingredient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class DishService {
    private final DishRepository dishRepository;

    @Autowired
    public DishService(DishRepository dishRepository) {
        this.dishRepository = dishRepository;
    }
    //get dish by id
    public Dish findDishById(Long id){
        try {
            return dishRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            throw new DishNotFoundException("Dish by id " + id + " was not found");
        }
    }

    public Dish findByDishName(String dishName) {
        try {
            return dishRepository.findByDishName(dishName).get();
        } catch (NoSuchElementException e) {
            throw new DishNotFoundException("Dish name: " + dishName + " was not found");
        }
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
