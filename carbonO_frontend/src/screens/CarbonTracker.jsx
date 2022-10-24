import React, {useContext, useState, useRef, useEffect} from 'react'
import { ThreeDots } from "react-loader-spinner";
import Card from "../components/carbontracker/Card";
import CarbonTrackerService from "../services/CarbonTrackerService";
import Header from "../components/misc/Header";
import AuthContext from "../context/AuthProvider";
import QRScanner from "../components/carbontracker/QRScanner";

const  CarbonTracker = () => {

  const {auth} = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(()=> {
      setLoading(true);
     CarbonTrackerService.getAllDishes()
         .then((response) => {
           setFoodList(response);
         }).then((data) => {
          setTodo(data);
          setLoading(false);
      })
  },[])

  return (
    <>
      <Header
        Title="Reduce Your Carbon Foodprint Today!"
        Description="upload a valid receipt for a dish and claim e-credits to redeem rewards or donate!"
      />
      {loading ? (
        <>
          <div className="flex justify-center h-screen mt-20">
            <ThreeDots
              height="300"
              width="300"
              radius="9"
              color="#000"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        </>
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
              {foodList
                .filter((dish) => {
                  if (searchTerm == "") {
                    return dish;
                  } else if (
                    dish.dishName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return dish;
                  }
                })
                .map((dish) => {
                  return (
                    <Card
                      dishId={dish.id}
                      dishTitle={dish.dishName}
                      dishImage={dish.photo}
                      dishRating={dish.carbonRating}
                      dishKeywords={dish.dishKeywords}
                      dishIngredients={dish.recipeIngredients}
                      dishCarbonFootprint={dish.totalCarbonFootprint.toFixed(0)}
                      dishCredit={dish.dishRewardPoints}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarbonTracker;