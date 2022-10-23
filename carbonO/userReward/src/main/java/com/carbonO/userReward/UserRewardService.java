package com.carbonO.userReward;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserRewardService {
    private final UserRewardRepository userRewardRepository;

    @Autowired
    public UserRewardService(UserRewardRepository userRewardRepository) {
        this.userRewardRepository = userRewardRepository;
    }

    //if it is a new user, create a new reward point for the user
    public void addNewUserReward(Long userID) {

        UserReward userReward = new UserReward(userID, 0);
        userRewardRepository.save(userReward);
    }

    public UserReward getAllRewardsByUser(Long userID) {
        return userRewardRepository.findByUserId(userID);
    }

    //create another method to edit reward points (set points)
}
