<template>
  <div>
    <div>
      <table
        class="table table-striped table-dark"
        style="background-color: #131313; color: white"
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">group_name</th>
            <th scope="col">date</th>
            <th scope="col">price</th>
            <th scope="col">place</th>
                        <th scope="col">gender</th>

            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="concert in concerts" :key="concert.id">
            <updateConcert :concert="concert" />

            <td>{{ concert._id }}</td>
            <td>{{ concert.group_name }}</td>
            <td>{{ concert.date }}</td>
            <td>{{ concert.price }}</td>
            <td>{{ concert.place }}</td>
                      <td>{{ concert.gender }}</td>

            <td><deleteConcert :id="concert._id" /></td>
            <td>
              <button
                type="button"
                class="btn btn-outline-info btn-sm"
                data-bs-toggle="modal"
                :data-bs-target="'#updateConcerts' + concert._id"
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <addConcert />
  </div>
</template>

<script>
import deleteConcert from "@/components/concerts/deleteConcert.vue";
import updateConcert from "@/components/concerts/updateConcert.vue";
import addConcert from "@/components/concerts/addConcert.vue";

export default {
  name: "concert",
  components: {
   deleteConcert,
   updateConcert,
   addConcert,
  },
  created() {
    this.$store.dispatch("concerts/fetchConcert");
  },
  computed: {
    concerts() {
      return this.$store.state.concerts.concerts;
    },
  },
};
</script>
