package com.carbonO.Registration;

import com.carbonO.Registration.token.ConfirmationToken;
import com.carbonO.Registration.token.ConfirmationTokenService;
import com.carbonO.User.User;
import com.carbonO.User.UserRepository;
import com.carbonO.User.UserRole;
import com.carbonO.User.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.LocalDateTime;
@Service
public class RegistrationService {
    private final UserService userService;

    private final ConfirmationTokenService confirmationTokenService;

    private final EmailValidator emailValidator;

    private final UserRepository userRepository;

    private final WebClient webClient;

    public RegistrationService (UserService userService, ConfirmationTokenService confirmationTokenService, EmailValidator emailValidator, UserRepository userRepository, WebClient.Builder webClient) {
        this.userService = userService;
        this.confirmationTokenService = confirmationTokenService;
        this.emailValidator = emailValidator;
        this.userRepository = userRepository;
        this.webClient = webClient.baseUrl("http://18.136.163.9:80/api/v1/carbonO/").build();
    }


    public String register(RegistrationRequest request) {
        boolean isValid = emailValidator.test(request.getEmail());
        boolean isEmailTaken = userRepository.findByEmail(request.getEmail()).isPresent();
        if (!isValid) {
            throw new IllegalStateException("email not found");
        } else if (isEmailTaken) {
            throw new IllegalStateException("email taken");
        }
        String token = userService.signUpUser(
                new User(
                        request.getFirstName(),
                        request.getLastName(),
                        request.getEmail(),
                        request.getPassword(),
                        UserRole.USER
                )
        );

        return token;
    }

    @Transactional
    public Long confirmToken(String token) {
        ConfirmationToken confirmationToken = confirmationTokenService
                .getToken(token)
                .orElseThrow(() ->
                        new IllegalStateException("token not found"));

        if (confirmationToken.getConfirmedAt() != null) {
            throw new IllegalStateException("email already confirmed");
        }

        LocalDateTime expiredAt = confirmationToken.getExpiresAt();

        if (expiredAt.isBefore(LocalDateTime.now())) {
            throw new IllegalStateException("token expired");
        }

        confirmationTokenService.setConfirmedAt(token);
        userService.enableAppUser(
                confirmationToken.getUser().getEmail());

        return confirmationToken.getUser().getId();
    }

    public void createUserRewardAccount(Long userId) {
        webClient
                .post()
                .uri("/userReward/addNewUserReward?userId=" + userId)
                .retrieve().bodyToMono(String.class).block();
    }

    public void createCarbonTrackerAccount(Long userId) {
        webClient
                .post()
                .uri("/carbonTracker/addCarbonTrackerUser?userId=" + userId)
                .retrieve().bodyToMono(String.class).block();
    }
}
