import {computed, reactive} from "vue";
import UserService from "@/auth/services/user-service";
import userService from "@/auth/services/user-service";
import authService from "@/auth/services/auth-service";
import {UserEntity} from "@/auth/user.entity";

const state = reactive({
    username: '',
    password: '',
    error: ''
})

const getters = reactive({
    isLoggedIn: computed(()=> state.username !== '')
})

const actions = {
    async getUser() {
       // const user = await authService.getUser()
    },
    async login(user: UserEntity){
        const res = await authService.login(user)
        if (res == null){
            state.error = "Could not find user"
            return false;
        }
    },
    async logout(){
        state.username = ""
        state.password = ""
    }
}

export default {state, getters, ...actions}