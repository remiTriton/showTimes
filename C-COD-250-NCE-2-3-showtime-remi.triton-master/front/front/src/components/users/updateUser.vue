<template>
  <div class="modal fade" tabindex="-1" :id="'updateUsers' + user._id">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modifier {{ user.firstName }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label :for="'firstName' + user._id" class="form-label"
                >User:
              </label>
              <input
                type="text"
                class="form-control mb-3"
                :id="'firstName' + user._id"
                v-model="firstName"
              />
              <input
                type="text"
                class="form-control mb-3"
                :id="'lastName' +user._id"
                v-model="lastName"
              />
              <input
                type="text"
                class="form-control mb-3"
                :id="'email' + user._id"
                v-model="email"
              />
              <input
                type="password"
                class="form-control mb-3"
                :id="'password' + user._id"
                v-model="password"
              />
              <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"></label>
        <select v-model="concert" placeholder="Choose a concert" class="form-select">
          <option value="" disabled>Choose a concert</option>

          <option v-for="concert in concerts" :key="concert.id" v-bind:value="concert._id">
            {{ concert.group_name }}
          </option>
        </select>
      </div>
              <input
                type="text"
                class="form-control mb-3"
                :id="'favorite_band' + user._id"
                v-model="favourite_band"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="reload"
          >
            Close
          </button>
          <button type="submit" class="btn btn-primary" @click="onClick">
            Submit changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "updateUser",
  props: ["user"],
  data() {
    return {
      id: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
     
    };
  },   
  created() {
    this.$store.dispatch("concerts/fetchConcert");
  },
  computed: {
    concerts() {
      return this.$store.state.concerts.concerts;
    },
  },
  methods: {
    async onClick() {
      await this.$store.dispatch("users/updateUsers", {
        _id: this.user._id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        concert: this.concert,
        favourite_band: this.favourite_band,
      });
    },

    reload() {
      this.$router.go();
    },
  },
};
</script>
