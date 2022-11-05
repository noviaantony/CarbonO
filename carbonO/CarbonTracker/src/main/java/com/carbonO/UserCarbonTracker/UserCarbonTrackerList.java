package com.carbonO.UserCarbonTracker;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

// Wrapper class
@Setter
@Getter
public class UserCarbonTrackerList {

    private List<UserCarbonTracker> userCarbonTrackerList;

    public UserCarbonTrackerList(List<UserCarbonTracker> userCarbonTracker) {
        userCarbonTrackerList = new ArrayList<>();
    }
}
