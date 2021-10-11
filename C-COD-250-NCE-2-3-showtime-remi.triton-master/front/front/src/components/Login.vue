<template>
  <div class="login">
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5 text-center">
                <h3 class="mb-5">Sign in</h3>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="name@example.com"
                    aria-label="email"
                    v-model="form.email"
                  />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    aria-label="password"
                    v-model="form.password"
                  />
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="submit" @click='submit'>Login</button>
                </div>

                <hr class="my-4" />
                <p>
                  Don't have an account?
                  <router-link :to="'register'">Register here</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        password: "",
        email: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions('auth',["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("password", this.form.password);
      User.append("email", this.form.email);
      try {
          await this.LogIn(this.form);
          //this.store.dispatch('auth/LogIn');
          this.showError = false,
                this.$router.push("/");

      } catch (error) {
        this.showError = true
        window.alert("Wrong credentials. Please try again.")
      }
    },
  },
};
</script>

<style scoped>
.card-body {
  background-color: #f7f7f7;
}
</style>



   
