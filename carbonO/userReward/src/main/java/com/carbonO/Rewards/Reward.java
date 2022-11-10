package com.carbonO.Rewards;

import com.carbonO.RewardTransaction.RewardTransaction;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.NotNull;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@EqualsAndHashCode
public class Reward {
    @Id
    @SequenceGenerator(
            name = "reward_sequence",
            sequenceName = "reward_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "reward_sequence"
    )
    private Long rewardId;

    @NotNull
    private String brandName;
    @NotNull

    private String rewardName;

    @NotNull
    private Integer redemptionPointsRequired;
    private String rewardDescription;

    @NotNull
    private Integer rewardQuantity;
    private String website;
    private String imageAddress;

    @NotNull
    private String rewardType;

    @OneToOne(mappedBy = "reward", cascade = CascadeType.ALL)
    @JsonBackReference
    private RewardTransaction rewardTransaction;

    public Reward(String brandName, String rewardName, Integer redemptionPointsRequired,
                  String rewardDescription, Integer rewardQuantity, String website, String imageAddress,
                  String rewardType) {
        this.brandName = brandName;
        this.rewardName = rewardName;
        this.redemptionPointsRequired = redemptionPointsRequired;
        this.rewardDescription = rewardDescription;
        this.rewardQuantity = rewardQuantity;
        this.website = website;
        this.imageAddress = imageAddress;
        this.rewardType = rewardType;
    }
}
