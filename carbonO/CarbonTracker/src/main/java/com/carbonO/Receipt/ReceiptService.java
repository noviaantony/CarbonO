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
    public Receipt redeemReceiptById(Long receiptId) {
        Receipt receipt =  receiptRepository.findById(receiptId).orElseThrow(() -> new IllegalStateException("Receipt with id " + receiptId + " does not exist"));
        if (receipt.isRedeemed()){
            throw new IllegalStateException("Receipt has already been redeemed");
        }
        receipt.setRedeemed(true);
        receiptRepository.save(receipt);
        return receipt;
    }

    public Receipt findReceiptById(Long receiptId) {
        return receiptRepository.findById(receiptId).orElseThrow(() -> new IllegalStateException("Receipt with id " + receiptId + " does not exist"));
    }

}
