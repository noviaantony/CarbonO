package com.carbonO.userReward;

import com.carbonO.Common.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/carbonO/userReward")
public class userRewardController {
    private final userRewardService userRewardService;

    public userRewardController(userRewardService userRewardService) {
        this.userRewardService = userRewardService;
    }

    @PostMapping("/addNewUserReward/{userID}")
    public ResponseEntity<ApiResponse> addNewUserReward(@PathVariable("userID") Integer userID) {
        addNewUserReward(userID);
        return new ResponseEntity<>(new ApiResponse(true, "New user reward added"), HttpStatus.CREATED);
    }
}
