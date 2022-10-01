package com.carbonO;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class CarbonOCarbonTrackerApplication {
    public static void main(String[] args) {
        SpringApplication.run(CarbonOCarbonTrackerApplication.class, args);
    }
}