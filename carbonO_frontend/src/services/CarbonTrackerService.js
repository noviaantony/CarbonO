import axios from 'axios';

const CARBON_TRACKER_API_URL = 'http://localhost:8080/api/v1/carbonO/carbonTracker';

class CarbonTrackerService {
  // moving forward should be grabbed from useContext
  // const userId = localStorage.getItem('userId');
  // const userToken = localStorage.getItem('token');

  async getUserTotalCarbonConsumption(userId, userToken) {
    console.log('grabbing consumption');
    console.log(`userID:${userId} token:${userToken}`);

    const response = await axios.get(`${CARBON_TRACKER_API_URL}/getUserTotalCarbonConsumption`, { params: { userId }, headers: { Authorization: userToken } });
    return response.data;
  }

  async getAllDishes() {
    console.log('grabbing dishes');
    const response = await axios.get(
      `${CARBON_TRACKER_API_URL}/dish/getAllDishes`,
    );
    return response.data;
  }

  async postDishConsumed(dishId, userToken, userId) {
    console.log('posting dish');
    const response = await axios.post(
      `${CARBON_TRACKER_API_URL}/addUserDishConsumed`,
      null,
      {
        params: { dishId, userId },
        headers: { Authorization: userToken },
      },
    );
    return response.status;
  }

  async getDishConsumed(userId, userToken) {
    console.log('grabbing dish consumed');
    console.log(`userID:${userId}`);
    const response = await axios.get(
      `${CARBON_TRACKER_API_URL}/getUserDishedConsumed`,
      { params: { userId }, headers: { Authorization: userToken } },
    );
    return response.data;
  }
}
export default new CarbonTrackerService();
