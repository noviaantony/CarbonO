package com.carbonO.Dish;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class DishKeywords {
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
    private String keyword;

    @ManyToOne
    @JoinColumn(name = "dish_Id")
    @JsonBackReference("dish_dishKeyWords")
    private Dish dish;

    public DishKeywords(Dish dish, String keyword) {
        this.dish = dish;
        this.keyword = keyword;
    }

}
