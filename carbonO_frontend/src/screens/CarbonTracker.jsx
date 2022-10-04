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
import NasiLemak from "./NasiLemak.webp";
import HokkienMee from "./HokkienMee.jpg";
//import AglioOlio from './AglioOlio.jpg'
import MargheritaPizza from "./MargheritaPizza.jpg";
import SalmonBurger from "./SalmonBurger.jpg";
//import BeefStew from './BeefStew.jpg'
//import FishandChips from './Fish&Chips.jpg'
import FishHeadCurry from "./FishHeadCurry.png";
//import WantanMee from './WantanMee.jpg'

const foodItems = [
  <Card DishTitle={"Singapore Chicken Rice"} DishImage={ChickenRice} />,
  <Card DishTitle={"Caeser Salad"} DishImage={CaeserSalad} />,
  <Card DishTitle={"Tonkatsu Ramen"} DishImage={TonkatsuRamen} />,
  <Card DishTitle={"Korean Tofu Soup"} DishImage={KoreanTofuSoup} />,
  <Card DishTitle={"Nasi Lemak"} DishImage={NasiLemak} />,
  <Card DishTitle={"Steak and Fries"} DishImage={SteakAndFries} />,
  <Card DishTitle={"Laksa"} DishImage={Laksa} />,
  <Card DishTitle={"Margherita Pizza"} DishImage={MargheritaPizza} />,
  <Card DishTitle={"Hokkien Mee"} DishImage={HokkienMee} />,
  <Card DishTitle={"Salmon Burger"} DishImage={SalmonBurger} />,
  <Card DishTitle={"Fish Head Curry"} DishImage={FishHeadCurry} />,
];

const CarbonTracker = () => {
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get("s");
  // const [searchQuery, setSearchQuery] = useState(query || '');
  // const filterFoodItems = (foodItems, query) => {
  //   if (!query) {
  //     return foodItems;
  //   }

  //   return foodItems.filter((foodItem) => {
  //     //need to retrieve value of DishTitle from the array
  //     const dishName = {foodItem.Card.DishTitle}.toLowerCase();
  //     return dishName.includes(query);
  //   });
  // };
  // const filteredFoodItems = filterFoodItems(foodItems, searchQuery);
  return (
    <div className="items-center">
      {/* <Navbar /> */}
      <Searchbar />
{/* <Searchbar searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}/>
     
     <ul>
                {filteredFoodItems.map(foodItem => (
                    <li key={post.DishTitle}></li>
                ))}
            </ul> */}
      {/* <div class=" container my-12 mx-auto px-4 md:px-12 items-center">
        <div class="flex flex-wrap lg:-mx-4 items-center mx-60 grid-rows-3"> */}
      {/* <div class=" container my-12 mx-auto px-4 md:px-12 items-center">
        <div class="flex flex-wrap lg:-mx-4 items-center mx-60 grid-rows-3"> */}
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
        {foodItems}
          {/* <Card DishTitle={"Singapore Chicken Rice"} DishImage={ChickenRice} />
          <Card DishTitle={"Caeser Salad"} DishImage={CaeserSalad} />
          <Card DishTitle={"Tonkatsu Ramen"} DishImage={TonkatsuRamen} />
          <Card DishTitle={"Korean Tofu Soup"} DishImage={KoreanTofuSoup} />
          <Card DishTitle={"Nasi Lemak"} DishImage={CaeserSalad} />
          <Card DishTitle={"Steak and Fries"} DishImage={SteakAndFries} />
          <Card DishTitle={"Laksa"} DishImage={Laksa} /> */}
        </div>
      </div>
    </div>
  );
}

export default CarbonTracker
