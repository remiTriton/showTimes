import Vuex from "vuex";
import concerts from "./modules/concerts";
import users from "./modules/users";
import auth from "./modules/auth";
import tickets from "./modules/tickets";
import createPersistedState from "vuex-persistedstate";



export default new Vuex.Store({
  name: "store",
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    concerts,users, auth, tickets
  },
  plugins: [createPersistedState()],
})
