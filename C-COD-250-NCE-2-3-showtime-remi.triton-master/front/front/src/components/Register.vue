<template>
  <div class="register">
    <section>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">
                  Create an account
                </h2>

                <form>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Your first name"
                      aria-label="Your first name"
                      v-model="form.firstName"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Your last name"
                      aria-label="Your last name"
                      v-model="form.lastName"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      placeholder="Your e-mail"
                      aria-label="Your E-mail"
                      v-model="form.email"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Password"
                      aria-label="Password"
                      v-model="form.password"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Repeat your password"
                      aria-label="Repeat your password"
                    />
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3cg"
                    />
                    <label class="form-check-label" for="form2Example3g">
                      I agree all statements in
                      <a href="" class="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>

                  <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary" @click='submit'>
                      Register
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">
                    Have already an account?
                    <router-link :to="'login'">Login here</router-link>
                  </p>
                </form>
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
  name: "Register",
  components: {},
  computed: {
    errors() {
        return this.$store.state.auth.errors
    },
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions('auth', ["Register"]),
    submit() {
      this.Register(this.form);
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 80px;
}
.card-body {
  background-color: #f7f7f7;
}
</style>
