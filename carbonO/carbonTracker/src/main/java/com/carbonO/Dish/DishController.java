package com.carbonO.Dish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/carbonO/carbonTracker/dish")
public class DishController {
    private final DishService dishService;

    @Autowired
    public DishController(DishService dishService) {
        this.dishService = dishService;
    }

    //Retrieve all dishes in the database
    @GetMapping("/getAllDishes")
    public ResponseEntity<List<Dish>> getAllDishes() {
        return ResponseEntity.ok().body(dishService.getAllDishes());
    }
}
