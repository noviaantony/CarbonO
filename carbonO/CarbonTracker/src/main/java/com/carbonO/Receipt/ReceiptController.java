package com.carbonO.Receipt;

import com.google.zxing.WriterException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Base64;

@RestController
@RequestMapping(path = "api/v1/carbonO/carbonTracker/qrReceipt/")
public class ReceiptController {

    private final ReceiptService receiptService;

    @Autowired
    public ReceiptController(ReceiptService receiptService) {
        this.receiptService = receiptService;
    }

    private static final String QR_CODE_IMAGE_PATH = "./carbonO/carbonTracker/src/main/resources/static/MyQRCode.png";

    @GetMapping("/generateQRReceipt")
    public ResponseEntity<?> getQRCode(@RequestParam("dishId") Long dishId){
        Receipt receipt = receiptService.addReceipt(dishId);
        JSONObject jsonObject=new JSONObject(receipt);
        byte[] image = new byte[0];
        try {

//             Generate and Return Qr Code in Byte Array
            image = QRReceiptGenerator.getQRCodeImage(jsonObject.toString(),250,250);

            // Generate and Save Qr Code Image in static/image folder
//            QRReceiptGenerator.generateQRCodeImage(jsonObject.toString(),250,250,QR_CODE_IMAGE_PATH);

        } catch (WriterException | IOException e) {
            e.printStackTrace();
        }
        // Convert Byte Array into Base64 Encode String
//        String qrcode = Base64.getEncoder().encodeToString(image);
        return ResponseEntity.ok()
                .contentType(org.springframework.http.MediaType.IMAGE_PNG)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + "MyQRCode.png" + "\"")
                .body(new ByteArrayResource(image));

    }

    @GetMapping("/getReceipt")
    public ResponseEntity<Receipt> getReceipt(@RequestParam("receiptId") Long receiptId){
        return ResponseEntity.ok().body(receiptService.findReceiptById(receiptId));
    }
}
