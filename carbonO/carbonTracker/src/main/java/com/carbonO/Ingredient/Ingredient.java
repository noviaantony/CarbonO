package com.carbonO.Ingredient;

import com.carbonO.Dish.DishRecipe;
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
    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL)
    private List<DishRecipe> dishRecipe;
    private Double carbonFootprint;
    private String photo;

    public Ingredient(String ingredientName, Double carbonFootprint) {
        this.ingredientName = ingredientName;
        this.carbonFootprint = carbonFootprint;
    }
}
