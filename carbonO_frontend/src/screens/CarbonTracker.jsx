import React, {useContext, useState, useRef} from 'react'
import Card from "../components/carbontracker/Card";
import AuthContext from "../context/AuthProvider";
import carbonTrackerService from "../services/CarbonTrackerService";

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
    console.log(response);
    // const DishInformation = response;
  }).catch((error) => {
    console.log(error)
  })


  const DishInformation = [
    {
      dishName: "Chicken Rice",
      photo:
        "https://www.visitsingapore.com/dining-drinks-singapore/local-dishes/hainanese-chicken-rice/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
      carbonRating: 4,
      dishKeywords: ["Chicken", "Rice"],
      recipeIngredients: ["Chicken", "Rice", "Egg", "Cucumber"],
      totalCarbonFootprint: 3000,
    },
    {
      dishName: "French Toast",
      photo:
        "https://www.seriouseats.com/thmb/O1-dTHGmNqo9dUpPHR5LW9DOFA0=/1125x1125/smart/filters:no_upscale()/perfect-quick-easy-french-toast-hero-03-2a9485bbb12b4cf5abcfef53aa9accd9.jpg",
      carbonRating: 2,
      dishKeywords: ["French", "Toast"],
      recipeIngredients: ["Bread", "Butter", "Eggs", "Milk", "Honey"],
      totalCarbonFootprint: 3000,
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
                  dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return dish;
              }
            }).map((dish) => {
              return (
                <Card
                  DishTitle={dish.dishName}
                  DishImage={dish.photo}
                  DishRating={dish.carbonRating}
                  DishKeywords={dish.dishKeywords}
                  DishIngredients = {dish.recipeIngredients}
                  DishCarbonFootprint = {dish.totalCarbonFootprint}

                />
              );
            })}
          </div>
        </div>
      </div>
  );


}

export default CarbonTracker
