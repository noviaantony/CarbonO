package com.carbonO.RewardTransaction;

import com.carbonO.Rewards.Reward;
import com.carbonO.Rewards.RewardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RewardTransactionService {


    private final RewardTransactionRepository rewardTransactionRepository;

    @Autowired
    public RewardTransactionService(RewardTransactionRepository rewardTransactionRepository) {
        this.rewardTransactionRepository = rewardTransactionRepository;
    }

    //create a method to retrieve the user's reward transactions

}
