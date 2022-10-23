package com.carbonO.userReward;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface UserRewardRepository extends JpaRepository<UserReward, Long> {
    UserReward findByUserId(Long userId);
}
