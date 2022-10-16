package com.carbonO.Registration;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/carbonO/user/registration")
@AllArgsConstructor
public class RegistrationController {
    private final RegistrationService registrationService;

    @PostMapping
    public ResponseEntity<String> register(@RequestBody RegistrationRequest request) {
        try {
            return ResponseEntity.status(201).body(registrationService.register(request));
        } catch (IllegalStateException e) {
            if (e.getMessage().equals("email taken")) {
                return ResponseEntity.status(403).body("email taken");
            } else if (e.getMessage().equals("email not found")) {
                return ResponseEntity.badRequest().body("email not found");
            }
            return ResponseEntity.badRequest().body("error");
        }
    }

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return registrationService.confirmToken(token);
    }
}
