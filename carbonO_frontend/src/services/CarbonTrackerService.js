import axios from 'axios';

// const USERS_REST_API_URL = 'http://localhost:8080/api/v1/carbonO/user/login';
const CARBON_TRACKER_API_URL = 'http://localhost:8080/api/v1/carbonO/userCarbonTracker';
const userId = localStorage.getItem('userId');
const userToken = localStorage.getItem('token');

class CarbonTrackerService {

    async getUserTotalCarbonConsumption() {
        console.log("grabbing consumption");
        const response = await axios.get(CARBON_TRACKER_API_URL + '/getUserTotalCarbonConsumption',
            {params: {userId: userId},
            headers: {Authorization: userToken}
            });
        return response.data;
    }
}
export default new CarbonTrackerService();