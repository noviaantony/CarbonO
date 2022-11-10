package com.carbonOtest.Donations;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NonProfitOrganisationRepository extends JpaRepository<NonProfitOrganisation, Long> {
    List<NonProfitOrganisation> findAllByOrderByOrganisationNameAsc();
}

