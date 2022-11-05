package com.carbonO.Registration;

import com.carbonO.Mailing.MailingService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/carbonO/user/registration")
@AllArgsConstructor
public class RegistrationController {
    private final RegistrationService registrationService;
    @Autowired
    private MailingService mailingService;

    private static final String baseUrl = "";

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

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return registrationService.confirmToken(token);
    }

}
