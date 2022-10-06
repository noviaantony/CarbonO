package com.carbonO.UserCarbonTracker;

import com.carbonO.Dish.Dish;
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
public class userCarbonTracker {
    @Id
    @SequenceGenerator(
            name = "userCarbonTracker_sequence",
            sequenceName = "userCarbonTracker_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "userCarbonTracker_sequence"
    )
    private Long id;
    private Long userId;
    @Column(name="date_of_consumption")
    private Date dateConsumed;

    @ManyToOne
    @JoinColumn(name="dish_id")
    @JsonBackReference
    private Dish dish;

    public userCarbonTracker() {

    }
    public userCarbonTracker(Long userId, Dish dish, Date dateConsumed) {
        this.userId = userId;
        this.dateConsumed = dateConsumed;
        this.dish = dish;
    }


}
