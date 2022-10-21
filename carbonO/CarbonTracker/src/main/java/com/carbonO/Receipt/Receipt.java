package com.carbonO.Receipt;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Receipt {
    @Id
    @SequenceGenerator(
            name = "receipt_sequence",
            sequenceName = "receipt_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "receipt_sequence"
    )
    private Long receiptId;
    private Long dishConsumedId;
    private Date dateOfReceipt;
    private boolean isRedeemed;

    public Receipt(Long dishConsumed, Date dateOfReceipt) {
        this.dishConsumedId = dishConsumed;
        this.dateOfReceipt = dateOfReceipt;
        this.isRedeemed = false;
    }

}
