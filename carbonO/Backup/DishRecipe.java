package com.carbonO.dishCarbonInfo;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Entity
@EqualsAndHashCode
public class DishRecipe {

    @EmbeddedId
    DishRecipeKey id;

    @ManyToOne
    @MapsId("dishId")
    @JoinColumn(name = "dish_id")
    Dish dish;

    @ManyToOne
    @MapsId("ingredientId")
    @JoinColumn(name = "ingredient_id")
    Ingredient ingredient;

    private double quantity;

//    @Id
//    @SequenceGenerator(
//            name = "dishRecipe_sequence",
//            sequenceName = "dishRecipe_sequence",
//            allocationSize = 1
//    )
//    @GeneratedValue(
//            strategy = GenerationType.SEQUENCE,
//            generator = "dishRecipe_sequence"
//    )
//    private Long id;
//    @ManyToOne
//    @JoinColumn(name = "dish_Id")
//    private Dish dishId;
//
//    @ManyToOne
//    @JoinColumn (name = "ingredient_Id")
//    private Ingredients ingredientName;
}
