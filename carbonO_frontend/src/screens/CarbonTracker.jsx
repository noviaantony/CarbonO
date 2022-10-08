import React, {useContext, useState, useRef, useEffect} from 'react'
import Card from "../components/carbontracker/Card";
import AuthContext from "../context/AuthProvider";
import carbonTrackerService from "../services/CarbonTrackerService";

const CARBON_TRACKER_URL = 'http://localhost:8080/api/v1/carbonO/carbonTracker/'
// const ref = useRef(null);

const  CarbonTracker = () => {

  const {auth} = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  console.log("from carbon tracker");
  console.log(auth);
  const [foodList, setFoodList] = useState([]);
    const [todo, setTodo] = useState({});
    const [loading, setLoading] = useState(false);


  useEffect(()=> {
      setLoading(true);
     carbonTrackerService.getAllDishes()
         .then((response) => {
           setFoodList(response)
             console.log(foodList)
         }).then((data) => {
          setTodo(data);
          setLoading(false);
      })
  },[])

  return (
      <>
      {loading ? (
              <div>...Data Loading.....</div>
          ) : (
      <div className="items-center">

          <form className="m-10 mx-50">
              <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                  Search
              </label>
              <div className="relative ">
                  <div className="flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none">
                      <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                      className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border"
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
              {foodList.filter((dish) => {
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
                      DishCarbonFootprint = {dish.totalCarbonFootprint.toFixed(0)}
                      DishCredit={dish.dishRewardPoints}
                  />
              )

              })}
          </div>
        </div>
      </div>
      )}
      </>
  );
};

export default CarbonTracker
