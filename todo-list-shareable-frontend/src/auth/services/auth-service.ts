import axios from 'axios';
import {UserModel} from "@/auth/model/user-model";
const API_URL = "http://161.97.99.214:3000";
class AuthService {
    async login(user: UserModel) {
        const {username,password} = user
        await axios.post(API_URL + "/auth/signin",
            {username: username, password: password},
            {headers: {'Content-Type': 'application/json; charset=UTF-8'}
            }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken);
            }
            return response.data;
        })
    }
    async register(user: UserModel) {
        const {username, password} = user
        await axios.post(API_URL + "/auth/signup",
            {username: username, password: password},
            {
                headers: {'Content-Type': 'application/json; charset=UTF-8'}
            }).then(response =>{
            if (response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken);
            }
            return response.data
        })
    }

}
export default new AuthService();