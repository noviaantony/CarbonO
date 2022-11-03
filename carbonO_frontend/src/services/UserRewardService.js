import axios from 'axios';

const USER_REWARD_API_URL = 'http://localhost:8080/api/v1/carbonO/userReward';

class UserRewardService{
    async getAllRewards(){
        console.log('grabbing rewards');
        const response = await axios.get(
            `${USER_REWARD_API_URL}/reward/getAllRewards`,
        );
        return response.data;

    }
    async getUserReward(userId, userToken) {
        console.log('grabbing user rewards');
        console.log(`userID:${userId}`);
        const response = await axios.get(
            `${USER_REWARD_API_URL}/getUserReward`,
            { params: { userId }, headers: { Authorization: userToken } },
        );
        return response.data;
    }
}
export default new UserRewardService();