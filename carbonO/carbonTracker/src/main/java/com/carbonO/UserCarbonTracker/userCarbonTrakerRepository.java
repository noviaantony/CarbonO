package com.carbonO.UserCarbonTracker;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface userCarbonTrakerRepository extends JpaRepository<userCarbonTracker, Long> {
    List<userCarbonTracker> findAllByUserId(Long userId);

}

