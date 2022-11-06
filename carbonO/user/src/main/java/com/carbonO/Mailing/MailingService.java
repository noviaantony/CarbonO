package com.carbonO.Mailing;

import com.carbonO.Registration.RegistrationService;
import com.carbonO.User.User;
import com.carbonO.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;
import java.io.UnsupportedEncodingException;

@Service
@Transactional
public class MailingService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private UserService userService;

    public void sendResetEmail(String recipientEmail, String link) throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("carbonohelp@gmail.com", "CarbonO Support");
        helper.setTo(recipientEmail);

        String subject = "Reset Link for CarbonO Tracker";

        User user = userService.loadUserByUsername(recipientEmail);
        String name = user.getFirstName();

        String content = "<p>Hello " + name + ",</p>"
                + "<p>You have requested to reset your password.</p>"
                + "<p>Please click on the link below to change your password:</p>"
                + "<p><a href=\"" + link + "\">Change my password</a></p>"
                + "<br>"
                + "<p>Best Regards,</p>"
                + "<p>CarbonO Team</p>"
                + "<p>Ignore this email if you do remember your password, "
                + "or you have not made the request.</p>";

        helper.setSubject(subject);

        helper.setText(content, true);

        javaMailSender.send(message);
    }

    public void sendConfirmationEmail(String recipientEmail, String link) throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("carbonohelp@gmail.com", "CarbonO Support");
        helper.setTo(recipientEmail);

        String subject = "Confirmation Link for CarbonO Tracker";

        User user = userService.loadUserByUsername(recipientEmail);
        String name = user.getFirstName();

        String content = "<p>Welcome " + name + ",</p>"
                + "<p> Thank you for registering with CarbonO, "
                + "please click on the link below to verify your account:</p>"
                + "<p><a href=\"" + link + "\">Verify my account</a></p>"
                + "<br>"
                + "<p>Best Regards,</p>"
                + "<p>CarbonO Team</p>";

        helper.setSubject(subject);

        helper.setText(content, true);

        javaMailSender.send(message);
    }
}
