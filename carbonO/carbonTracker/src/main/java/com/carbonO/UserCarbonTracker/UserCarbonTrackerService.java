package com.carbonO.UserCarbonTracker;

import com.carbonO.Dish.Dish;
import com.carbonO.Dish.DishService;
import com.carbonO.Receipt.ReceiptRepository;
import com.carbonO.Receipt.ReceiptService;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Date;
import java.util.List;

@Service
public class UserCarbonTrackerService {
    private final UserCarbonTrakerRepository userCarbonTrakerRepository;
    private final WebClient webClient;
    private final ReceiptService receiptService;
    private final DishService dishService;


    public UserCarbonTrackerService(UserCarbonTrakerRepository userCarbonTrakerRepository, WebClient.Builder webClientBuilder,
                                    ReceiptService receiptService, DishService dishService) {
        this.dishService = dishService;
        this.receiptService = receiptService;
        this.userCarbonTrakerRepository = userCarbonTrakerRepository;
        this.webClient = webClientBuilder.baseUrl("http://localhost:8080/api/v1/carbonO/user/").build();
    }


    public Double getUserTotalCarbonConsumption(Long userId, String token) {
        //Temporarily this will check if the user is authorized to access the data
//        String isAuthorize = webClient
//                .get()
//                .uri("/authorizeUser")
//                .header("Authorization", "Bearer " + token)
//                .retrieve().bodyToMono(String.class).block();

        List<UserCarbonTracker> userCarbonTransactions = userCarbonTrakerRepository.findAllByUserId(userId);
        Double totalCarbonConsumption = 0.0;

        for (UserCarbonTracker userCarbonTransaction : userCarbonTransactions) {
            totalCarbonConsumption += userCarbonTransaction.getDish().getTotalCarbonFootprint();
        }
        return totalCarbonConsumption;
    }

    public void addUserDishConsumed(Long userId, Long receiptId) {
        Long dishId = receiptService.redeemReceiptById(receiptId).getDishConsumedId();

        Dish dish = dishService.findDishById(dishId);
        UserCarbonTracker userCarbonTracker = new UserCarbonTracker(userId, dish,new Date());
        userCarbonTrakerRepository.save(userCarbonTracker);
    }

    public List<UserCarbonTracker> getUserDishedConsumed(Long userId) {
        return userCarbonTrakerRepository.findAllByUserId(userId);
    }
}
