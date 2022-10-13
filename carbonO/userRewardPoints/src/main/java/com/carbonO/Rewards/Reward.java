package com.carbonO.Rewards;

import com.carbonO.RewardTransaction.RewardTransaction;
import lombok.*;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@EqualsAndHashCode
public class Reward {
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
    private Integer rewardId;

    private String rewardName;

    private String description;

    private Integer redemptionPoints;

    private Integer quantity;

    @OneToOne
    @JoinColumn(name = "reward_Id")
    private RewardTransaction reward;

    public Reward(Integer rewardId, String rewardName, String description, Integer redemptionPoints, Integer quantity) {
        this.rewardId = rewardId;
        this.rewardName = rewardName;
        this.description = description;
        this.redemptionPoints = redemptionPoints;
        this.quantity = quantity;
    }
}
