package com.carbonOtest;

import com.carbonOtest.RewardTransaction.RewardTransaction;
import com.carbonOtest.RewardTransaction.RewardTransactionRepository;
import com.carbonOtest.Rewards.Reward;
import com.carbonOtest.Rewards.RewardRepository;
import com.carbonOtest.userReward.UserReward;
import com.carbonOtest.userReward.UserRewardRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;
import java.util.*;

@Configuration
public class RewardConfig {

    @Bean
    CommandLineRunner commandLineRunner(RewardRepository rewardRepository, UserRewardRepository userRewardRepository, RewardTransactionRepository rewardTransactionRepository) {
        return args -> {
            List<Reward> rewardList = new ArrayList<>();

            //Fashion rewards
            rewardList.add(new Reward("Another Sole :", "Paloma Fog Shoe", 7500,
                    "10% Discount", 300,
                    "https://sg.anothersole.com/", "https://cdn.shopify.com/s/files/1/2006/0543/products/Paloma_-_Fog_lifestyle__Cropped_540x.png?v=1644807797",
                    "Fashion"));

            rewardList.add(new Reward("The Eco Gem :", "Upcycled Earrings", 9000,
                    "Complementary Earrings", 500,
                    "https://www.facebook.com/theecogem/", "https://i.pinimg.com/originals/0b/52/0a/0b520a348452a8b418911d8131296b87.jpg ",
                    "Fashion"));

            rewardList.add(new Reward("Zerrin :", "Black & White Bucket Bag", 6000,
                    "10% Discount", 300,
                    "https://shop.zerrin.com/", "https://cdn.shopify.com/s/files/1/1543/3741/products/Frankitas-Gaya-Bucket-Bag-in-Black-_-White-handbags-online-singapore-sustainable-fashion-artisan-made-frankitas-zerrin2_540x.png?v=1665642758",
                    "Fashion"));

            rewardList.add(new Reward("GRAYE :", "Seamline Curved Pocket Panel Top", 6500,
                    "20% Discount", 200,
                    "https://grayestudio.com/ ", "https://cdn.shopify.com/s/files/1/1414/1076/products/52064546067_a1a0dab85d_kcopy_550x.jpg?v=1653030012",
                    "Fashion"));

            rewardList.add(new Reward("GRAYE :", "Padded Black Socks", 8000,
                    "Free", 200,
                    "https://grayestudio.com/", "https://cf.shopee.sg/file/461ca4a02f516f30cb2af00dc1f3a6d0",
                    "Fashion"));

            rewardList.add(new Reward("GRAYE :", "Padded Green Socks", 10000,
                    "Free", 100,
                    "https://grayestudio.com/", "https://img.ltwebstatic.com/images3_pi/2022/05/16/1652665494b37bae04f001b9cf1a8d67632f418b6f_thumbnail_900x.webp",
                    "Fashion"));

            rewardList.add(new Reward("Tokyo Bags :", "Dark Brown Backpack", 9000,
                    "20% Discount", 250,
                    "https://tokyobags.co/", "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnc3xlbnwwfHwwfHw%3D&w=1000&q=80",
                    "Fashion"));

            //Food rewards
            rewardList.add(new Reward("Elemen", "", 7000,
                    "5% off total bill on any weekday*", 1000,
                    "https://www.elemengroup.com.sg/", "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_450,h_300/https://danielfooddiary.com/wp-content/uploads/2017/06/elemen1.jpg",
                    "Food"));

            rewardList.add(new Reward("Real Food", "", 4000,
                    "10% off all takeaway*", 1000,
                    "https://www.realfoodgrocer.com/", "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/4-C2WKG4L2RYKXLA/hero/cfbd3b33731c405e9c5deb7a53ca7670_1636093659844014699.jpeg",
                    "Food"));

            rewardList.add(new Reward("Original Sin", "", 4000,
                    "10% off total bill on any weekday*", 1000,
                    "https://www.originalsin.com.sg/", "https://static.wixstatic.com/media/43ffc9_4135dd500f69429b877d90ab600e40a9~mv2.jpg/v1/fill/w_672,h_504,al_c,lg_1,q_80/43ffc9_4135dd500f69429b877d90ab600e40a9~mv2.webp",
                    "Food"));

            rewardList.add(new Reward("VeganBurg", "", 4500,
                    "20% off total bill on any day*", 800,
                    "https://www.veganburg.com/", "https://cdn.eatigo.com/eatigo_VeganBurg_20170502120655_0518.jpg",
                    "Food"));

            rewardList.add(new Reward("Kitchen by Food Rebel", "", 5000,
                    "10% off total bill on any weekend*", 500,
                    "https://www.facebook.com/kitchenbyfoodrebel/", "https://ucarecdn.com/dfcb7d8f-2b87-44bd-aba4-272e0f4f8447/",
                    "Food"));

            //Transport Reward
            rewardList.add(new Reward("Grab", "", 5000,
                    "20% off your next GrabHitch ride!", 1000,
                    "https://www.grab.com/sg/", "https://motoristprod.s3.amazonaws.com/uploads/content_article_cover_image/photo/1410/motorist-driving-grab-personal-car.png",
                    "Transport"));

            rewardRepository.saveAll(rewardList);

            //create user reward account
            UserReward userReward = new UserReward(1L, 100000);
            userRewardRepository.save(userReward);

            UserReward userReward1 = userRewardRepository.findByUserId(1L);
            Reward reward1 = rewardRepository.findByRewardName("Upcycled Earrings").get();

            RewardTransaction transaction1 = new RewardTransaction(LocalDateTime.now(),
                    userReward1,
                    reward1);

            rewardTransactionRepository.save(transaction1);
        };
    }
}
