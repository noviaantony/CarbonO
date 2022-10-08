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
     carbonTrackerService.getAllDishes()
         .then((response) => {
           setFoodList(response)
         }).then((data) => {
          setTodo(data);
          setLoading(false);
      })
  })
  // const DishInformation2 = [
  //   {
  //     dishName: "Chicken Rice",
  //     photo:
  //         "https://www.visitsingapore.com/dining-drinks-singapore/local-dishes/hainanese-chicken-rice/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
  //     carbonRating: 4,
  //     dishKeywords: ["Chicken", "Rice"],
  //     recipeIngredients: ["Chicken", "Rice", "Egg", "Cucumber"],
  //     totalCarbonFootprint: 3000,
  //   },
  //   {
  //     dishName: "French Toast",
  //     photo:
  //         "https://www.seriouseats.com/thmb/O1-dTHGmNqo9dUpPHR5LW9DOFA0=/1125x1125/smart/filters:no_upscale()/perfect-quick-easy-french-toast-hero-03-2a9485bbb12b4cf5abcfef53aa9accd9.jpg",
  //     carbonRating: 2,
  //     dishKeywords: ["French", "Toast"],
  //     recipeIngredients: ["Bread", "Butter", "Eggs", "Milk", "Honey"],
  //     totalCarbonFootprint: 3000,
  //   },
  // ];

  //grabbing all dishes
  // let DishInformation = await carbonTrackerService.getAllDishes();//carbonTrackerService.getAllDishes().then();
  //
  // carbonTrackerService.getAllDishes().then(response => {
  //   // console.log(response);
  //   DishInformation = response.data;
  //   console.log("Dish Information");
  //   console.log(DishInformation);
  //   // console.log("Dish Information 2");
  //   // console.log(DishInformation2);
  // }).catch((error) => {
  //   console.log(error)
  // })
  // console.log(DishInformation)






  return (
      <>
      {loading ? (
              <div>...Data Loading.....</div>
          ) : (
      <div className="items-center">

        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
              {foodList.map((dish)=>{
              return (
                  <Card DishTitle={dish.dishName} DishPhoto={dish.photo} DishCarbonRating={dish.carbonRating} />
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
