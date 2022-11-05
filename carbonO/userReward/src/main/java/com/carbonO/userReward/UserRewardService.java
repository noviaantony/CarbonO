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
        //todo: check if user ID already has a reward point

        //create a new reward point for the user
        UserReward userReward = new UserReward(userID, 0);
        userRewardRepository.save(userReward);
    }

    public UserReward getAllRewardsByUser(Long userID) {
        return userRewardRepository.findByUserId(userID);
    }

    @Transactional
    public void claimReward(Long userID, Long rewardId) {
        //retrieve user's reward account
        UserReward userReward = userRewardRepository.findByUserId(userID);
        //retrieve reward
        Reward reward = rewardService.getRewardById(rewardId);
        //check if user has enough points to claim reward
        if (userReward.getRewardPoints() < reward.getRedemptionPointsRequired()) {
            throw new IllegalStateException("Not enough points to claim reward");
        }
        //Add reward transaction to the user's reward account
        rewardTransactionService.addNewRewardTransaction(userReward, reward);

        //update user's reward points
        userReward.setRewardPoints((int) (userReward.getRewardPoints() - reward.getRedemptionPointsRequired()));
        userRewardRepository.save(userReward);
    }

    public void donateRewardPoints(Long userID, int pointsToDonate, Long organisationId) {
        //retrieve user's reward account
        UserReward userReward = userRewardRepository.findByUserId(userID);

        //check if user has enough points to donate
        if (userReward.getRewardPoints() < pointsToDonate)  {
            throw new IllegalStateException("Not enough points to claim reward");
        }

        //Add reward transaction to the user's reward account
        rewardTransactionService.addNewDonationTransaction(userReward, null,true, organisationId);

        //deduct points from user's reward account
        userReward.setRewardPoints(userReward.getRewardPoints() - pointsToDonate);
        userRewardRepository.save(userReward);
    }

}
