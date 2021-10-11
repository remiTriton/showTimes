<template>
  <div>
    <form @submit.prevent="onClick" class="formulair">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">New Concert : </label>
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="group_name"
          placeholder="Group Name"
        />
        <input
          type="date"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="date"
          placeholder="Date"
        />
        <input
          type="integer"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="price"
          placeholder="Price"
        />
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="place"
          placeholder="Place"
        />
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="gender"
          placeholder="Gender"
        />
      </div>
      <button type="submit" class="btn btn-outline-primary">Add Concert</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addConcert",
  data() {
    return {
      group_name: "",
      date: "",
      price: "",
      place: "",
      gender:"",
    };
  },

  methods: {
    async onClick() {
      await this.$store.dispatch("concerts/addConcert", {
        group_name: this.group_name,
        date: this.date,
        price: this.price,
        place: this.place,
        gender:this.gender,
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