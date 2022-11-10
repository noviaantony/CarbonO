package com.carbonOtest.Rewards;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RewardService {


    private final RewardRepository rewardRepository;

    @Autowired
    public RewardService(RewardRepository rewardRepository) {
        this.rewardRepository = rewardRepository;
    }

    public List<Reward> getAllRewards(){
        return rewardRepository.findAllByOrderByRewardIdAsc();
    }

    public Reward getRewardById(Long id){
        return rewardRepository.findById(id).orElseThrow(() -> new IllegalStateException("Reward with id " + id + " does not exist"));
    }
    public Reward getRewardByName(String name){
        return rewardRepository.findByRewardName(name).orElseThrow(() -> new IllegalStateException("Reward with name " + name + " does not exist"));
    }
}
