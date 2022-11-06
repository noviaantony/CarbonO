package com.carbonO.UserCarbonTracker;

import com.carbonO.CarbonTrackerTransaction.CarbonTrackerTransaction;
import com.carbonO.Dish.Dish;
import com.carbonO.Dish.DishRepository;
import com.carbonO.Dish.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;


@RestController
@RequestMapping(path = "api/v1/carbonO/carbonTracker/")
public class UserCarbonTrackerController {
    private final UserCarbonTrackerService userCarbonTrackerService;
    private final DishService dishService;

    @Autowired
    public UserCarbonTrackerController(UserCarbonTrackerService userCarbonTrackerService, DishService dishService) {
        this.userCarbonTrackerService = userCarbonTrackerService;
        this.dishService = dishService;
    }
    //Add new carbon tracker user
    @PostMapping(path = "addCarbonTrackerUser")
    public ResponseEntity<String> addCarbonTrackerUser(@RequestParam("userId") Long userId) {
        try {
            this.userCarbonTrackerService.addCarbonTrackerUser(userId);
            return ResponseEntity.status(201).body("Carbon tracker user added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    //Get all dishes consumed by a user
    @GetMapping("/getUserDishedConsumed")
    public ResponseEntity<List<CarbonTrackerTransaction>> getUserDishedConsumed(@RequestParam("userId") Long userId){

        List<CarbonTrackerTransaction>   userCarbonTrackerDishList = userCarbonTrackerService.getUserDishedConsumed(userId);

        if (userCarbonTrackerDishList.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        } else {
            return ResponseEntity.ok().body(userCarbonTrackerDishList);
        }
    }

    //Get a specific user's total carbon consumption since the beginning
    @GetMapping("/getUserTotalCarbonConsumption")
    public ResponseEntity<Double> getUserTotalCarbonConsumption(@RequestParam("userId") Long userId, @RequestHeader("Authorization") String token ) {
            return ResponseEntity.ok().body(userCarbonTrackerService.getUserTotalCarbonConsumption(userId, token));
    }

    //Add the dish consumed by a user
    //Note: To add Authorization header to request, currently not needed to allow initial testing of just the method logic
    @PostMapping("/addUserDishConsumed")
    @Transactional
    public ResponseEntity<String> addUserDishConsumed(@RequestParam("userId") Long userId, @RequestParam("receiptId") Long receiptId) {
        try {
            userCarbonTrackerService.addUserDishConsumed(userId, receiptId);
            return ResponseEntity.status(201).body("Dish consumed by user added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    //Todo: Get user total carbon consumption for a day or between a certain time period

}
