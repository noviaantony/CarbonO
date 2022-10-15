package com.carbonO;


import com.carbonO.Security.Registration.RegistrationRequest;
import com.carbonO.Security.Registration.token.ConfirmationTokenRepository;
import com.carbonO.User.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonObject;
import com.netflix.discovery.shared.Application;
import org.junit.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.boot.test.web.client.TestRestTemplate;

import org.springframework.http.MediaType;

import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//@ActiveProfiles(value = "test")

@ExtendWith(SpringExtension.class)
@WebAppConfiguration
@SpringBootTest //(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT, classes = TestSecurityConfig.class)
public class UserIntegrationTest {

//    @LocalServerPort
//    private int port = 5432;

    @Autowired
    private WebApplicationContext webApplicationContext;

    private final String baseurl = "http://localhost:";

    private RegistrationRequest registrationRequest;

    @Autowired
    private ObjectMapper objectMapper;

    private MockMvc mvc;

    private TestRestTemplate restTemplate = new TestRestTemplate();

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

    @BeforeEach
    public void setup() {
        this.mvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    @BeforeEach
    public void testingProfile() throws Exception {

        RegistrationRequest request = new RegistrationRequest("testing1", "testing", "testing1@gmail.com", "123");
        String json = objectMapper.writeValueAsString(request);

        mvc.perform(MockMvcRequestBuilders
                .post("/api/v1/carbonO/user/registration")
                .content(json)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
//                .andExpect(MockMvcResultMatchers.jsonPath("$.userId").exists());
    }

    @AfterEach
    public void tearDown() {
        userRepository.deleteAll();
        confirmationTokenRepository.deleteAll();
    }


    @Test
    public void getUser_InvalidUserEmail_Failure() throws Exception {
//        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/getUser?email=usernotfound@gmail.com");
//
//        ResponseEntity<User> result = restTemplate.getForEntity(uri, User.class);

        mvc.perform(MockMvcRequestBuilders.get("/getUser?email=idk@gmail.com")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());

//        Assertions.assertEquals(404, result.getStatusCode().value());

    }

    @Test
    public void getUser_ValidUserEmail_Pass() throws Exception {
//        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/getUser?email=noiva@gmail.com");
//
//        ResponseEntity<User> result = restTemplate.getForEntity(uri, User.class);



        User novia = new User("Novia",
                "Antony",
                "novia@gmail.com",
                "password",
                UserRole.ADMIN);

        userRepository.save(novia);

        List<User> userList = userRepository.findAll();

        for (User user : userList) {
            System.out.println(user.getEmail());
        }

        mvc.perform(MockMvcRequestBuilders.get("/getUser?email=noiva@gmail.com")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

//        Assertions.assertEquals(200, result.getStatusCode().value());

    }

    @Test
    public void getAllUsers_Pass() throws Exception {


        mvc.perform(MockMvcRequestBuilders
                        .get("/getAllUsers")
                        .accept(MediaType.APPLICATION_JSON))
                        .andDo(print())
                        .andExpect(status().isOk());
//                .andExpect(MockMvcResultMatchers.jsonPath("$.getAllUsers").exists())
//                .andExpect(MockMvcResultMatchers.jsonPath("$.getAllUsers[*].userId").isNotEmpty());

    }

}
