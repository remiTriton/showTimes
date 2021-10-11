<template>
  <div id="nav">
    <Header />
    <div class="header-btn">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <div v-if="adminAuth" id="adminbtn">
        <router-link to="/user">Crud User </router-link> |
        <router-link to="/concert">Crud Concert </router-link>
      </div>
      <router-link class="btn-header" to="/" v-if="user"
        >hello: {{ user.firstName }}</router-link
      >
      <button class="btn-header" id="logoutbtn" v-if="user" v-on:click="logout">
        Logout
      </button>
      <!-- <button class="btn-header" id="logoutbtn" v-on:click="logout">
      Logout
    </button> -->
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: { Header },
  methods: {
    async logout() {
      if ((await this.$store.dispatch("auth/LogOut"), this.$router.go())) {
        window.alert("You've been logged out");
      }
    },
  },
  created() {
    this.$store.dispatch("tickets/fetchTickets");
  },

  computed: {
    adminAuth() {
      try {
        return this.$store.state.auth.user.roles == "admin";
      } catch (e) {
        return false;
      }
    },
    tickets() {
      return this.$store.state.tickets.tickets;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style lang="stylus">
#app {
  font-family: Open Sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.3px;
}
</style>
