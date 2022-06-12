import { createStore} from "vuex";


const store = createStore({
  state: {
    user: '',
    token: ''
  },
  getters: {
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    SAVE_USER(state,user) {
      state.user = user;
    }
  },
  actions: {
    saveUser({commit}, user) {
      commit('SAVE_USER',user);
    }
  },
});

export default store
