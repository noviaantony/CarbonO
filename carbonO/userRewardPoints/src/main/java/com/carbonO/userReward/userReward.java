package com.carbonO.userReward;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class userReward {
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
    private Long rewardId;
    private Integer userID;
    private Integer rewardPoints;

    public userReward(Integer userID, int i) {

    }
}
