import axios from 'axios';
import {UserEntity} from "@/auth/user.entity";
const API_URL = 'http://localhost:3000/auth/';
class AuthService {
    login(user: UserEntity) {
        return axios
            .post(API_URL + 'signin', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user: UserEntity) {
        return axios.post(API_URL + 'signup', {
            email: user.email,
            password: user.password
        });
    }
}
export default new AuthService();