package com.carbonO.UserCarbonTracker;

import com.carbonO.Dish.Dish;
import com.carbonO.Dish.DishRepository;
import com.carbonO.Dish.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;


@RestController
@RequestMapping(path = "api/v1/carbonO/carbonTracker/")
public class UserCarbonTrackerController {
    private final UserCarbonTrackerService userCarbonTrackerService;
    private final DishRepository dishRepository;
    private final DishService dishService;

    @Autowired
    public UserCarbonTrackerController(UserCarbonTrackerService userCarbonTrackerService, DishRepository dishRepository, DishService dishService, WebClient.Builder webClientBuilder) {
        this.userCarbonTrackerService = userCarbonTrackerService;
        this.dishRepository = dishRepository;
        this.dishService = dishService;
    }
    //Get all dishes consumed by a user
    @GetMapping("/getUserDishedConsumed")
    public ResponseEntity<List<UserCarbonTracker>> getUserDishedConsumed(@RequestParam("userId") Long userId){
        return ResponseEntity.ok().body(userCarbonTrackerService.getUserDishedConsumed(userId));
    }

    //Get a specific user's total carbon consumption since the beginning
    @GetMapping("/getUserTotalCarbonConsumption")
    public ResponseEntity<Double> getUserTotalCarbonConsumption(@RequestParam("userId") Long userId, @RequestHeader("Authorization") String token ) {
            return ResponseEntity.ok().body(userCarbonTrackerService.getUserTotalCarbonConsumption(userId, token));
    }

    //Add the dish consumed by a user
    //Note: To add Authorization header to request, currently not needed to allow initial testing of just the method logic
    @PostMapping("/addUserDishConsumed")
    public void addUserDishConsumed(@RequestParam("userId") Long userId, @RequestParam("dishId") Long dishId) {
        Dish dish = dishRepository.findById(dishId).get();
        userCarbonTrackerService.addUserDishConsumed(userId, dish);
    }

    //Todo: Get user total carbon consumption for a day or between a certain time period

}
