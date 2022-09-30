package com.carbonO.dishCarbonInfo;

import javax.persistence.*;
import java.util.List;

@Entity
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
    private Integer carbonFootprint;
    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL)
    private List<DishRecipe> dishRecipe;

}
