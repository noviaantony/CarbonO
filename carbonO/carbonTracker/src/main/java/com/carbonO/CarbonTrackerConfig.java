package com.carbonO;

import com.carbonO.Dish.*;
import com.carbonO.Ingredient.Ingredient;
import com.carbonO.Ingredient.IngredientRepository;
import com.carbonO.UserCarbonTracker.userCarbonTracker;
import com.carbonO.UserCarbonTracker.userCarbonTrakerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.*;

@Configuration
public class CarbonTrackerConfig {

    @Autowired
    DishService dishService;

    @Bean
    CommandLineRunner commandLineRunner(DishRepository dishRepository, IngredientRepository ingredientRepository,
                                        DishRecipeRepository dishRecipeRepository, userCarbonTrakerRepository userCarbonTrakerRepository, DishKeywordsRepository dishKeywordsRepository) {

        return args -> {
            //hashset of ingredients
            Set<Ingredient> ingredients2 = new HashSet<>();

            ingredients2.add(new Ingredient("Chicken Breast", 7.11));
            ingredients2.add(new Ingredient("Rice", 3.03));
            ingredients2.add(new Ingredient("Garlic", 1.0));
            ingredients2.add(new Ingredient("Dark Soya Sauce", 1.37));
            ingredients2.add(new Ingredient("Ginger", 1.21));
            ingredients2.add(new Ingredient("Salmon", 1.79));
            ingredients2.add(new Ingredient("Bread Crumb", 0.38));
            ingredients2.add(new Ingredient("Egg", 0.68));
            ingredients2.add(new Ingredient("Olive Oil", 1.10));
            ingredients2.add(new Ingredient("Mustard", 0.28));
            ingredients2.add(new Ingredient("Salt", 0.14));
            ingredients2.add(new Ingredient("Black Pepper", 1.32));
            ingredients2.add(new Ingredient("Paprika Powder", 0.352));
            ingredients2.add(new Ingredient("Garlic Powder", 0.24));
            ingredients2.add(new Ingredient("Onion Powder", 0.1));
            ingredients2.add(new Ingredient("Burger Bun", 0.32));
            ingredients2.add(new Ingredient("Mayonnaise", 0.48));
            ingredients2.add(new Ingredient("Pork Belly", 2.86));
            ingredients2.add(new Ingredient("Shrimp", 2.56));
            ingredients2.add(new Ingredient("Soy Sauce", 0.34));
            ingredients2.add(new Ingredient("Sesame Oil", 0.76));
            ingredients2.add(new Ingredient("White Pepper", 2.64));
            ingredients2.add(new Ingredient("Chicken Stock", 0.55));
            ingredients2.add(new Ingredient("Cabbage", 0.07));
            ingredients2.add(new Ingredient("Noodles", 0.37));
            ingredients2.add(new Ingredient("Cornstarch", 0.19));
            ingredients2.add(new Ingredient("Coconut Milk", 0.44));
            ingredients2.add(new Ingredient("Onion", 0.09));
            ingredients2.add(new Ingredient("Shallot", 0.09));
            ingredients2.add(new Ingredient("Anchovies", 0.97));
            ingredients2.add(new Ingredient("Dried Chilli", 0.6));
            ingredients2.add(new Ingredient("Shrimp Paste", 2.21));
            ingredients2.add(new Ingredient("Sugar", 0.37));
            ingredients2.add(new Ingredient("Cucumber", 0.1));
            ingredients2.add(new Ingredient("White Flour", 0.2));
            ingredients2.add(new Ingredient("Yeast", 0.18));
            ingredients2.add(new Ingredient("Tomato Paste", 0.43));
            ingredients2.add(new Ingredient("Mozzarella Cheese", 1.68));
            ingredients2.add(new Ingredient("Parmesan Cheese", 2.31));
            ingredients2.add(new Ingredient("Basil Leaves", 0.06));
            ingredients2.add(new Ingredient("Spaghetti", 0.64));
            ingredients2.add(new Ingredient("Red Sea Bream", 3.88));
            ingredients2.add(new Ingredient("Curry Paste", 1.29));
            ingredients2.add(new Ingredient("Lemon Grass", 6.0));
            ingredients2.add(new Ingredient("Tomato", 0.64));
            ingredients2.add(new Ingredient("Potato", 0.04));
            ingredients2.add(new Ingredient("Milk", 0.28));
            ingredients2.add(new Ingredient("All-Purpose Flour", 0.2));
            ingredients2.add(new Ingredient("Fish Fillet", 0.97));
            ingredients2.add(new Ingredient("Beef", 16.88));
            ingredients2.add(new Ingredient("Beef Broth", 7.05));
            ingredients2.add(new Ingredient("Celery", 0.45));
            ingredients2.add(new Ingredient("Carrot", 0.18));
            ingredients2.add(new Ingredient("Egg Noodles", 0.37));
            ingredients2.add(new Ingredient("Char Siew", 2.47));
            ingredients2.add(new Ingredient("Chilli", 0.6));
            ingredients2.add(new Ingredient("Cai Xin", 0.09));
            ingredients2.add(new Ingredient("Pork", 1.73));
            ingredients2.add(new Ingredient("Mushroom", 0.43));
            ingredients2.add(new Ingredient("Flour", 0.2));

            Set<Dish> dishSet = new HashSet<>();

            Dish dish1 = new Dish(
                    "Chicken Rice"
            );

            ArrayList<DishKeywords> keywords = new ArrayList<>();
            keywords.add(new DishKeywords(dish1,"Chicken"));
            keywords.add(new DishKeywords(dish1,"rice"));
            keywords.add(new DishKeywords(dish1,"chicken rice"));

            Dish dish2 = new Dish(
                    "Salmon Burger"
            );

            keywords.add(new DishKeywords(dish2,"salmon"));
            keywords.add(new DishKeywords(dish2,"burger"));
            keywords.add(new DishKeywords(dish2,"salmon burger"));
            keywords.add(new DishKeywords(dish2,"fish"));


            Dish dish3 = new Dish(
                    "Hokkien Mee"
            );

            keywords.add(new DishKeywords(dish3,"hokkien mee"));
            keywords.add(new DishKeywords(dish3,"hokkien noodles"));
            keywords.add(new DishKeywords(dish3,"noodles"));

            Dish dish4 = new Dish(
                    "Nasi Lemak"
            );

            keywords.add(new DishKeywords(dish4,"Nasi Lemak"));
            keywords.add(new DishKeywords(dish4,"Nasi"));
            keywords.add(new DishKeywords(dish4,"Lemak"));

            Dish dish5 = new Dish(
                    "Margherita Pizza"
            );

            keywords.add(new DishKeywords(dish5,"Margherita Pizza"));
            keywords.add(new DishKeywords(dish5,"Pizza"));
            keywords.add(new DishKeywords(dish5,"Margherita"));
            keywords.add(new DishKeywords(dish5,"cheese pizza"));
            keywords.add(new DishKeywords(dish5,"Mozerella Pizza"));

            Dish dish6 = new Dish(
                    "Aglio Olio"
            );

            keywords.add(new DishKeywords(dish6,"Aglio Olio"));
            keywords.add(new DishKeywords(dish6,"Aglio"));
            keywords.add(new DishKeywords(dish6,"Olio"));
            keywords.add(new DishKeywords(dish6,"Pasta"));

            Dish dish7 = new Dish(
                    "Fish Head Curry"
            );

            keywords.add(new DishKeywords(dish7,"Fish Head Curry"));
            keywords.add(new DishKeywords(dish7,"Fish"));
            keywords.add(new DishKeywords(dish7,"Curry"));
            keywords.add(new DishKeywords(dish7,"Fish Curry"));


            Dish dish8 = new Dish(
                    "Fish and Chips"
            );

            keywords.add(new DishKeywords(dish8,"Fish and Chips"));
            keywords.add(new DishKeywords(dish8,"Fish"));
            keywords.add(new DishKeywords(dish8,"Chips"));
            keywords.add(new DishKeywords(dish8,"Fries"));
            keywords.add(new DishKeywords(dish8,"Western")); // maybe will add a cuisine tag

            Dish dish9 = new Dish(
                    "Beef Stew"
            );


            keywords.add(new DishKeywords(dish9,"Beef Stew"));
            keywords.add(new DishKeywords(dish9,"Beef"));
            keywords.add(new DishKeywords(dish9,"Stew"));

            Dish dish10 = new Dish(
                    "Wanton Mee"
            );

            keywords.add(new DishKeywords(dish10,"Wanton Mee"));
            keywords.add(new DishKeywords(dish10,"Wanton"));
            keywords.add(new DishKeywords(dish10,"Mee"));
            keywords.add(new DishKeywords(dish10,"Noodles"));
            keywords.add(new DishKeywords(dish10,"Wanton Noodles"));

            dishSet.add(dish1);
            dishSet.add(dish2);
            dishSet.add(dish3);
            dishSet.add(dish4);
            dishSet.add(dish5);
            dishSet.add(dish6);
            dishSet.add(dish7);
            dishSet.add(dish8);
            dishSet.add(dish9);
            dishSet.add(dish10);

            for (Ingredient ingredient : ingredients2) {
                ingredientRepository.save(ingredient);
            }

            for (Dish dish : dishSet) {
                dishRepository.save(dish);
            }

            for (DishKeywords keyword : keywords) {
                dishKeywordsRepository.save(keyword);
            }


            // Saving Chicken Rice
            Dish newDish = dishRepository.findByDishName("Chicken Rice").get();
            Ingredient newIngredient1 = ingredientRepository.findByIngredientName("Chicken Breast").get();
            Ingredient newIngredient2 = ingredientRepository.findByIngredientName("Rice").get();
            Ingredient newIngredient3 = ingredientRepository.findByIngredientName("Garlic").get();
            Ingredient newIngredient4 = ingredientRepository.findByIngredientName("Dark Soya Sauce").get();
            Ingredient newIngredient5 = ingredientRepository.findByIngredientName("Ginger").get();

            DishRecipe newDishRecipe1 = new DishRecipe(
                    newDish,
                    newIngredient1,
                    265
            );

            DishRecipe newDishRecipe2 = new DishRecipe(
                    newDish,
                    newIngredient2,
                    150
            );

            DishRecipe newDishRecipe3 = new DishRecipe(
                    newDish,
                    newIngredient3,
                    12
            );

            DishRecipe newDishRecipe4 = new DishRecipe(
                    newDish,
                    newIngredient4,
                    8
            );

            DishRecipe newDishRecipe5 = new DishRecipe(
                    newDish,
                    newIngredient5,
                    33
            );

            dishRecipeRepository.saveAll(
                    List.of(newDishRecipe1,newDishRecipe2,newDishRecipe3,newDishRecipe4,newDishRecipe5)
            );

            // Saving Salmon Burger
            Dish newDish2 = dishRepository.findByDishName("Salmon Burger").get();
            Ingredient new2Ingredient1 = ingredientRepository.findByIngredientName("Salmon").get();
            Ingredient new2Ingredient2 = ingredientRepository.findByIngredientName("Bread Crumb").get();
            Ingredient new2Ingredient3 = ingredientRepository.findByIngredientName("Egg").get();
            Ingredient new2Ingredient4 = ingredientRepository.findByIngredientName("Olive Oil").get();
            Ingredient new2Ingredient5 = ingredientRepository.findByIngredientName("Mustard").get();
            Ingredient new2Ingredient6 = ingredientRepository.findByIngredientName("Salt").get();
            Ingredient new2Ingredient7 = ingredientRepository.findByIngredientName("Black Pepper").get();
            Ingredient new2Ingredient8 = ingredientRepository.findByIngredientName("Paprika Powder").get();
            Ingredient new2Ingredient9 = ingredientRepository.findByIngredientName("Garlic Powder").get();
            Ingredient new2Ingredient10 = ingredientRepository.findByIngredientName("Onion Powder").get();
            Ingredient new2Ingredient11 = ingredientRepository.findByIngredientName("Burger Bun").get();
            Ingredient new2Ingredient12 = ingredientRepository.findByIngredientName("Mayonnaise").get();

            DishRecipe new2DishRecipe1 = new DishRecipe(
                    newDish2,
                    new2Ingredient1,
                    112.5
            );

            DishRecipe new2DishRecipe2 = new DishRecipe(
                    newDish2,
                    new2Ingredient2,
                    24
            );

            DishRecipe new2DishRecipe3 = new DishRecipe(
                    newDish2,
                    new2Ingredient3,
                    11
            );

            DishRecipe new2DishRecipe4 = new DishRecipe(
                    newDish2,
                    new2Ingredient4,
                    8.5
            );

            DishRecipe new2DishRecipe5 = new DishRecipe(
                    newDish2,
                    new2Ingredient5,
                    1.25
            );

            DishRecipe new2DishRecipe6 = new DishRecipe(
                    newDish2,
                    new2Ingredient6,
                    0.5
            );

            DishRecipe new2DishRecipe7 = new DishRecipe(
                    newDish2,
                    new2Ingredient7,
                    0.25
            );

            DishRecipe new2DishRecipe8 = new DishRecipe(
                    newDish2,
                    new2Ingredient8,
                    1.25
            );

            DishRecipe new2DishRecipe9 = new DishRecipe(
                    newDish2,
                    new2Ingredient9,
                    0.5
            );

            DishRecipe new2DishRecipe10 = new DishRecipe(
                    newDish2,
                    new2Ingredient10,
                    0.5
            );

            DishRecipe new2DishRecipe11 = new DishRecipe(
                    newDish2,
                    new2Ingredient11,
                    75
            );

            DishRecipe new2DishRecipe12 = new DishRecipe(
                    newDish2,
                    new2Ingredient12,
                    16
            );

            dishRecipeRepository.saveAll(
                    List.of(new2DishRecipe1,new2DishRecipe2,new2DishRecipe3,new2DishRecipe4,new2DishRecipe5,new2DishRecipe6,
                            new2DishRecipe7,new2DishRecipe8,new2DishRecipe9,new2DishRecipe10,new2DishRecipe11,new2DishRecipe12)
            );

            // Saving Hokkien Mee
            Dish newDish3 = dishRepository.findByDishName("Hokkien Mee").get();
            Ingredient new3Ingredient1 = ingredientRepository.findByIngredientName("Pork Belly").get();
            Ingredient new3Ingredient2 = ingredientRepository.findByIngredientName("Salt").get();
            Ingredient new3Ingredient3 = ingredientRepository.findByIngredientName("Shrimp").get();
            Ingredient new3Ingredient4 = ingredientRepository.findByIngredientName("Soy Sauce").get();
            Ingredient new3Ingredient5 = ingredientRepository.findByIngredientName("Sesame Oil").get();
            Ingredient new3Ingredient6 = ingredientRepository.findByIngredientName("White Pepper").get();
            Ingredient new3Ingredient7 = ingredientRepository.findByIngredientName("Chicken Stock").get();
            Ingredient new3Ingredient8 = ingredientRepository.findByIngredientName("Garlic").get();
            Ingredient new3Ingredient9 = ingredientRepository.findByIngredientName("Cabbage").get();
            Ingredient new3Ingredient10 = ingredientRepository.findByIngredientName("Noodles").get();
            Ingredient new3Ingredient11 = ingredientRepository.findByIngredientName("Cornstarch").get();

            DishRecipe new3DishRecipe1 = new DishRecipe(
                    newDish3,
                    new3Ingredient1,
                    69.3
            );

            DishRecipe new3DishRecipe2 = new DishRecipe(
                    newDish3,
                    new3Ingredient2,
                    0.25
            );

            DishRecipe new3DishRecipe3 = new DishRecipe(
                    newDish3,
                    new3Ingredient3,
                    453.5
            );

            DishRecipe new3DishRecipe4 = new DishRecipe(
                    newDish3,
                    new3Ingredient4,
                    10.5
            );

            DishRecipe new3DishRecipe5 = new DishRecipe(
                    newDish3,
                    new3Ingredient5,
                    0.25
            );

            DishRecipe new3DishRecipe6 = new DishRecipe(
                    newDish3,
                    new3Ingredient6,
                    0.13
            );

            DishRecipe new3DishRecipe7 = new DishRecipe(
                    newDish3,
                    new3Ingredient7,
                    10.63
            );

            DishRecipe new3DishRecipe8 = new DishRecipe(
                    newDish3,
                    new3Ingredient8,
                    1.13
            );

            DishRecipe new3DishRecipe9 = new DishRecipe(
                    newDish3,
                    new3Ingredient9,
                    72
            );

            DishRecipe new3DishRecipe10 = new DishRecipe(
                    newDish3,
                    new3Ingredient10,
                    56.88
            );

            DishRecipe new3DishRecipe11 = new DishRecipe(
                    newDish3,
                    new3Ingredient11,
                    3.63
            );

            dishRecipeRepository.saveAll(
                    List.of(new3DishRecipe1,new3DishRecipe2,new3DishRecipe3,new3DishRecipe4,new3DishRecipe5,new3DishRecipe6,
                            new3DishRecipe7,new3DishRecipe8,new3DishRecipe9,new3DishRecipe10,new3DishRecipe11)
            );

            // Saving Nasi Lemak
            Dish newDish4 = dishRepository.findByDishName("Nasi Lemak").get();
            Ingredient new4Ingredient1 = ingredientRepository.findByIngredientName("Rice").get();
            Ingredient new4Ingredient2 = ingredientRepository.findByIngredientName("Salt").get();
            Ingredient new4Ingredient3 = ingredientRepository.findByIngredientName("Coconut Milk").get();
            Ingredient new4Ingredient4 = ingredientRepository.findByIngredientName("Onion").get();
            Ingredient new4Ingredient5 = ingredientRepository.findByIngredientName("Garlic").get();
            Ingredient new4Ingredient6 = ingredientRepository.findByIngredientName("Shallot").get();
            Ingredient new4Ingredient7 = ingredientRepository.findByIngredientName("Anchovies").get();
            Ingredient new4Ingredient8 = ingredientRepository.findByIngredientName("Dried Chilli").get();
            Ingredient new4Ingredient9 = ingredientRepository.findByIngredientName("Shrimp Paste").get();
            Ingredient new4Ingredient10 = ingredientRepository.findByIngredientName("Sugar").get();
            Ingredient new4Ingredient11 = ingredientRepository.findByIngredientName("Egg").get();
            Ingredient new4Ingredient12 = ingredientRepository.findByIngredientName("Cucumber").get();

            DishRecipe new4DishRecipe1 = new DishRecipe(
                    newDish4,
                    new4Ingredient1,
                    64
            );

            DishRecipe new4DishRecipe2 = new DishRecipe(
                    newDish4,
                    new4Ingredient2,
                    1.25
            );

            DishRecipe new4DishRecipe3 = new DishRecipe(
                    newDish4,
                    new4Ingredient3,
                    45
            );

            DishRecipe new4DishRecipe4 = new DishRecipe(
                    newDish4,
                    new4Ingredient4,
                    18.75
            );

            DishRecipe new4DishRecipe5 = new DishRecipe(
                    newDish4,
                    new4Ingredient5,
                    0.75
            );

            DishRecipe new4DishRecipe6 = new DishRecipe(
                    newDish4,
                    new4Ingredient6,
                    3
            );

            DishRecipe new4DishRecipe7 = new DishRecipe(
                    newDish4,
                    new4Ingredient7,
                    32
            );

            DishRecipe new4DishRecipe8 = new DishRecipe(
                    newDish4,
                    new4Ingredient8,
                    2.5
            );

            DishRecipe new4DishRecipe9 = new DishRecipe(
                    newDish4,
                    new4Ingredient9,
                    1.25
            );

            DishRecipe new4DishRecipe10 = new DishRecipe(
                    newDish4,
                    new4Ingredient10,
                    2.5
            );

            DishRecipe new4DishRecipe11 = new DishRecipe(
                    newDish4,
                    new4Ingredient11,
                    22
            );

            DishRecipe new4DishRecipe12 = new DishRecipe(
                    newDish4,
                    new4Ingredient12,
                    100
            );

            dishRecipeRepository.saveAll(
                    List.of(new4DishRecipe1,new4DishRecipe2,new4DishRecipe3,new4DishRecipe4,new4DishRecipe5,new4DishRecipe6,
                            new4DishRecipe7,new4DishRecipe8,new4DishRecipe9,new4DishRecipe10,new4DishRecipe11,new4DishRecipe12)
            );

            // Saving Margherita Pizza
            Dish newDish5 = dishRepository.findByDishName("Margherita Pizza").get();
            Ingredient new5Ingredient1 = ingredientRepository.findByIngredientName("White Flour").get();
            Ingredient new5Ingredient2 = ingredientRepository.findByIngredientName("Sugar").get();
            Ingredient new5Ingredient3 = ingredientRepository.findByIngredientName("Yeast").get();
            Ingredient new5Ingredient4 = ingredientRepository.findByIngredientName("Salt").get();
            Ingredient new5Ingredient5 = ingredientRepository.findByIngredientName("Olive Oil").get();
            Ingredient new5Ingredient6 = ingredientRepository.findByIngredientName("Tomato Paste").get();
            Ingredient new5Ingredient7 = ingredientRepository.findByIngredientName("Garlic").get();
            Ingredient new5Ingredient8 = ingredientRepository.findByIngredientName("Mozzarella Cheese").get();
            Ingredient new5Ingredient9 = ingredientRepository.findByIngredientName("Parmesan Cheese").get();
            Ingredient new5Ingredient10 = ingredientRepository.findByIngredientName("Basil Leaves").get();

            DishRecipe new5DishRecipe1 = new DishRecipe(
                    newDish5,
                    new5Ingredient1,
                    75
            );

            DishRecipe new5DishRecipe2 = new DishRecipe(
                    newDish5,
                    new5Ingredient2,
                    1.25
            );

            DishRecipe new5DishRecipe3 = new DishRecipe(
                    newDish5,
                    new5Ingredient3,
                    0.5
            );

            DishRecipe new5DishRecipe4 = new DishRecipe(
                    newDish5,
                    new5Ingredient4,
                    3.75
            );

            DishRecipe new5DishRecipe5 = new DishRecipe(
                    newDish5,
                    new5Ingredient5,
                    5
            );

            DishRecipe new5DishRecipe6 = new DishRecipe(
                    newDish5,
                    new5Ingredient6,
                    32
            );

            DishRecipe new5DishRecipe7 = new DishRecipe(
                    newDish5,
                    new5Ingredient7,
                    2.25
            );

            DishRecipe new5DishRecipe8 = new DishRecipe(
                    newDish5,
                    new5Ingredient8,
                    50
            );

            DishRecipe new5DishRecipe9 = new DishRecipe(
                    newDish5,
                    new5Ingredient9,
                    11.25
            );

            DishRecipe new5DishRecipe10 = new DishRecipe(
                    newDish5,
                    new5Ingredient10,
                    1.25
            );

            dishRecipeRepository.saveAll(
                    List.of(new5DishRecipe1,new5DishRecipe2,new5DishRecipe3,new5DishRecipe4,new5DishRecipe5,new5DishRecipe6,
                            new5DishRecipe7,new5DishRecipe8,new5DishRecipe9,new5DishRecipe10)
            );

            // Saving Aglio Olio
            Dish newDish6 = dishRepository.findByDishName("Aglio Olio").get();
            Ingredient new6Ingredient1 = ingredientRepository.findByIngredientName("Spaghetti").get();
            Ingredient new6Ingredient2 = ingredientRepository.findByIngredientName("Olive Oil").get();
            Ingredient new6Ingredient3 = ingredientRepository.findByIngredientName("Garlic").get();
            Ingredient new6Ingredient4 = ingredientRepository.findByIngredientName("Black Pepper").get();

            DishRecipe new6DishRecipe1 = new DishRecipe(
                    newDish6,
                    new6Ingredient1,
                    115
            );

            DishRecipe new6DishRecipe2 = new DishRecipe(
                    newDish6,
                    new6Ingredient2,
                    15
            );

            DishRecipe new6DishRecipe3 = new DishRecipe(
                    newDish6,
                    new6Ingredient3,
                    10
            );

            DishRecipe new6DishRecipe4 = new DishRecipe(
                    newDish6,
                    new6Ingredient4,
                    4
            );

            dishRecipeRepository.saveAll(
                    List.of(new6DishRecipe1,new6DishRecipe2,new6DishRecipe3,new6DishRecipe4)
            );

//             Saving Fish Head Curry
            Dish newDish7 = dishRepository.findByDishName("Fish Head Curry").get();
            Ingredient new7Ingredient1 = ingredientRepository.findByIngredientName("Red Sea Bream").get();
            Ingredient new7Ingredient2 = ingredientRepository.findByIngredientName("Curry Paste").get();
            Ingredient new7Ingredient3 = ingredientRepository.findByIngredientName("Lemon Grass").get();
            Ingredient new7Ingredient4 = ingredientRepository.findByIngredientName("Tomato").get();
            Ingredient new7Ingredient5 = ingredientRepository.findByIngredientName("Coconut Milk").get();

            DishRecipe new7DishRecipe1 = new DishRecipe(
                    newDish7,
                    new7Ingredient1,
                    125
            );

            DishRecipe new7DishRecipe2 = new DishRecipe(
                    newDish7,
                    new7Ingredient2,
                    17
            );

            DishRecipe new7DishRecipe3 = new DishRecipe(
                    newDish7,
                    new7Ingredient3,
                    5
            );

            DishRecipe new7DishRecipe4 = new DishRecipe(
                    newDish7,
                    new7Ingredient4,
                    25
            );

            DishRecipe new7DishRecipe5 = new DishRecipe(
                    newDish7,
                    new7Ingredient5,
                    116
            );

            dishRecipeRepository.saveAll(
                    List.of(new7DishRecipe1,new7DishRecipe2,new7DishRecipe3,new7DishRecipe4,new7DishRecipe5)
            );

//             Saving Fish and Chips
            Dish newDish8 = dishRepository.findByDishName("Fish and Chips").get();
            Ingredient new8Ingredient1 = ingredientRepository.findByIngredientName("Potato").get();
            Ingredient new8Ingredient2 = ingredientRepository.findByIngredientName("Milk").get();
            Ingredient new8Ingredient3 = ingredientRepository.findByIngredientName("All-Purpose Flour").get();
            Ingredient new8Ingredient4 = ingredientRepository.findByIngredientName("Fish Fillet").get();
            Ingredient new8Ingredient5 = ingredientRepository.findByIngredientName("Black Pepper").get();
            Ingredient new8Ingredient6 = ingredientRepository.findByIngredientName("Egg").get();

            DishRecipe new8DishRecipe1 = new DishRecipe(
                    newDish8,
                    new8Ingredient1,
                    173
            );

            DishRecipe new8DishRecipe2 = new DishRecipe(
                    newDish8,
                    new8Ingredient2,
                    60
            );

            DishRecipe new8DishRecipe3 = new DishRecipe(
                    newDish8,
                    new8Ingredient3,
                    30
            );

            DishRecipe new8DishRecipe4 = new DishRecipe(
                    newDish8,
                    new8Ingredient4,
                    170
            );

            DishRecipe new8DishRecipe5 = new DishRecipe(
                    newDish8,
                    new8Ingredient5,
                    5
            );

            DishRecipe new8DishRecipe6 = new DishRecipe(
                    newDish8,
                    new8Ingredient6,
                    10
            );

            dishRecipeRepository.saveAll(
                    List.of(new8DishRecipe1,new8DishRecipe2,new8DishRecipe3,new8DishRecipe4,new8DishRecipe5,new8DishRecipe6)
            );

//            // Saving Beef Stew
            Dish newDish9 = dishRepository.findByDishName("Beef Stew").get();
            Ingredient new9Ingredient1 = ingredientRepository.findByIngredientName("Beef").get();
            Ingredient new9Ingredient2 = ingredientRepository.findByIngredientName("Beef Broth").get();
            Ingredient new9Ingredient3 = ingredientRepository.findByIngredientName("Tomato").get();
            Ingredient new9Ingredient4 = ingredientRepository.findByIngredientName("Potato").get();
            Ingredient new9Ingredient5 = ingredientRepository.findByIngredientName("Celery").get();
            Ingredient new9Ingredient6 = ingredientRepository.findByIngredientName("Carrot").get();

            DishRecipe new9DishRecipe1 = new DishRecipe(
                    newDish9,
                    new9Ingredient1,
                    113
            );

            DishRecipe new9DishRecipe2 = new DishRecipe(
                    newDish9,
                    new9Ingredient2,
                    113
            );

            DishRecipe new9DishRecipe3 = new DishRecipe(
                    newDish9,
                    new9Ingredient3,
                    56
            );

            DishRecipe new9DishRecipe4 = new DishRecipe(
                    newDish9,
                    new9Ingredient4,
                    65
            );

            DishRecipe new9DishRecipe5 = new DishRecipe(
                    newDish9,
                    new9Ingredient5,
                    18
            );

            DishRecipe new9DishRecipe6 = new DishRecipe(
                    newDish9,
                    new9Ingredient6,
                    17
            );

            dishRecipeRepository.saveAll(
                    List.of(new9DishRecipe1,new9DishRecipe2,new9DishRecipe3,new9DishRecipe4,new9DishRecipe5,new9DishRecipe6)
            );

//            // Saving Wanton Mee
            Dish newDish10 = dishRepository.findByDishName("Wanton Mee").get();
            Ingredient new10Ingredient1 = ingredientRepository.findByIngredientName("Egg Noodles").get();
            Ingredient new10Ingredient2 = ingredientRepository.findByIngredientName("Char Siew").get();
            Ingredient new10Ingredient3 = ingredientRepository.findByIngredientName("Cai Xin").get();
            Ingredient new10Ingredient4 = ingredientRepository.findByIngredientName("Chilli").get();
            Ingredient new10Ingredient5 = ingredientRepository.findByIngredientName("Pork").get();
            Ingredient new10Ingredient6 = ingredientRepository.findByIngredientName("Shrimp").get();
            Ingredient new10Ingredient7 = ingredientRepository.findByIngredientName("Garlic").get();
            Ingredient new10Ingredient8 = ingredientRepository.findByIngredientName("Mushroom").get();
            Ingredient new10Ingredient9 = ingredientRepository.findByIngredientName("Soy Sauce").get();
            Ingredient new10Ingredient10 = ingredientRepository.findByIngredientName("Flour").get();
            Ingredient new10Ingredient11 = ingredientRepository.findByIngredientName("Egg").get();

            DishRecipe new10DishRecipe1 = new DishRecipe(
                    newDish10,
                    new10Ingredient1,
                    100
            );

            DishRecipe new10DishRecipe2 = new DishRecipe(
                    newDish10,
                    new10Ingredient2,
                    75
            );

            DishRecipe new10DishRecipe3 = new DishRecipe(
                    newDish10,
                    new10Ingredient3,
                    25
            );

            DishRecipe new10DishRecipe4 = new DishRecipe(
                    newDish10,
                    new10Ingredient4,
                    37
            );

            DishRecipe new10DishRecipe5 = new DishRecipe(
                    newDish10,
                    new10Ingredient5,
                    37.5
            );

            DishRecipe new10DishRecipe6 = new DishRecipe(
                    newDish10,
                    new10Ingredient6,
                    37.5
            );

            DishRecipe new10DishRecipe7 = new DishRecipe(
                    newDish10,
                    new10Ingredient7,
                    2
            );

            DishRecipe new10DishRecipe8 = new DishRecipe(
                    newDish10,
                    new10Ingredient8,
                    128
            );

            DishRecipe new10DishRecipe9 = new DishRecipe(
                    newDish10,
                    new10Ingredient9,
                    10
            );

            DishRecipe new10DishRecipe10 = new DishRecipe(
                    newDish10,
                    new10Ingredient10,
                    85
            );

            DishRecipe new10DishRecipe11 = new DishRecipe(
                    newDish10,
                    new10Ingredient11,
                    18
            );

            dishRecipeRepository.saveAll(
                    List.of(new10DishRecipe1,new10DishRecipe2,new10DishRecipe3,new10DishRecipe4,new10DishRecipe5,new10DishRecipe6,
                            new10DishRecipe7,new10DishRecipe8,new10DishRecipe9,new10DishRecipe10,new10DishRecipe11)
            );

//             Adding total carbon footprint
            dishService.updateTotalCarbonFootprint();





//            //user sample for food consumed
//            userCarbonTracker userCarbonTracker1 = new userCarbonTracker(
//                    1L,
//                    dish2,
//                    new Date()
//            );
//
//            userCarbonTracker userCarbonTracker2 = new userCarbonTracker(
//                    2L,
//                    dish2,
//                    new Date()
//            );
//
//            userCarbonTrakerRepository.saveAll(
//                    List.of(userCarbonTracker1, userCarbonTracker2)
//            );

        };
    }
}
