package com.carbonO.Dish;

import com.carbonO.UserCarbonTracker.userCarbonTracker;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @JsonManagedReference
    private List<DishRecipe> recipeIngredients;
    private Double totalCarbonFootprint;

    @OneToMany(mappedBy = "dish", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<DishKeywords> dishKeywords;
    private String photo;

    @OneToMany(mappedBy = "dish", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<userCarbonTracker> userCarbonTrackers;

    private Integer carbonRating;

    private Integer dishRewardPoints;

    public Dish() {
    }

    public Dish(String dishName) {
        this.dishName = dishName;
    }

    public Dish(String dishName, Double totalCarbonFootprint) {
        this.dishName = dishName;
        this.totalCarbonFootprint = totalCarbonFootprint;
    }

    public void setTotalCarbonFootprint(Double totalCarbonFootprint) {
        this.totalCarbonFootprint = totalCarbonFootprint;
    }
}
