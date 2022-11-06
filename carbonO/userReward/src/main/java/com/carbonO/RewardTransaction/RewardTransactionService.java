package com.carbonO.RewardTransaction;

import com.carbonO.Rewards.Reward;
import com.carbonO.Rewards.RewardRepository;
import com.carbonO.userReward.UserReward;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class RewardTransactionService {

    private final RewardTransactionRepository rewardTransactionRepository;
    private final RewardRepository rewardRepository;

    @Autowired
    public RewardTransactionService(RewardTransactionRepository rewardTransactionRepository , RewardRepository rewardRepository) {
        this.rewardTransactionRepository = rewardTransactionRepository;
        this.rewardRepository = rewardRepository;
    }

    public void addNewRewardTransaction(UserReward userReward, Reward reward) {

        //Create a new reward transaction
        RewardTransaction rewardTransaction = new RewardTransaction(new Date(),userReward, reward);
        reward.setRewardQuantity(reward.getRewardQuantity() - 1);
        rewardRepository.save(reward);


        rewardTransactionRepository.save(rewardTransaction);
    }

    public void addNewDonationTransaction(UserReward userReward, Reward reward, Integer pointsToDonate, boolean isDonation, Long organisationId) {

        //Create a new donation transaction
        RewardTransaction rewardTransaction = new RewardTransaction(new Date(), userReward, reward, pointsToDonate, true, organisationId);

        rewardTransactionRepository.save(rewardTransaction);
    }

    //create a method to retrieve the user's reward transactions

}
