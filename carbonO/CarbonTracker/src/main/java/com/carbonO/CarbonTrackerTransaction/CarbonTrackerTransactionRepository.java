package com.carbonO.CarbonTrackerTransaction;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarbonTrackerTransactionRepository extends JpaRepository<CarbonTrackerTransaction, Long> {

}

