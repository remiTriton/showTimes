<template>
  <div>
    <form @submit.prevent="onClick" class="formulair">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">New User : </label>
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="firstName"
          placeholder="First Name"
        />
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="lastName"
          placeholder="Last Name"
        />
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="email"
          placeholder="Email"
        />
    
        <input
          type="password"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="password"
          placeholder=" Password"
        />
          
      </div>
      <button type="submit" class="btn btn-outline-primary">Add User</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "addUser",
  data() {
    return {
      id:"",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
     
    };
  },

  created(){
    this.$store.dispatch('concerts/fetchConcert');
  },
  computed:{
    concerts(){
    return this.$store.state.concerts.concerts;
    }
  },
  methods: {
    async onClick() {
      await this.$store.dispatch("users/addUser", {
        _id:this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.formulair {
  margin-right: 25%;
  margin-left: 25%;
  border: 1px solid rgb(3, 1, 80);
  border-radius: 30px;
}

.formulair focus{
    text-decoration: none;
}
</style>