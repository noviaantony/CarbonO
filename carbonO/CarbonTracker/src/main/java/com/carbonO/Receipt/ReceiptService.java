package com.carbonO.Receipt;

import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ReceiptService {
    private final ReceiptRepository receiptRepository;

    public ReceiptService(ReceiptRepository receiptRepository) {
        this.receiptRepository = receiptRepository;
    }

    public Receipt addReceipt(Long dishId) {
        return receiptRepository.save(new Receipt(dishId, new Date()));
    }
}
