import axios from 'axios';

const USER_API_URL = 'http://localhost:8080/api/v1/carbonO/user';

class UserService{
    async forgotPassword(email){
        console.log('forgot password');
        const response = await axios.post(
            `${USER_API_URL}/forgotPassword`,
            null,
            {params: {email}}
        );
        return response.data;
    }


}
export default new UserService();