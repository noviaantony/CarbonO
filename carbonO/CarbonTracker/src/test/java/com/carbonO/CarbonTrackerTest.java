package com.carbonO;

import com.carbonO.Receipt.ReceiptRepository;
import com.carbonO.UserCarbonTracker.UserCarbonTrakerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;

@SpringBootTest (webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class CarbonTrackerTest {

    @LocalServerPort
    private int port = 8080;

    private final String baseurl = "http://localhost:";

    private final String ec2_BaseUrl = "http://18.136.163.9:";

    private TestRestTemplate restTemplate = new TestRestTemplate();

    @Autowired
    private UserCarbonTrakerRepository userCarbonTrakerRepository;

    @Autowired
    private ReceiptRepository receiptRepository;



}
