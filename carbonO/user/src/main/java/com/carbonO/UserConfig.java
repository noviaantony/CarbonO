package com.carbonO;

import com.carbonO.Donations.NonProfitOrganisation;
import com.carbonO.Donations.NonProfitOrganisationService;
import com.carbonO.User.User;
import com.carbonO.User.UserRepository;
import com.carbonO.User.UserRole;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@Configuration
public class UserConfig {
    //temp encoder to create an encrypted password
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final NonProfitOrganisationService nonProfitOrganisationService;

    public UserConfig(BCryptPasswordEncoder bCryptPasswordEncoder, NonProfitOrganisationService nonProfitOrganisationService) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.nonProfitOrganisationService = nonProfitOrganisationService;
    }

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository){

        String encodedPassword = bCryptPasswordEncoder.encode("123");
        return args -> {
            User xz = new User(
                    "Zhao Xing",
                    "Chen",
                    "chenzhaoxing.98@gmail.com",
                    encodedPassword,
                    UserRole.ADMIN,
                    true
            );
            User tester = new User(
                    "CarbonO",
                    "Testing",
                    "carbonohelp@gmail.com",
                    encodedPassword,
                    UserRole.ADMIN,
                    true
            );
            repository.saveAll(
                    List.of(xz,tester)
            );

            List<NonProfitOrganisation> nonProfitOrganisationsList = List.of(
                    new NonProfitOrganisation(
                            "Cool Earth: Protecting the World’s Rainforests",
                            "A global non-profit organization that enact federal policy that would force older coal plants in America to improve their emissions and save the earth.",
                            "https://856366.smushcdn.com/2556047/wp-content/uploads/2022/09/AdobeStock__307657351-1024x683.jpeg?lossy=0&strip=1&webp=1"
                    ),
                    new NonProfitOrganisation(
                            "Clean Air Task Force: Reducing Carbon Emissions",
                            "Charity is dedicated to addressing climate change through the protection of rainforests, by giving control back to the people who live in them.",
                            "https://as2.ftcdn.net/v2/jpg/03/73/58/69/1000_F_373586987_Cbsttxh4guQm9RJDgDFa1kw8L2XiF9EI.jpg"
                    ),
                    new NonProfitOrganisation(
                            "Depave: Create More Green Spaces For All",
                            "A driven organisation that seeks to transition to a regenerative agriculture through the focus of sustainable farms and grasslands.",
                            "https://as2.ftcdn.net/v2/jpg/05/12/41/73/1000_F_512417375_Q8quk5IiZE84fpnaaRGqBfh76gqDpCDZ.jpg"
                    ),
                    new NonProfitOrganisation(
                            "WattTime: Technology to Save the Environment",
                            "This organisation designs Automated Emissions Reduction solutions to empower all users to choose clean energy.",
                            "https://as1.ftcdn.net/v2/jpg/04/71/77/90/1000_F_471779082_mHHJIPaFThAkAP7k7YBrBJ4uH48LmbGq.jpg"
                    ),
                    new NonProfitOrganisation(
                            "The Carbon Underground: An Agricultural Combat",
                            "a driven organisation that seeks to transition to a regenerative agriculture through the focus of sustainable farms and grasslands",
                            "https://as2.ftcdn.net/v2/jpg/05/12/41/73/1000_F_512417375_Q8quk5IiZE84fpnaaRGqBfh76gqDpCDZ.jpg"
                    )
            );

            for (NonProfitOrganisation nonProfitOrganisation : nonProfitOrganisationsList) {
                nonProfitOrganisationService.addNonProfitOrganisation(nonProfitOrganisation);
            }
        };
    }
}
