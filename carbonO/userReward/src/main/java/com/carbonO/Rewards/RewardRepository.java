package com.carbonO.Rewards;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RewardRepository extends JpaRepository<Reward, Long> {
    Optional<Reward> findByRewardName(String rewardName);
    List<Reward> findAllByOrderByRewardIdAsc();
}
