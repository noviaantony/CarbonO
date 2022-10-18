package com.carbonO.Dish;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishRecipeRepository extends JpaRepository<DishRecipe, Long> {

}
