package com.carbonO.UserCarbonTracker;

import com.carbonO.Dish.Dish;
import com.carbonO.Dish.DishRepository;
import org.apache.http.protocol.HTTP;
import org.springframework.http.HttpCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(path = "api/v1/carbonO/userCarbonTracker")
public class userCarbonTrackerController {
    private final userCarbonTrackerService userCarbonTrackerService;
    private final DishRepository dishRepository;
//    private final RestTemplate restTemplate;

    public userCarbonTrackerController(userCarbonTrackerService userCarbonTrackerService, DishRepository dishRepository, WebClient.Builder webClientBuilder) {
        this.userCarbonTrackerService = userCarbonTrackerService;
        this.dishRepository = dishRepository;
    }

    //Get all user total carbon consumption
    @GetMapping("/getUserTotalCarbonConsumption")
    public ResponseEntity<Double> getUserTotalCarbonConsumption(@RequestParam("userId") Long userId, @RequestHeader("Authorization") String token ) {
            return ResponseEntity.ok().body(userCarbonTrackerService.getUserTotalCarbonConsumption(userId, token));
    }

    //Post user dish consumed
    @PostMapping("/addUserDishConsumed")
    public void addUserDishConsumed(@RequestParam("userId") Long userId, @RequestParam("dishId") Long dishId) {
        Dish dish = dishRepository.findById(dishId).get();
        userCarbonTrackerService.addUserDishConsumed(userId, dish);
    }

    //Get user total carbon consumption for a day or between a certain period of time
}
