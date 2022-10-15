package com.carbonO.RewardTransaction;

import com.carbonO.Rewards.Reward;
import com.carbonO.userReward.UserReward;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class RewardTransaction {
    @Id
    @SequenceGenerator(
            name = "reward_transaction_sequence",
            sequenceName = "reward_transaction_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "reward_transaction_sequence"
    )
    private Long id;
    private Date dataOfTransaction;

    @ManyToOne
    @JoinColumn (name = "userReward_id")
    @JsonBackReference
    private UserReward userReward;

    @OneToOne (mappedBy = "reward", cascade = CascadeType.ALL )
    private Reward reward;

    public RewardTransaction() {

    }
}
