package com.carbonO.Dish;

import com.carbonO.UserCarbonTracker.UserCarbonTracker;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
    private Double totalCarbonFootprint;
    private String photo;
    private Integer carbonRating;
    private Integer dishRewardPoints;

    //@JsonManagedReference and @JsonBackReference are used to avoid infinite recursion when serializing and deserializing objects
    @OneToMany(mappedBy = "dish", cascade = CascadeType.ALL)
    @JsonManagedReference("dish_Id")
    private List<DishRecipe> recipeIngredients;

    @OneToMany(mappedBy = "dish", cascade = CascadeType.ALL)
    @JsonManagedReference("dish_dishKeyWords")
    private List<DishKeywords> dishKeywords;

    @OneToMany(mappedBy = "dish", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference("dish_userCarbonTracker")
    private List<UserCarbonTracker> userCarbonTrackers;

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
