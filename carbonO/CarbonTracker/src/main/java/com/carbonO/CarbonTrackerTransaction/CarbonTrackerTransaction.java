package com.carbonO.CarbonTrackerTransaction;

import com.carbonO.Dish.Dish;
import com.carbonO.UserCarbonTracker.UserCarbonTracker;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

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
    private Date dateConsumed;

    @ManyToOne
    @JoinColumn(name="userCarbonTracker_id")
    @JsonBackReference
    private UserCarbonTracker userCarbonTracker;

    @OneToOne
    @JoinColumn(name="dish_id")
    private Dish dish;

    public CarbonTrackerTransaction(Date dateConsumed, UserCarbonTracker userCarbonTracker, Dish dish) {
        this.dateConsumed = dateConsumed;
        this.userCarbonTracker = userCarbonTracker;
        this.dish = dish;
    }
}
