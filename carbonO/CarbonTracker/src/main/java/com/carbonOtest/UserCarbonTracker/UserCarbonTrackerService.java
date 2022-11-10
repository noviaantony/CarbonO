package com.carbonOtest.UserCarbonTracker;

import com.carbonOtest.CarbonTrackerTransactions.CarbonTrackerTransaction;
import com.carbonOtest.CarbonTrackerTransactions.CarbonTrackerTransactionService;
import com.carbonOtest.Dish.Dish;
import com.carbonOtest.Dish.DishService;
import com.carbonOtest.JWTAuth.JWTAuthService;
import com.carbonOtest.Receipt.ReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class UserCarbonTrackerService {
    private final UserCarbonTrackerRepository userCarbonTrackerRepository;
    private final CarbonTrackerTransactionService carbonTrackerTransactionService;
    private final ReceiptService receiptService;
    private final DishService dishService;
    private final JWTAuthService jwtAuthService;
    private final WebClient webClient;

    @Autowired
    public UserCarbonTrackerService(UserCarbonTrackerRepository userCarbonTrackerRepository, CarbonTrackerTransactionService carbonTrackerTransactionService,
                                    ReceiptService receiptService, DishService dishService, JWTAuthService jwtAuthService, WebClient.Builder webClientBuilder) {
        this.userCarbonTrackerRepository = userCarbonTrackerRepository;
        this.carbonTrackerTransactionService = carbonTrackerTransactionService;
        this.receiptService = receiptService;
        this.dishService = dishService;
        this.jwtAuthService = jwtAuthService;
        this.webClient = webClientBuilder.baseUrl("http://18.136.163.9:80/api/v1/carbonO/").build();
    }


    public Double getUserTotalCarbonConsumption(Long userId, String token) {

        if (!jwtAuthService.authorizeUser(token)){
            throw new RuntimeException("User is not authorized to access this data");
        }

        //get user least of carbonTrackerTransactions
        List<CarbonTrackerTransaction> userCarbonTransactions = userCarbonTrackerRepository.findByUserId(userId).getCarbonTrackerTransaction();
        Double totalCarbonConsumption = 0.0;

        for (CarbonTrackerTransaction carbonTrackerTransaction : userCarbonTransactions) {
            totalCarbonConsumption += carbonTrackerTransaction.getDish().getTotalCarbonFootprint();
        }
        return totalCarbonConsumption;
    }

    public void addUserDishConsumed(Long userId, Long receiptId) {
        Long dishId = receiptService.redeemReceiptById(receiptId).getDishConsumedId();
        Dish dish = dishService.findDishById(dishId);
        Integer dishPoints = dish.getCarbonRating() * 10;

        //get  user carbon Tracker
        UserCarbonTracker userCarbonTracker = userCarbonTrackerRepository.findByUserId(userId);
        //add new carbon tracker transaction
        CarbonTrackerTransaction carbonTrackerTransaction = new CarbonTrackerTransaction(LocalDateTime.now(),userCarbonTracker, dish, dishPoints);

        //Internal Api call to update user points on reward
        webClient.put().uri("userReward/updateUserPoints?userId=" + userId + "&pointsEarned=" + dishPoints).retrieve().bodyToMono(String.class).block();

        //save carbon tracker transaction by calling carbonTrackerTransactionService
        carbonTrackerTransactionService.saveCarbonTrackerTransaction(carbonTrackerTransaction);
    }

    public List<CarbonTrackerTransaction>  getUserDishedConsumed(Long userId) {
        return userCarbonTrackerRepository.findByUserId(userId).getCarbonTrackerTransaction();
    }

    public void addCarbonTrackerUser(Long userId) {
        UserCarbonTracker userCarbonTracker = new UserCarbonTracker(userId);
        userCarbonTrackerRepository.save(userCarbonTracker);
    }
}
