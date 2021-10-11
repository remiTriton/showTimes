import axios from "axios";


const state = {
  user: null,
  users: [],
  id: null,
  token: localStorage.getItem("token"),
  errors:[],
  postsUser: [],
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  StateUser: (state) => state.user,
};

const actions = {

  // --  Users --

  async Register({ commit }, form) {
    let res = await axios.post('users/register', form)
    if (res.status!==200) {
      commit('setErrors', res.data)
      return;
    }
    commit('setToken', res.data.token)
  },

  async getUser({commit}, token){
    let res = await axios.get('profile', {
      headers: {authorization: 'Bearer ' + token ?? state.token}
    });
    commit('setUser', res.data)
  },

  async LogIn({commit, dispatch}, form) {
    let res = await axios.post('auth/login', form)
    if (res.data.token){
        return;
    }
    dispatch('getUser', res.data.access_token);
    // console.log(res.data);
    await commit('setToken', res.data.access_token);
  },

  async LogOut({ commit }) {
    let token = null;
    commit("logout", token);
  },
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    localStorage.setItem("token", token);
  },
  logout(state, token) {
    state.token = token;
    state.user = null;
    localStorage.removeItem("token");
  },
  getUsers(state, users) {
    state.users = users;
  },
  setUser(state, user){
    state.user = user;
  },
};


export default  {
  name: "auth",
  namespaced : true,
  state,
  getters,
  actions,
  mutations,
};