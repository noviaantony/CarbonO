import React, {Component} from 'react';
import UserService from "../services/UserService";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/carbonO/user/getAllUsers'
})

class UserComponent extends Component {
    state = {
        users: []
    }

    constructor(props){
        super(props);
        api.get('/').then(res => {
            console.log(res.data);
            this.setState({users: res.data})
        })
        // this.state = {
        //     users: []
        // }
    }

    // componentDidMount(){
    //     UserService.getUsers().then((response) => {
    //         console.log(response.data);
    //         this.setState({users: response.data})
    //     });
    // }

    render(){
        return(
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                    <tr>
                        <td> User Id</td>
                        <td> User First Name</td>
                        <td> User Last Name</td>
                        <td> User Email</td>
                        <td> User Role</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                            <tr key = {user.id}>
                                <td> {user.id}</td>
                                <td> {user.firstName}</td>
                                <td> {user.lastName}</td>
                                <td> {user.email}</td>
                                <td> {user.role}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent;