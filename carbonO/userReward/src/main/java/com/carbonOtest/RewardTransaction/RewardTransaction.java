package com.carbonOtest.RewardTransaction;

import com.carbonOtest.Rewards.Reward;
import com.carbonOtest.userReward.UserReward;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
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
    private LocalDateTime dateOfTransaction;
    private boolean isDonation = false;
    private Long organisationId;
    private Integer pointsDonated = 0;

    @ManyToOne
    @JoinColumn (name = "userReward_id")
    @JsonBackReference
    private UserReward userReward;

    @OneToOne
    @JoinColumn(name = "reward_id")
    private Reward reward;

    public RewardTransaction(LocalDateTime dateOfTransaction, UserReward userReward, Reward reward) {
        this.dateOfTransaction = dateOfTransaction;
        this.userReward = userReward;
        this.reward = reward;
    }
    public RewardTransaction(LocalDateTime dateOfTransaction, UserReward userReward, Reward reward, Integer pointsDonated, boolean isDonation, Long organisationId) {
        this.dateOfTransaction = dateOfTransaction;
        this.userReward = userReward;
        this.reward = reward;
        this.pointsDonated = pointsDonated;
        this.isDonation = isDonation;
        this.organisationId = organisationId;
    }
}
