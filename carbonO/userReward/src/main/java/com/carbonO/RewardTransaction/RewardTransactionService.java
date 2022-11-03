package com.carbonO.RewardTransaction;

import com.carbonO.Rewards.Reward;
import com.carbonO.Rewards.RewardRepository;
import com.carbonO.Rewards.RewardService;
import com.carbonO.userReward.UserReward;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class RewardTransactionService {

    private final RewardTransactionRepository rewardTransactionRepository;

    @Autowired
    public RewardTransactionService(RewardTransactionRepository rewardTransactionRepository) {
        this.rewardTransactionRepository = rewardTransactionRepository;
    }

    public void addNewRewardTransaction(UserReward userReward, Reward reward) {

        RewardTransaction rewardTransaction = new RewardTransaction(new Date(),userReward, reward);
        rewardTransactionRepository.save(rewardTransaction);
    }

    //create a method to retrieve the user's reward transactions

}
