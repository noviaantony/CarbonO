package com.carbonO.Dish;

import org.springframework.stereotype.Service;

@Service
public class DishRewardPoints {

    //Method to calculate the reward points for a dish base on the dishCarbonRating
    public int getDishRewardPoints(Integer dishCarbonRating){

        if(dishCarbonRating == 1){
            return 10;
        }
        else if(dishCarbonRating == 2){
            return 20;
        }
        else if(dishCarbonRating == 3){
            return 30;
        }
        else if(dishCarbonRating == 4){
            return 40;
        }
        else if(dishCarbonRating == 5){
            return 50;
        }
        return 0;
    }
}
