package com.carbonO.Dish;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Dish {
    @Id
    @SequenceGenerator(
            name = "dish_sequence",
            sequenceName = "dish_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "dish_sequence"
    )
    private Long id;
    private String dishName;
    @OneToMany(mappedBy = "dish", cascade = CascadeType.ALL)
    private List<DishRecipe> recipeIngredients;
    private Integer TotalCarbonFootprint;

    public Dish() {
    }
    public Dish(String dishName) {
        this.dishName = dishName;
    }
}
