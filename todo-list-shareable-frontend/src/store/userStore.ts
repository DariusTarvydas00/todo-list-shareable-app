import {computed, reactive} from "vue";
import authService from "@/auth/services/auth-service";
import {UserModel} from "@/auth/model/user-model";

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
    async login(user: UserModel){
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