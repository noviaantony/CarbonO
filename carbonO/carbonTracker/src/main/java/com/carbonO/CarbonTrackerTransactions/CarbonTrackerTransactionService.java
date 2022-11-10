package com.carbonO.CarbonTrackerTransactions;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarbonTrackerTransactionService {
    private final CarbonTrackerTransactionRepository carbonTrackerTransactionRepository;

    @Autowired
    public CarbonTrackerTransactionService(CarbonTrackerTransactionRepository carbonTrackerTransactionRepository) {
        this.carbonTrackerTransactionRepository = carbonTrackerTransactionRepository;
    }

    //save carbon tracker transaction
    public void saveCarbonTrackerTransaction(CarbonTrackerTransaction carbonTrackerTransaction) {
        carbonTrackerTransactionRepository.save(carbonTrackerTransaction);
    }
}
