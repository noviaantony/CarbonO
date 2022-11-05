import axios from 'axios';

const USER_API_URL = 'http://18.136.163.9:8080/api/v1/carbonO/user';

class UserService{
    async getAllOrganisations(){
        console.log('Grabbing All organisations');
        try {
            const response = await axios.get(
                `${USER_API_URL}/getAllNonProfitOrganisations`
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
export default new UserService();