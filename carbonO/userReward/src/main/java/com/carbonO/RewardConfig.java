package com.carbonO;

import com.carbonO.Rewards.Reward;
import com.carbonO.Rewards.RewardRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashSet;
import java.util.Set;

@Configuration
public class RewardConfig {

    @Bean
    CommandLineRunner commandLineRunner(RewardRepository rewardRepository) {
        return args -> {
            Set<Reward> rewardSet = new HashSet<>();

            //Fashion rewards
            rewardSet.add(new Reward("Another Sole :", "Paloma Fog Shoe", 7500,
                    "10% Discount", 300,
                    "https://sg.anothersole.com/", "https://cdn.shopify.com/s/files/1/2006/0543/products/Paloma_-_Fog_lifestyle__Cropped_540x.png?v=1644807797",
                    "Fashion"));

            rewardSet.add(new Reward("The Eco Gem :", "Upcycled Earrings", 9000,
                    "Complementary Earrings", 500,
                    "https://www.facebook.com/theecogem/", "https://i.pinimg.com/originals/0b/52/0a/0b520a348452a8b418911d8131296b87.jpg ",
                    "Fashion"));

            rewardSet.add(new Reward("Zerrin :", "Black & White Bucket Bag", 6000,
                    "10% Discount", 300,
                    "https://shop.zerrin.com/", "https://cdn.shopify.com/s/files/1/1543/3741/products/Frankitas-Gaya-Bucket-Bag-in-Black-_-White-handbags-online-singapore-sustainable-fashion-artisan-made-frankitas-zerrin2_540x.png?v=1665642758",
                    "Fashion"));

            rewardSet.add(new Reward("GRAYE :", "Seamline Curved Pocket Panel Top", 6500,
                    "20% Discount", 200,
                    "https://grayestudio.com/ ", "https://cdn.shopify.com/s/files/1/1414/1076/products/52064546067_a1a0dab85d_kcopy_550x.jpg?v=1653030012",
                    "Fashion"));

            rewardSet.add(new Reward("GRAYE :", "Padded Ankle Socks", 1000,
                    "Free", 200,
                    "https://grayestudio.com/", "https://cdn.shopify.com/s/files/1/1414/1076/products/DSC05022copy_1680x.jpg?v=1644910099",
                    "Fashion"));

            rewardSet.add(new Reward("GRAYE :", "Padded Ankle Socks", 10000,
                    "Free", 100,
                    "https://grayestudio.com/", "https://cdn.shopify.com/s/files/1/1414/1076/products/49058766003_0deefbbae7_k_1100x.jpg?v=1573660433",
                    "Fashion"));

            rewardSet.add(new Reward("Tokyo Bags :", "Dark Brown Backpack", 9000,
                    "20% Discount", 250,
                    "https://tokyobags.co/", "https://n.nordstrommedia.com/id/sr3/5c768a97-1600-4812-8dd2-1cf0c1233dc6.jpeg?h=365&w=240&dpr=2",
                    "Fashion"));

            //Food rewards
            rewardSet.add(new Reward("Elemen", "", 7000,
                    "5% off total bill on any weekday*", 1000,
                    "https://www.elemengroup.com.sg/", "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_450,h_300/https://danielfooddiary.com/wp-content/uploads/2017/06/elemen1.jpg",
                    "Food"));

            rewardSet.add(new Reward("Real Food", "", 4000,
                    "10% off all takeaway with a minimum order of $50*", 1000,
                    "https://www.realfoodgrocer.com/", "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/4-C2WKG4L2RYKXLA/hero/cfbd3b33731c405e9c5deb7a53ca7670_1636093659844014699.jpeg",
                    "Food"));

            rewardSet.add(new Reward("Original Sin", "", 4000,
                    "10% off total bill on any weekday*", 1000,
                    "https://www.originalsin.com.sg/", "https://static.wixstatic.com/media/43ffc9_4135dd500f69429b877d90ab600e40a9~mv2.jpg/v1/fill/w_672,h_504,al_c,lg_1,q_80/43ffc9_4135dd500f69429b877d90ab600e40a9~mv2.webp",
                    "Food"));

            rewardSet.add(new Reward("VeganBurg", "", 4500,
                    "20% off total bill on any day*", 800,
                    "https://www.veganburg.com/", "https://cdn.eatigo.com/eatigo_VeganBurg_20170502120655_0518.jpg",
                    "Food"));

            rewardSet.add(new Reward("Kitchen by Food Rebel", "", 5000,
                    "10% off total bill on any weekend*", 500,
                    "https://www.facebook.com/kitchenbyfoodrebel/", "https://ucarecdn.com/dfcb7d8f-2b87-44bd-aba4-272e0f4f8447/",
                    "Food"));

            //Transport Reward
            rewardSet.add(new Reward("Grab", "", 5000,
                    "20% off your next GrabHitch ride!", 1000,
                    "https://www.grab.com/sg/", "https://1000logos.net/wp-content/uploads/2022/08/Grab-Logo.jpg",
                    "Transport"));

            rewardRepository.saveAll(rewardSet);
        };
    }
}
