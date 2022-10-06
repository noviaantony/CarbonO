import React, {useContext, useState, useRef} from 'react'
import Card from "../components/carbontracker/Card";
import ChickenRice from "../assets/images/ChickenRice.jpg";
import CaeserSalad from "../assets/images/CaeserSalad.jpeg";
import TonkatsuRamen from "../assets/images/TonkotsuRamen.jpeg";
import Laksa from "../assets/images/Laksa.jpeg";
import KoreanTofuSoup from "../assets/images/KoreanTofuSoup.jpeg";
import SteakAndFries from "../assets/images/SteakAndFries.webp";
import NasiLemak from "../assets/images/NasiLemak.webp";
import HokkienMee from "../assets/images/HokkienMee.jpg";
import MargheritaPizza from "../assets/images/MargheritaPizza.jpg";
import SalmonBurger from "../assets/images/SalmonBurger.jpg";
import FishHeadCurry from "../assets/images/FishHeadCurry.png";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import carbonTrackerService from "../services/CarbonTrackerService";
//import AglioOlio from './AglioOlio.jpg'
//import BeefStew from './BeefStew.jpg'
//import FishandChips from './Fish&Chips.jpg'
//import WantanMee from './WantanMee.jpg'

const CARBON_TRACKER_URL = 'http://localhost:8080/api/v1/carbonO/carbonTracker/'
// const ref = useRef(null);

const CarbonTracker = () => {
  const {auth} = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  console.log("from carbon tracker");
  console.log(auth);
  const [foodList, setFoodList] = useState('');
  //grabbing all dishes
  carbonTrackerService.getAllDishes().then(response => {
     console.log(response)
  })


  const DishInformation = [
    {
      DishName: "Chicken Rice",
      DishImage: {ChickenRice}
      // DishRating: 4,
      // ingredients: [],
      // dishKeywords: ["chicken", "rice", "chicken rice", "rice chicken"]
    },
    {
      DishName: "Nasi Lemak",
      DishImage: {NasiLemak},
    },
    {
      DishName: "Laksa",
      DishImage: {Laksa},
    },
    {
      DishName: "Caeser Salad",
      DishImage: {CaeserSalad},
    },
    {
      DishName: "Korean Tofu Soup",
      DishImage: {KoreanTofuSoup},
    },
    {
      DishName: "Tonkatsu Ramen",
      DishImage: {TonkatsuRamen},
    },
    {
      DishName: "Steak and Fries",
      DishImage: {SteakAndFries},
    },
  ];

  return (
      <div className="items-center">
        <form className="m-10 mx-50">
          <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative ">
            <div class="flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none">
              <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border"
                placeholder="Search for foods,snacks,etc"
                required=""
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
            />
          </div>
        </form>

        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            {DishInformation.filter((dish) => {
              if (searchTerm == "") {
                return dish;
              } else if (
                  dish.DishName.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return dish;
              }
            }).map((dish) => {
              console.log(dish);
              return (
                  <Card DishTitle={dish.DishName} DishImage= {dish.DishImage}/>                 
              );
            })}
          </div>
        </div>
      </div>
  );


}

export default CarbonTracker
