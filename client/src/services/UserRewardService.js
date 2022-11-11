import axios from 'axios';

const USER_REWARD_API_URL = 'https://carbonoapp.net/api/v1/carbonO/userReward';


class UserRewardService {
    async getAllRewards(userToken) {
        console.log('grabbing rewards');
        const response = await axios.get(
            `${USER_REWARD_API_URL}/reward/getAllRewards`,
            {headers: {Authorization: "Bearer" + userToken}}
        );
        return response.data;

    }

    async getUserReward(userId, userToken) {
        console.log('grabbing user rewards');
        const response = await axios.get(
            `${USER_REWARD_API_URL}/getUserReward`,
            {params: {userId}, headers: {Authorization: "Bearer" + userToken}},
        );
        return response.data;
    }

    async redeemReward(userId, rewardId, userToken) {
        console.log('redeeming reward');
        console.log(`userID:${userId}`);
        const response = await axios.post(
            `${USER_REWARD_API_URL}/claimReward`,
            null,
            {params: {userId, rewardId}, headers: {Authorization: "Bearer" + userToken}},
        );
        return response.data;
    }
}

export default new UserRewardService();