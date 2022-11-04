package com.carbonO;



import com.carbonO.Registration.RegistrationRequest;
import com.carbonO.Registration.token.ConfirmationTokenRepository;
import com.carbonO.User.*;
import net.bytebuddy.utility.RandomString;
import org.junit.jupiter.api.*;
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

    private final String ec2_BaseUrl = "http://18.136.163.9:";

    private RegistrationRequest registrationRequest;

    private TestRestTemplate restTemplate = new TestRestTemplate();

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;


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
    @Test
    public void forgotPassword_CorrectEmail_Pass() throws Exception {

        RegistrationRequest request = new RegistrationRequest("testing1", "testing", "testing123@gmail.com", "123");

        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/registration");

        ResponseEntity<String> result = restTemplate.postForEntity(uri,request,String.class);

        Assertions.assertEquals(201,result.getStatusCode().value());

        String email = "testing123@gmail.com";

        uri = new URI(baseurl + port + "/api/v1/carbonO/user/forgotPassword?email=" + email);

        ResponseEntity<String> result2 = restTemplate.postForEntity(uri,email,String.class);

        Assertions.assertEquals(200,result2.getStatusCode().value());

        User user = userRepository.findByEmail(email).get();

        user.setResetPasswordToken(null);

        userRepository.save(user);

        userRepository.delete(user);
    }
    @Test
    public void forgotPassword_WrongEmail_Failure() throws Exception {
        String email = "testing123@gmail.com";

        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/forgotPassword?email=" + email);

        ResponseEntity<String> result = restTemplate.postForEntity(uri,email,String.class);

        Assertions.assertEquals(404,result.getStatusCode().value());
    }

    @Test
    public void resetPassword_CorrectEmail_Pass() throws Exception {
        RegistrationRequest request = new RegistrationRequest("testing1", "testing", "testing123@gmail.com", "123");

        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/registration");

        ResponseEntity<String> result = restTemplate.postForEntity(uri,request,String.class);

        String email = "testing123@gmail.com";

        uri = new URI(baseurl + port + "/api/v1/carbonO/user/forgotPassword?email=" + email);

        ResponseEntity<String> result2 = restTemplate.postForEntity(uri,email,String.class);

        String token = result2.getBody().substring(65);

        System.out.println(token);

        uri = new URI(baseurl + port + "/api/v1/carbonO/user/resetPassword?token=" + token);

        ResponseEntity<String> result3 = restTemplate.getForEntity(uri, String.class);

        Assertions.assertEquals(200, result3.getStatusCode().value());

        User user = userRepository.findByEmail(email).get();

        userRepository.delete(user);

    }
    @Test
    public void resetPassword_WrongEmail_Fail() throws Exception{
        String token = null;

        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/resetPassword?token=" + token);

        ResponseEntity<String> result = restTemplate.getForEntity(uri, String.class);

        Assertions.assertEquals(404,result.getStatusCode().value());
    }

//    public void processResetPassword_CorrectToken_Pass() throws Exception {
//        RegistrationRequest request = new RegistrationRequest("testing1", "testing", "testing123@gmail.com", "123");
//
//        URI uri = new URI(baseurl + port + "/api/v1/carbonO/user/registration");
//
//        ResponseEntity<String> result = restTemplate.postForEntity(uri,request,String.class);
//
//        String email = "testing123@gmail.com";
//
//        User user = userRepository.findByEmail(email).get();
//
//        String token = RandomString.make(45);
//        user.setResetPasswordToken(token);
//
//        String newPassword = "123456";
//
//        uri = new URI(baseurl + port + "/api/v1/carbonO/user/processResetPassword?newPassword=" + newPassword
//        + "&token=" + token);
//
//        ResponseEntity<String> result2 = restTemplate.put(uri.toString(),null,newPassword,token);
//
//        Assertions.assertEquals(200, result2.getStatusCode().value());
//    }



}
