<template>
  <div>
    <div class="container-fluid">
      <form v-if="user">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Your mail : {{ user.email }}</label
          >
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Your favourite groups : {{ user.favourite_band }}</label
          >
          <input
            type="text"
            v-model="favourite_band"
            class="form-control"
            id="exampleInputEmail1"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          @click="onClick(user.userId)"
        >
          Submit changes
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "editProfil",
 
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },

  methods: {
    async onClick() {
      await this.$store.dispatch("users/updateUsers", {
        _id: this.user._id,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.email,
        favourite_band: this.favourite_band,

        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.container-fluid {
  display: flex;
  flex-wrap: wrap;
}
</style>