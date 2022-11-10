package com.carbonO.Dish;

import com.carbonO.Ingredient.Ingredient;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DishRecipe {

//    @EmbeddedId
//    DishRecipeKey id;
//
//    @ManyToOne
//    @MapsId("dishId")
//    @JoinColumn(name = "dish_id")
//    Dish dish;
//
//    @ManyToOne
//    @MapsId("ingredientId")
//    @JoinColumn(name = "ingredient_id")
//    Ingredient ingredient;
//
//    private double quantity;
//
//    public DishRecipe() {
//
//    }


    @Id
    @SequenceGenerator(
            name = "dishRecipe_sequence",
            sequenceName = "dishRecipe_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "dishRecipe_sequence"
    )
    private Long id;
    private double quantity;

    @ManyToOne
    @JoinColumn(name = "dish_Id")
    @JsonBackReference("dish_Id")
    private Dish dish;

    @ManyToOne
    @JoinColumn (name = "ingredient_Id")
    @JsonBackReference("ingredient_Id")
    private Ingredient ingredient;

    public DishRecipe(Dish dish, Ingredient ingredient, double quantity) {
        this.dish = dish;
        this.ingredient = ingredient;
        this.quantity = quantity;
    }

}
