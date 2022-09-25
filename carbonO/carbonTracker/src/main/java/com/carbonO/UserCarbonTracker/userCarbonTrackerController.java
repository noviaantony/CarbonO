package com.carbonO.UserCarbonTracker;

import com.carbonO.Dish.Dish;
import com.carbonO.Dish.DishRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "api/v1/carbonO/userCarbonTracker")
public class userCarbonTrackerController {
    private final userCarbonTrackerService userCarbonTrackerService;
    private final DishRepository dishRepository;

    public userCarbonTrackerController(userCarbonTrackerService userCarbonTrackerService, DishRepository dishRepository) {
        this.userCarbonTrackerService = userCarbonTrackerService;
        this.dishRepository = dishRepository;
    }


    //Get all user total carbon consumption
    @GetMapping("/getUserTotalCarbonConsumption")
    public ResponseEntity<Integer> getUserTotalCarbonConsumption(@RequestParam("userId") Long userId) {
        return ResponseEntity.ok().body(userCarbonTrackerService.getUserTotalCarbonConsumption(userId));
    }

    //Post user dish consumed
    @PostMapping("/addUserDishConsumed")
    public void addUserDishConsumed(@RequestParam("userId") Long userId, @RequestParam("dishId") Long dishId) {
        Dish dish = dishRepository.findById(dishId).get();
        userCarbonTrackerService.addUserDishConsumed(userId, dish);
    }

    //Get user total carbon consumption for a day or between a certain period of time
}
