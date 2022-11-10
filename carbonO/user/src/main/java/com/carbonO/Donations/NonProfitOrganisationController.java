package com.carbonO.Donations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/v1/carbonO/user")
public class NonProfitOrganisationController {

    private final NonProfitOrganisationService nonProfitOrganisationService;

    public NonProfitOrganisationController(NonProfitOrganisationService nonProfitOrganisationService) {
        this.nonProfitOrganisationService = nonProfitOrganisationService;
    }

    @GetMapping("/getAllNonProfitOrganisations")
    public ResponseEntity<List<NonProfitOrganisation>> getAllNonProfitOrganisations() {
        return ResponseEntity.ok().body(nonProfitOrganisationService.getAllNonProfitOrganisations());
    }
}