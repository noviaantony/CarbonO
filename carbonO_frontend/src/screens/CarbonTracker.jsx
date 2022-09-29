import React from 'react'
import Navbar from "./Navbar";
import Footer from "../components/footer/Footer";
import Searchbar from "../components/carbontracker/Searchbar";
import Card from "../components/carbontracker/Card";
import ChickenRice from "./ChickenRice.jpg";
import CaeserSalad from "./CaeserSalad.jpeg";
import TonkatsuRamen from "./TonkotsuRamen.jpeg"
import Laksa from "./Laksa.jpeg";
import KoreanTofuSoup from "./KoreanTofuSoup.jpeg"
import SteakAndFries from './SteakAndFries.webp'




const CarbonTracker = () => {
  return (
    <div className="items-center">
      {/* <Navbar /> */}
      <Searchbar />

      {/* <div class=" container my-12 mx-auto px-4 md:px-12 items-center">
        <div class="flex flex-wrap lg:-mx-4 items-center mx-60 grid-rows-3"> */}
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <Card DishTitle={"Singapore Chicken Rice"} DishImage={ChickenRice} />
          <Card DishTitle={"Caeser Salad"} DishImage={CaeserSalad} />
          <Card DishTitle={"Tonkatsu Ramen"} DishImage={TonkatsuRamen} />
          <Card DishTitle={"Korean Tofu Soup"} DishImage={KoreanTofuSoup} />
          <Card DishTitle={"Nasi Lemak"} DishImage={CaeserSalad} />
          <Card DishTitle={"Steak and Fries"} DishImage={SteakAndFries} />
          <Card DishTitle={"Laksa"} DishImage={Laksa} />
        </div>
      </div>
    </div>
  );
}

export default CarbonTracker
