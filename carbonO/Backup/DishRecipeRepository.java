package com.carbonO.dishCarbonInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishRecipeRepository extends JpaRepository<DishRecipe, Long> {
}
