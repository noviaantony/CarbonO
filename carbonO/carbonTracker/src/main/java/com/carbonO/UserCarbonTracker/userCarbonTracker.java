package com.carbonO.UserCarbonTracker;

import com.carbonO.Dish.Dish;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class userCarbonTracker {
    @Id
    @SequenceGenerator(
            name = "dish_sequence",
            sequenceName = "dish_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "dish_sequence"
    )
    private Long id;
    private Long userId;
    private Long dishId;
    @Column(name="date_of_consumption")
    private Date dateConsumed;

    public userCarbonTracker() {

    }
}
