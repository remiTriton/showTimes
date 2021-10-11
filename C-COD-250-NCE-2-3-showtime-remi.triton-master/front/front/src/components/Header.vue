<template>
  <nav
    class="navbar navbar navbar-expand-md navbar-dark fixed-top"
    style="padding-top: 0 !important"
  >
    <div class="container-fluid">
      <div class="col-md-3 user">
        <router-link to="/login">
          <i class="fas fa-user fa-2x text-white"></i>
        </router-link>
        <router-link to="/"> <i class="fas fa-shopping-bag fa-2x text-white"></i></router-link>
        <router-link v-if="user"
          :to="{ name: 'Edit', params: { id: user._id } }"
        >
          <i class="fas fa-house-user fa-2x text-white"></i
        ></router-link>
      </div>
      <div class="col-md-6 title">
        <h1 class="navbar-brand">Let the Music Play</h1>
      </div>
      <form class="col-md-3" @submit.prevent="onClick">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="query"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    async onClick() {
      await this.$store.dispatch("concerts/search", this.query);
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
}
.col-md-3 {
  display: flex;
  justify-content: center;
}
.user {
  justify-content: space-between;
  display: flex;
}
.container-fluid {
  height: 70px;
  background-color: black;
}
.navbar-brand {
  text-align: center;
  font-size: xx-large;
  color: white;
}
.d-flex {
  margin-top: 100px;
}
.fa-shopping-bag {
  margin-right: auto;
}
.fa-house-user {
  margin-left: 10px;
}
</style>

