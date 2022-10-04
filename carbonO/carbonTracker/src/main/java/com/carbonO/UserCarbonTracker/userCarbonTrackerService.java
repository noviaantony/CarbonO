package com.carbonO.UserCarbonTracker;

import com.carbonO.Dish.Dish;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Date;
import java.util.List;

@Service
public class userCarbonTrackerService {
    private final userCarbonTrakerRepository userCarbonTrakerRepository;
    private final WebClient webClient;

    public userCarbonTrackerService(userCarbonTrakerRepository userCarbonTrakerRepository, WebClient.Builder webClientBuilder) {
        this.userCarbonTrakerRepository = userCarbonTrakerRepository;
        this.webClient = webClientBuilder.baseUrl("http://localhost:8080/api/v1/carbonO/user/").build();
    }

    public Double getUserTotalCarbonConsumption(Long userId, String token) {
        //Temporarily this will check if the user is authorized to access the data
        String isAuthorize = webClient
                .get()
                .uri("/authorizeUser")
                .header("Authorization", "Bearer " + token)
                .retrieve().bodyToMono(String.class).block();

        List<userCarbonTracker> userCarbonTransactions = userCarbonTrakerRepository.findAllByUserId(userId);
        Double totalCarbonConsumption = 0.0;

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
