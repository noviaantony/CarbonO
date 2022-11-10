package com.carbonO.User;


import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.carbonO.Mailing.MailingService;
import com.carbonO.User.Exception.UserNotFoundException;
import com.fasterxml.jackson.databind.ObjectMapper;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Controller
@RequestMapping(path ="api/v1/carbonO/user")
public class UserController {
    private final UserService userService;

    @Autowired
    private MailingService mailingService;

    private static final String baseUrl = "http://18.136.163.9:80/api/v1/carbonO/user";

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

        //Note: Change url to domain
        response.sendRedirect("https://sg.carbonoapp.net/ResetPassword?token=" + token);
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
    @GetMapping("/checkRefreshToken")
    public void checkRefreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String refresh_token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes()); //make sure the secret key is the same as the secret set in customAuthenticationFilter
                JWTVerifier verifier = JWT.require(algorithm).build(); // creating the jwt verifier
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String username = decodedJWT.getSubject();
                User user = userService.loadUserByUsername(username);
                String access_token = JWT.create()
                        .withSubject(user.getUsername())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000)) // expires in 10 mins
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                        .sign(algorithm);

                //to pass the token back to the user in a response body for frontend to store as a cookie
                Map<String, String> tokens = new HashMap<>();
                tokens.put("access_token", access_token);
                tokens.put("refresh_token", refresh_token);
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);
            } catch (Exception exception) {
                response.setHeader("error", exception.getMessage());
                response.setStatus(FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("error_message", exception.getMessage());
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        } else {
            throw new RuntimeException("Refresh Token not found");
        }
    }


}
