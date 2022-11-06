package com.carbonO.UserCarbonTracker;

import com.carbonO.CarbonTrackerTransaction.CarbonTrackerTransaction;
import com.carbonO.CarbonTrackerTransaction.CarbonTrackerTransactionRepository;
import com.carbonO.CarbonTrackerTransaction.CarbonTrackerTransactionService;
import com.carbonO.Dish.Dish;
import com.carbonO.Dish.DishService;
import com.carbonO.JWTAuth.JWTAuthService;
import com.carbonO.Receipt.ReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

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
        this.webClient = webClientBuilder.baseUrl("http://18.136.163.9:8080/api/v1/carbonO/").build();
    }


    public Double getUserTotalCarbonConsumption(Long userId, String token) {
        //commented off for testing
//        if (!jwtAuthService.authorizeUser(token)){
//            throw new RuntimeException("User is not authorized to access this data");
//        }

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
        CarbonTrackerTransaction carbonTrackerTransaction = new CarbonTrackerTransaction(new Date(),userCarbonTracker, dish, dishPoints);

        //Internal Api call to update user points on reward
        webClient.put().uri("userReward/updateUserPoints?userId=" + userId + "&pointsEarned=" + dishPoints).retrieve().bodyToMono(String.class).block();

        //save carbon tracker transaction by calling carbonTrackerTransactionService
        carbonTrackerTransactionService.saveCarbonTrackerTransaction(carbonTrackerTransaction);
    }

    public List<CarbonTrackerTransaction>  getUserDishedConsumed(Long userId) {
            List<CarbonTrackerTransaction> userCarbonTransactions = userCarbonTrackerRepository.findByUserId(userId).getCarbonTrackerTransaction();
//            List<Dish> userDishes = new ArrayList<>();
//            for(CarbonTrackerTransaction carbonTrackerTransaction : userCarbonTransactions){
//                userDishes.add(carbonTrackerTransaction.getDish());
//            }

//        List<Dish> dishConsumed = new ArrayList<>();
//        for (UserCarbonTracker userCarbonTracker : userCarbonTrackerList){
//            dishConsumed.add(userCarbonTracker.getDish());
//        }

        return userCarbonTransactions;
    }

    public void addCarbonTrackerUser(Long userId) {
        UserCarbonTracker userCarbonTracker = new UserCarbonTracker(userId);
        userCarbonTrackerRepository.save(userCarbonTracker);
    }
}
