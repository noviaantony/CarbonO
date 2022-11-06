package com.carbonO.User;


import com.carbonO.Mailing.MailingService;
import com.carbonO.User.Exception.UserNotFoundException;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping(path ="api/v1/carbonO/user")
public class UserController {
    private final UserService userService;

    @Autowired
    private MailingService mailingService;

    private static final String baseUrl = "http://18.136.163.9:8080/api/v1/carbonO/user";

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    //Retrieve all user information
    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> getUsers(){
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/getUser")
    public ResponseEntity<User> getUserId(@RequestParam String email){
        return ResponseEntity.ok().body(userService.loadUserByUsername(email));
    }

    @PostMapping("/forgotPassword")
    public ResponseEntity<String> processForgotPassword(@RequestParam String email) throws UserNotFoundException {
        String resetPasswordLink = null;
        String token = RandomString.make(45);

        try {
            userService.updateResetPasswordToken(token, email);
            resetPasswordLink = baseUrl + "/resetPassword?token=" + token;
            mailingService.sendResetEmail(email, resetPasswordLink);

        } catch (UserNotFoundException e) {
            return ResponseEntity.status(404).body("User not found");
        } catch (Exception e) {
            return ResponseEntity.status(550).body(e.getMessage());
        }
        return ResponseEntity.ok().body(resetPasswordLink);
    }
    @GetMapping("/resetPassword")
    public void checkRestPassword(@RequestParam String token, HttpServletResponse response) throws IOException {
        userService.findByResetPasswordToken(token);

        response.sendRedirect("http://18.136.163.9:8085/ResetPassword?token=" + token);
    }

    @PutMapping("/processResetPassword")
    public ResponseEntity<String> processResetPassword(@RequestParam String newPassword, String token) {
        User user = userService.findByResetPasswordToken(token);

        if (user == null) {
            return ResponseEntity.status(403).body("Invalid Token");
        }

        userService.updatePassword(user, newPassword);

        return ResponseEntity.status(200).body("Successfully changed password");
    }




}
