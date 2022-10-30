package com.carbonO.userReward;

import com.carbonO.RewardTransaction.RewardTransactionService;
import com.carbonO.Rewards.Reward;
import com.carbonO.Rewards.RewardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserRewardService {
    private final UserRewardRepository userRewardRepository;
    private final RewardTransactionService rewardTransactionService;
    private final RewardService rewardService;

    @Autowired
    public UserRewardService(UserRewardRepository userRewardRepository, RewardTransactionService rewardTransactionService, RewardService rewardService) {
        this.userRewardRepository = userRewardRepository;
        this.rewardTransactionService = rewardTransactionService;
        this.rewardService = rewardService;
    }

    //if it is a new user, create a new reward point for the user
    public void addNewUserReward(Long userID) {

        UserReward userReward = new UserReward(userID, 0);
        userRewardRepository.save(userReward);
    }

    public UserReward getAllRewardsByUser(Long userID) {
        return userRewardRepository.findByUserId(userID);
    }

    @Transactional
    public void claimReward(Long userID, String rewardName) {
        //retrieve user's reward account
        UserReward userReward = userRewardRepository.findByUserId(userID);
        //retrieve reward
        Reward reward = rewardService.getRewardByName(rewardName);
        //Add reward transaction to the user's reward account
        rewardTransactionService.addNewRewardTransaction(userReward, reward);
        userReward.setRewardPoints((int) (userReward.getRewardPoints() - reward.getRedemptionPointsRequired()));
        userRewardRepository.save(userReward);
    }

    //create another method to edit reward points (set points)
}
