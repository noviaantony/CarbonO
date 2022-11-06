import axios from 'axios';

const USER_API_URL = 'http://18.136.163.9:8080/api/v1/carbonO';

class DonationService{
    async getAllOrganisations(){
        console.log('Grabbing All organisations');
        try {
            const response = await axios.get(
                `${USER_API_URL}/user/getAllNonProfitOrganisations`
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async donatePoints(userId, pointsToDonate, organisationId, userToken){
        console.log('Grabbing All organisations');
        try {
            const response = await axios.put(
                `${USER_API_URL}/userReward/donateRewardPoints`,
                null,
                {params: {userId, pointsToDonate, organisationId}, headers: { Authorization: userToken }}
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

}
export default new DonationService();