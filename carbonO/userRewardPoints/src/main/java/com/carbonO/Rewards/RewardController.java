package com.carbonO.Rewards;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/carbonO/userRewardPoints/reward")
public class RewardController {

    private final RewardService rewardService;

    public RewardController(RewardService rewardService) {
        this.rewardService = rewardService;
    }

    @GetMapping("/getAllRewards")
    public ResponseEntity<List<Reward>> getAllRewards() {
        return ResponseEntity.ok().body(rewardService.getAllRewards());
    }
}
