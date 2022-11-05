package com.carbonO.User;

import com.carbonO.Registration.token.ConfirmationToken;
import com.carbonO.Registration.token.ConfirmationTokenService;
import com.carbonO.User.Exception.UserNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;

    private final static String USER_NOT_FOUND_MSG = "user with email %s not found";

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final ConfirmationTokenService confirmationTokenService;

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    @Override
    public User loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).orElseThrow(() ->
                new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, email)));
    }

    public String signUpUser(User user) {
        //checks for duplicate and other verifications are done in the registration service

        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());

        user.setPassword(encodedPassword);

        userRepository.save(user);

        String token = UUID.randomUUID().toString();
        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                user
        );

        confirmationTokenService.saveConfirmationToken(confirmationToken);

        return token;
    }

    public int enableAppUser(String email) {
        return userRepository.enableAppUser(email);
    }

    public User findByResetPasswordToken(String token) {
        return userRepository.findByResetPasswordToken(token);
    }

    public void updateResetPasswordToken(String token, String email) throws UserNotFoundException {
        try {
            User user = userRepository.findByEmail(email).get();
            user.setResetPasswordToken(token);
            userRepository.save(user);
        }
        catch (NoSuchElementException e) {
            throw new UserNotFoundException("Could not find any user with the email: " + email);
        }

    }

    public void updatePassword(User user, String newPassword) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);

        user.setResetPasswordToken(null);
        userRepository.save(user);
    }

}
