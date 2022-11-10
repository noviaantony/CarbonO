package com.carbonO.Ingredient;

import com.carbonO.Dish.DishRecipe;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Ingredient {
    @Id
    @SequenceGenerator(
            name = "ingredient_sequence",
            sequenceName = "ingredient_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "ingredient_sequence"
    )
    private Long id;
    private String ingredientName;
    private Double carbonFootprint;
    private String photo;

    //todo: add a field for description of the dish

    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL)
    @JsonManagedReference("ingredient_Id")
    private List<DishRecipe> dishRecipe;

    public Ingredient(String ingredientName, Double carbonFootprint) {
        this.ingredientName = ingredientName;
        this.carbonFootprint = carbonFootprint;
    }
}
