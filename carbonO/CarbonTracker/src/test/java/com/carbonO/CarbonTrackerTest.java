package com.carbonO;


import com.carbonO.UserCarbonTracker.UserCarbonTracker;

import com.carbonO.UserCarbonTracker.UserCarbonTrackerService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.Base64Utils;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.lang.reflect.Type;
import java.net.URI;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = UserCarbonTracker.class)
//@SpringBootTest (webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class CarbonTrackerTest {

//    @LocalServerPort
//    private int port = 8080;

//    private final String baseurl = "http://localhost:";
//
//    private final String ec2_BaseUrl = "http://18.136.163.9:";

//    http://3.0.21.36:

    @Autowired
    MockMvc mockMvc;

    @MockBean
    UserCarbonTrackerService userCarbonTrackerService;

//    private TestRestTemplate restTemplate = new TestRestTemplate();
//
//    @Autowired
//    private UserCarbonTrackerRepository userCarbonTrackerRepository;
//
//    @Autowired
//    private ReceiptRepository receiptRepository;



//    @Test
//    public void getUserDishes_CorrectID_Pass() throws Exception {
//        URI uri = new URI(baseurl + port + "/api/v1/carbonO/carbonTracker/getUserDishedConsumed?userId=1");
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("accept", "application/json");
////        headers.set("Authorization", "Bearer JWT TOKEN HERE");
//        HttpEntity requestEntity = new HttpEntity<>(null, headers);
//
//        ResponseEntity<List<Dish>> result = restTemplate.exchange(uri, HttpMethod.GET, requestEntity,
//                new ParameterizedTypeReference<List<Dish>>() {
//                });
//
//        Assertions.assertEquals(200, result.getStatusCode().value());
//
//    }
//    @Test
//    public void getUserDishes_IncorrectID_Fail() throws Exception {
//        URI uri = new URI(baseurl + port + "/api/v1/carbonO/carbonTracker/getUserDishedConsumed?userId=12");
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("accept", "application/json");
////        headers.set("Authorization", "Bearer JWT TOKEN HERE");
//        HttpEntity requestEntity = new HttpEntity<>(null, headers);
//
//        ResponseEntity<List<Dish>> result = restTemplate.exchange(uri, HttpMethod.GET, requestEntity,
//                new ParameterizedTypeReference<List<Dish>>() {
//                });
//
//        Assertions.assertEquals(404, result.getStatusCode().value());
//
//    }
//    @Test
//    @WithMockUser(username = "chenzhaoxing.98@gmail.com", password = "123")
//    public void getUserTotalCarbonFootprint() throws Exception {
//        mockMvc.perform(get("/getUserTotalCarbonConsumption?userId=1")
//                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
//                .accept(MediaType.APPLICATION_JSON)
//                .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk());
//
//
//
//    }



//    @Test
//    public void getUserTotalCarbonConsumption_CorrectID_Authenticated_Pass() throws Exception{
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//        MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
//        map.add("username", "chenzhaoxing.98@gmail.com");
//        map.add("password", "123");
//
//        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
//
//        URI uri = new URI("http://18.136.163.9:8080/api/v1/carbonO/user/login");
//
//        ResponseEntity<String> result = restTemplate.postForEntity(uri,request,String.class);
//
//        JSONObject json = new JSONObject(result.getBody());
//
//        String token = json.getString("access_token");
//
//        System.out.println(token);
//        System.out.println("||||||||");
//        System.out.println("||||||||");
//        System.out.println("||||||||");
//
//        URI uri2 = new URI(baseurl + port + "/getUserTotalCarbonConsumption?userId=1");
//
//        HttpHeaders headers2 = new HttpHeaders();
////      headers2.set("accept", "application/json");
////      headers2.setBearerAuth(token);
//        headers2.set("Authorization", token);
//        HttpEntity requestEntity = new HttpEntity<>(null, headers2);
//
//        ResponseEntity<String> result2 = restTemplate.exchange(uri2,HttpMethod.GET,requestEntity,String.class);
//
//        String checker = result2.getBody();
//
//        System.out.println(checker);
//
//        Assertions.assertEquals(200,result2.getStatusCode().value());
//    }



}
