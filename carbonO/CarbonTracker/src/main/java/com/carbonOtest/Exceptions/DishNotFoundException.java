package com.carbonOtest.Exceptions;

public class DishNotFoundException extends RuntimeException{

    public DishNotFoundException(String message) {
        super(message);
    }
}
