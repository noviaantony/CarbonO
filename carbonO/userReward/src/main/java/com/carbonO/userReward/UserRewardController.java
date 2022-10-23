package com.carbonO.userReward;

import com.carbonO.Common.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/carbonO/userReward/")
public class UserRewardController {
    private final UserRewardService userRewardService;

    public UserRewardController(UserRewardService userRewardService) {
        this.userRewardService = userRewardService;
    }

    @PostMapping("/addNewUserReward")
    public ResponseEntity<ApiResponse> addNewUserReward(@RequestParam("userID") Long userID) {
        userRewardService.addNewUserReward(userID);
        return new ResponseEntity<>(new ApiResponse(true, "New user reward added"), HttpStatus.CREATED);
    }
}
