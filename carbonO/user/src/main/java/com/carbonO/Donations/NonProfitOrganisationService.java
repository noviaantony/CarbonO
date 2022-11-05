package com.carbonO.Donations;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class NonProfitOrganisationService {
    private final NonProfitOrganisationRepository nonProfitOrganisationRepository;

    public NonProfitOrganisationService(NonProfitOrganisationRepository nonProfitOrganisationRepository) {
        this.nonProfitOrganisationRepository = nonProfitOrganisationRepository;
    }

    public NonProfitOrganisation addNonProfitOrganisation(NonProfitOrganisation nonProfitOrganisation) {
        return nonProfitOrganisationRepository.save(nonProfitOrganisation);
    }


    public List<NonProfitOrganisation> getAllNonProfitOrganisations() {
        return nonProfitOrganisationRepository.findAllByOrderByOrganisationNameAsc();
    }
}
