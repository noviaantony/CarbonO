package com.carbonO.CarbonTrackerTransactions;

import com.carbonO.Dish.Dish;
import com.carbonO.UserCarbonTracker.UserCarbonTracker;
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
public class CarbonTrackerTransaction {
    @Id
    @SequenceGenerator(
            name = "CarbonTrackerTransaction_sequence",
            sequenceName = "CarbonTrackerTransaction_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "CarbonTrackerTransaction_sequence"
    )
    private Long id;
    @Column(name="date_of_consumption")
    private LocalDateTime dateConsumed;
    private Integer pointsEarned;

    @ManyToOne
    @JoinColumn(name="userCarbonTracker_id")
    @JsonBackReference
    private UserCarbonTracker userCarbonTracker;

    @ManyToOne
    @JoinColumn(name="dish_id", nullable=false)
    private Dish dish;

    public CarbonTrackerTransaction(LocalDateTime dateConsumed, UserCarbonTracker userCarbonTracker, Dish dish, Integer pointsEarned) {
        this.dateConsumed = dateConsumed;
        this.userCarbonTracker = userCarbonTracker;
        this.dish = dish;
        this.pointsEarned = pointsEarned;
    }


}
