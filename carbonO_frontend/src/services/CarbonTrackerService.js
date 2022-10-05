import axios from 'axios';

// const USERS_REST_API_URL = 'http://localhost:8080/api/v1/carbonO/user/login';
const USERS_REST_API_URL = 'http://localhost:8080/api/v1/carbonO/user/getAllUsers';

class UserService {

    getUsers(){
        // axios.get(USERS_REST_API_URL).then(r => r.data);
        axios.get(USERS_REST_API_URL).then(r => {
            console.log("successful");
            console.log(r.data)
            return r.data
        });

    }

    // login(user) {
    //     axios.post(USERS_REST_API_URL,)
    // }

}
export default new UserService();