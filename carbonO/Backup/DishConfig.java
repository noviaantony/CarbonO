package com.carbonO.dishCarbonInfo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@Configuration
public class DishConfig {

    @Bean
    CommandLineRunner commandLineRunner(DishRepository repository){

        return args -> {
            Dish dish = new Dish(
                    "Novia",
                    "Antony",
                    "novia@gmail.com",
                    encodedPassword,
                    UserRole.ADMIN
            );
            repository.saveAll(
                    List.of(novia)
            );
        };
    }
}
