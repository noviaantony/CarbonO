package com.carbonO.Donations;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("api/v1/carbonO/user/donation")
public class PaymentController {

    @Value("${STRIPE_PUBLIC_KEY}")
    private String API_PUBLIC_KEY;

    private final StripeService stripeService;

    public PaymentController(StripeService stripeService) {
        this.stripeService = stripeService;
    }

    /*========== REST APIs for Handling Payments ===================*/


    @PostMapping("/create-charge")
    public ResponseEntity<String> createCharge(String email, String token) {
        //validate data
        if (token == null) {
            return ResponseEntity.badRequest().body("Stripe payment token is missing. Please, try again later.");
        }

        //create charge
        String chargeId = stripeService.createCharge(email, token, 999); //$9.99 USD
        if (chargeId == null) {
            return ResponseEntity.badRequest().body("An error occurred while trying to create a charge.");
        }

        // You may want to store the charge id along with order information

        return ResponseEntity.ok("Success! Your charge id is " + chargeId);
    }
}