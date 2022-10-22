package com.carbonO.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@Configuration
public class UserConfig {
    //temp encoder to create an encrypted password
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserConfig(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository){

        String encodedPassword = bCryptPasswordEncoder.encode("123");
        return args -> {
            User xz = new User(
                    "Zhao Xing",
                    "Chen",
                    "chenzhaoxing.98@gmail.com",
                    encodedPassword,
                    UserRole.ADMIN
            );
            repository.saveAll(
                    List.of(xz)
            );
        };
    }
}
