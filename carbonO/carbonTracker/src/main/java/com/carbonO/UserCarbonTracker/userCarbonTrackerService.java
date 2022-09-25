package com.carbonO.UserCarbonTracker;

import com.carbonO.Dish.Dish;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class userCarbonTrackerService {
    private final userCarbonTrakerRepository userCarbonTrakerRepository;

    public userCarbonTrackerService(userCarbonTrakerRepository userCarbonTrakerRepository) {
        this.userCarbonTrakerRepository = userCarbonTrakerRepository;
    }

    public Integer getUserTotalCarbonConsumption(Long userId) {
        List<userCarbonTracker> userCarbonTransactions = userCarbonTrakerRepository.findByUserId(userId);
        Integer totalCarbonConsumption = 0;

        for (userCarbonTracker userCarbonTransaction : userCarbonTransactions) {
            totalCarbonConsumption += userCarbonTransaction.getDish().getTotalCarbonFootprint();
        }
        return totalCarbonConsumption;
    }

    public void addUserDishConsumed(Long userId, Dish dish) {
        userCarbonTracker userCarbonTracker = new userCarbonTracker(userId, dish,new Date());
        userCarbonTrakerRepository.save(userCarbonTracker);
    }
}
