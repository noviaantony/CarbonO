package com.carbonOtest.userReward;

import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRewardRepository extends JpaRepository<UserReward, Long> {
    UserReward findByUserId(Long userId);
}
