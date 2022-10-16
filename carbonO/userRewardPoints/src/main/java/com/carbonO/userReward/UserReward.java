package com.carbonO.userReward;

import com.carbonO.RewardTransaction.RewardTransaction;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

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
    private Long userID;
    private Integer rewardPoints;

    @OneToMany(mappedBy = "userReward", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<RewardTransaction> rewardTransactions;

    public UserReward(Integer userID, int i) {

    }
}
