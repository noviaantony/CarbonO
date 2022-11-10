package com.carbonOtest.UserCarbonTracker;

import org.springframework.data.jpa.repository.JpaRepository;


public interface UserCarbonTrackerRepository extends JpaRepository<UserCarbonTracker, Long> {
    UserCarbonTracker findByUserId(Long userId);
    UserCarbonTracker getByUserId(Long userId);
}

