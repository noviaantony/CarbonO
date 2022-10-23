package com.carbonO.Rewards;

import com.carbonO.RewardTransaction.RewardTransaction;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
    private Long rewardId;
    private String brandName;
    private String rewardName;
    private Integer redemptionPointsRequired;
    private String rewardDescription;
    private Integer rewardQuantity;
    private String website;
    private String imageAddress;
    private String rewardType;

    @OneToOne
    @JoinColumn(name = "rewardTransacton_Id")
    @JsonBackReference
    private RewardTransaction rewardTransaction;

    public Reward(String brandName, String rewardName, Integer redemptionPointsRequired,
                  String rewardDescription, Integer rewardQuantity, String website, String imageAddress,
                  String rewardType){
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
