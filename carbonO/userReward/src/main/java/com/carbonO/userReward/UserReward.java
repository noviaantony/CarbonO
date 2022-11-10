package com.carbonO.userReward;

import com.carbonO.RewardTransaction.RewardTransaction;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class UserReward {
    @Id
    @SequenceGenerator(
            name = "user_Reward_sequence",
            sequenceName = "user_Reward_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_Reward_sequence"
    )
    private Long userRewardId;

    @NotNull
    private Long userId;
    @NotNull
    private Integer rewardPoints;

    @OneToMany(mappedBy = "userReward", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<RewardTransaction> rewardTransactions;

    public UserReward(Long userId, Integer rewardPoints) {
        this.userId = userId;
        this.rewardPoints = rewardPoints;
    }
}
