package com.carbonO.userReward;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userRewardService {
    private final userRewardRepository userRewardRepository;

    @Autowired
    public userRewardService(userRewardRepository userRewardRepository) {
        this.userRewardRepository = userRewardRepository;
    }

    //if it is a new user, create a new reward point for the user
    public userReward addNewUserReward(Integer userID) {

        userReward userReward = new userReward(userID, 0);
        return userRewardRepository.save(userReward);
    }
    //create another method to edit reward points (set points)
}
