import axios from 'axios';

const CARBON_TRACKER_API_URL = 'https://carbonoapp.net/api/v1/carbonO/carbonTracker';

class CarbonTrackerService {
    // moving forward should be grabbed from useContext
    // const userId = localStorage.getItem('userId');
    // const userToken = localStorage.getItem('token');

    async getUserTotalCarbonConsumption(userId, userToken) {
        console.log("grabbing consumption");
        console.log(`userID:${userId} token:${userToken}`);
        try {
            const response = await axios.get(
                `${CARBON_TRACKER_API_URL}/getUserTotalCarbonConsumption`,
                {params: {userId}, headers: {Authorization: "Bearer " + userToken}}
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    }

    async getAllIngredientsFromDish(dishId, userToken) {
        try {
            const response = await axios.get(
                `${CARBON_TRACKER_API_URL}/dish/getAllIngredientsFromDish`,
                {params: {dishId}, headers: {Authorization: "Bearer " + userToken}}
            );
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    }

    async getAllDishes(userToken) {
        console.log("grabbing dishes");
        try {
            const response = await axios.get(
                `${CARBON_TRACKER_API_URL}/dish/getAllDishes`,
                {headers: {Authorization: "Bearer " + userToken}}
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    }

    async postDishConsumed(userToken, userId, receiptId) {
        console.log("posting dish");
        try {
            const response = await axios.post(
                `${CARBON_TRACKER_API_URL}/addUserDishConsumed`,
                null,
                {
                    params: {userId, receiptId},
                    headers: {Authorization: "Bearer " + userToken},
                }
            );
            console.log(response.data)
            return response.data;

        } catch (error) {
            console.log("receipt redemption failed");
            console.log(error.response.data);
            return error.response.data;
        }
    }

    async getDishConsumed(userId, userToken) {
        console.log("grabbing dish consumed");
        console.log(`userID:${userId}`);
        try {
            const response = await axios.get(
                `${CARBON_TRACKER_API_URL}/getUserDishedConsumed`,
                {params: {userId}, headers: {Authorization: "Bearer " + userToken}}
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    }


}

export default new CarbonTrackerService();
