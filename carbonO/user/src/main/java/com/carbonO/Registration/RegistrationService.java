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

import java.time.LocalDateTime;
@Service
@AllArgsConstructor
public class RegistrationService {
    private final UserService userService;

    private final ConfirmationTokenService confirmationTokenService;

    private final EmailValidator emailValidator;

    private final UserRepository userRepository;

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
    public String confirmToken(String token) {
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

        //create a user reward account after user confirmed their email, through an internal api call to userReward microservice


        return "confirmed";
    }
}
