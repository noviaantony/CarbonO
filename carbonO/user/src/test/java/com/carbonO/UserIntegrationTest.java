package com.carbonO;



import com.carbonO.Registration.RegistrationRequest;
import com.carbonO.Registration.token.ConfirmationTokenRepository;
import com.carbonO.User.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import java.net.URI;

//@ActiveProfiles(value = "test")
//@AutoConfigureMockMvc(addFilters = false)
//@ExtendWith(SpringExtension.class)
//@WebAppConfiguration
@SpringBootTest (webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)// classes = TestSecurityConfig.class)
public class UserIntegrationTest {

    @LocalServerPort
    private int port = 5432;

//    @Autowired
//    private WebApplicationContext webApplicationContext;

    private final String baseurl = "http://localhost:";

    private RegistrationRequest registrationRequest;

    private TestRestTemplate restTemplate = new TestRestTemplate();

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

//    @BeforeEach
//    public void setup() {
//        this.mvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
//    }

    @Test
    public void createTestingUser() throws Exception{

        RegistrationRequest request = new RegistrationRequest("testing1", "testing", "testing123@gmail.com", "123");

        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/registration");

        ResponseEntity<String> result = restTemplate.postForEntity(uri,request,String.class);

        Assertions.assertEquals(201,result.getStatusCode().value());

        User user = userRepository.findByEmail("testing123@gmail.com").get();

        userRepository.deleteById(user.getId());


    }

    @Test
    public void loginTesting() throws Exception {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
        map.add("username", "chenzhaoxing.98@gmail.com");
        map.add("password", "123");

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);

        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/login");

        ResponseEntity<String> result = restTemplate.postForEntity(uri,request,String.class);

        Assertions.assertEquals(200,result.getStatusCode().value());

        String token = result.getBody();

        System.out.println(token);
    }

    @Test
    public void registration_duplicateEmail_Failure() throws Exception{

        RegistrationRequest request = new RegistrationRequest("testing1", "testing", "testing1@gmail.com", "123");

        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/registration");

        ResponseEntity<String> result = restTemplate.postForEntity(uri,request,String.class);

        ResponseEntity<String> result2 = restTemplate.postForEntity(uri,request,String.class);

        Assertions.assertEquals(403,result2.getStatusCode().value());

        User user = userRepository.findByEmail("testing1@gmail.com").get();

        userRepository.deleteById(user.getId());

    }




//    @Test
//    @BeforeEach
//    public void testingProfile() throws Exception {
//
//        RegistrationRequest request = new RegistrationRequest("testing1", "testing", "testing1@gmail.com", "123");
//        String json = objectMapper.writeValueAsString(request);
//
//        mvc.perform(MockMvcRequestBuilders
//                .post("/api/v1/carbonO/user/registration")
//                .content(json)
//                .contentType(MediaType.APPLICATION_JSON)
//                .accept(MediaType.APPLICATION_JSON))
//                .andExpect(status().isCreated());
////                .andExpect(MockMvcResultMatchers.jsonPath("$.userId").exists());
//    }
//
//    @AfterEach
//    public void tearDown() {
//        userRepository.deleteAll();
//        confirmationTokenRepository.deleteAll();
//    }
//
//
//    @Test
//    public void getUser_InvalidUserEmail_Failure() throws Exception {
////        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/getUser?email=usernotfound@gmail.com");
////
////        ResponseEntity<User> result = restTemplate.getForEntity(uri, User.class);
//
//        mvc.perform(MockMvcRequestBuilders.get("/getUser")
//                 .queryParam("email","emailnotfound@gmail.com")
//                .accept(MediaType.APPLICATION_JSON))
//                .andExpect(status().isNotFound());
//
////        Assertions.assertEquals(404, result.getStatusCode().value());
//
//    }
//
//    @Test
//    public void getUser_ValidUserEmail_Pass() throws Exception {
////        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/getUser?email=noiva@gmail.com");
////
////        ResponseEntity<User> result = restTemplate.getForEntity(uri, User.class);
//
//
//
//        mvc.perform(MockMvcRequestBuilders.get("/getUser")
//                        .queryParam("email","novia@gmail.com")
//                        .accept(MediaType.APPLICATION_JSON))
//                        .andExpect(status().isOk());
//
////        Assertions.assertEquals(200, result.getStatusCode().value());
//
//    }
//
//    @Test
//    public void getAllUsers_Pass() throws Exception {
//
//
//        mvc.perform(MockMvcRequestBuilders
//                        .get("/getAllUsers")
//                        .accept(MediaType.APPLICATION_JSON))
//                        .andDo(print())
//                        .andExpect(status().isOk());
////                .andExpect(MockMvcResultMatchers.jsonPath("$.getAllUsers").exists())
////                .andExpect(MockMvcResultMatchers.jsonPath("$.getAllUsers[*].userId").isNotEmpty());
//
//    }

}
