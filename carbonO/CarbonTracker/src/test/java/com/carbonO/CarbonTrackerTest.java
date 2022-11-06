package com.carbonO;

import com.carbonO.CarbonTrackerTransaction.CarbonTrackerTransaction;
import com.carbonO.Receipt.ReceiptRepository;
import com.carbonO.UserCarbonTracker.UserCarbonTrackerRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

import java.net.URI;
import java.util.List;

@SpringBootTest (webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class CarbonTrackerTest {

    @LocalServerPort
    private int port = 8082;

    private final String baseurl = "http://localhost:";

    private final String ec2_BaseUrl = "http://3.0.21.36:";

    private TestRestTemplate restTemplate = new TestRestTemplate();

    @Autowired
    private UserCarbonTrackerRepository userCarbonTrackerRepository;

    @Autowired
    private ReceiptRepository receiptRepository;

    @Test
    public void getUserDishes_CorrectID_Pass() throws Exception {
        URI uri = new URI(baseurl + port + "/api/v1/carbonO/carbonTracker/getUserDishedConsumed?userId=1");

        HttpHeaders headers = new HttpHeaders();
        headers.set("accept", "application/json");
//        headers.set("Authorization", "Bearer JWT TOKEN HERE");
        HttpEntity requestEntity = new HttpEntity<>(null, headers);

        ResponseEntity<List<CarbonTrackerTransaction>> result = restTemplate.exchange(uri, HttpMethod.GET, requestEntity,
                new ParameterizedTypeReference<List<CarbonTrackerTransaction>>() {
                });

        Assertions.assertEquals(200, result.getStatusCode().value());

    }
//    @Test
//    public void getUserDishes_IncorrectID_Fail() throws Exception {
//        URI uri = new URI(baseurl + port + "/api/v1/carbonO/carbonTracker/getUserDishedConsumed?userId=12");
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("accept", "application/json");
////        headers.set("Authorization", "Bearer JWT TOKEN HERE");
//        HttpEntity requestEntity = new HttpEntity<>(null, headers);
//
//        ResponseEntity<List<CarbonTrackerTransaction>> result = restTemplate.exchange(uri, HttpMethod.GET, requestEntity,
//                new ParameterizedTypeReference<List<CarbonTrackerTransaction>>() {
//                });
//
//        Assertions.assertEquals(404, result.getStatusCode().value());
//
//    }

}
