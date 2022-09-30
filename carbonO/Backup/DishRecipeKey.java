package com.carbonO.dishCarbonInfo;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
public class DishRecipeKey implements Serializable {
    private Long dishId;
    private Long ingredientId;

    public DishRecipeKey() {

    }
}
