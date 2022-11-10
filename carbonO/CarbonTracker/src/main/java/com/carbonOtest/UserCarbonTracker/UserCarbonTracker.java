package com.carbonOtest.UserCarbonTracker;

import com.carbonOtest.CarbonTrackerTransactions.CarbonTrackerTransaction;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserCarbonTracker {
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

    @OneToMany(mappedBy = "userCarbonTracker", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<CarbonTrackerTransaction> carbonTrackerTransaction;

    public UserCarbonTracker(Long userId) {
        this.userId = userId;
    }


}
