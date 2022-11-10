package com.carbonO.Registration;

import com.carbonO.Mailing.MailingService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(path = "api/v1/carbonO/user/registration")
@AllArgsConstructor
public class RegistrationController {
    private final RegistrationService registrationService;
    @Autowired
    private MailingService mailingService;

    private static final String baseUrl = "http://18.136.163.9:80/api/v1/carbonO/user/registration";

    @PostMapping
    public ResponseEntity<String> register(@RequestBody RegistrationRequest request) {
        String token = "";
        String confirmationLink = "";
        try {
            token = registrationService.register(request);
            String email = request.getEmail();
            confirmationLink = baseUrl + "/confirm?token=" + token;
            mailingService.sendConfirmationEmail(email, confirmationLink);

        } catch (IllegalStateException e) {
            if (e.getMessage().equals("email taken")) {
                return ResponseEntity.status(403).body("email taken");
            } else if (e.getMessage().equals("email not found")) {
                return ResponseEntity.badRequest().body("email not found");
            }
            return ResponseEntity.badRequest().body("error");
            // catch mailing exceptions
        } catch (Exception e) {
            return ResponseEntity.status(550).body(e.getMessage());
        }
        return ResponseEntity.status(201).body(token);
    }

    @GetMapping(path = "/confirm")
    public void confirm(@RequestParam("token") String token, HttpServletResponse response) throws IOException {
        Long userId = registrationService.confirmToken(token);
        //create a new user reward account after confirmation
        try {
            registrationService.createUserRewardAccount(userId);
            registrationService.createCarbonTrackerAccount(userId);
        } catch (Exception e) {
            response.sendRedirect("https://sg.carbonoapp.net/registration-failed");
        }

        //Note: Change url to domain
        response.sendRedirect("https://sg.carbonoapp.net/login");
    }

}
