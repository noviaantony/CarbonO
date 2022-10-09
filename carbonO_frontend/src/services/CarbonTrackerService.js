import axios from 'axios';
import {useContext} from "react";
import AuthContext from "../context/AuthProvider";

// const USERS_REST_API_URL = 'http://localhost:8080/api/v1/carbonO/user/login';
const CARBON_TRACKER_API_URL = 'http://localhost:8080/api/v1/carbonO/carbonTracker';

//moving forward should be grabbed from useContext
const userId = localStorage.getItem('userId');
const userToken = localStorage.getItem('token');

class CarbonTrackerService {
  async getUserTotalCarbonConsumption() {
    console.log("grabbing consumption");
    const response = await axios.get(
      CARBON_TRACKER_API_URL + "/getUserTotalCarbonConsumption",
      { params: { userId: userId }, headers: { Authorization: userToken } }
    );
    return response.data;
  }
  async getAllDishes(){
      console.log("grabbing dishes");
      const response = await axios.get(CARBON_TRACKER_API_URL + '/dish/getAllDishes')
      // console.log(response.data);

      return response.data;
  }
  async postDishConsumed(dishId){
        console.log("posting dish");
        const response = await axios.post(CARBON_TRACKER_API_URL + '/addUserDishConsumed',null, { params: { dishId: dishId, userId: userId},headers:{ Authorization: userToken } })
        return response.status;
  }

  async getDishConsumed(userId){
        console.log("grabbing dish consumed");
        const response = await axios.get(CARBON_TRACKER_API_URL + '/getUserDishConsumed', { params: { userId: userId }, headers: { Authorization: userToken } })
        return response.data;
  }
}
export default new CarbonTrackerService();