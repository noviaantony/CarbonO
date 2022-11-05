import axios from 'axios';

const USER_API_URL = 'http://18.136.163.9:8080/api/v1/carbonO/user';

class UserService{
    async forgotPassword(email){
        console.log('forgot password');
        try {
            const response = await axios.post(
                `${USER_API_URL}/forgotPassword`,
                null,
                {params: {email}}
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async resetPassword(newPassword, token){
        console.log('reset password');
        try {
            const response = await axios.put(
                `${USER_API_URL}/processResetPassword`,
                null,
                {params: {newPassword,token}}
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

}
export default new UserService();