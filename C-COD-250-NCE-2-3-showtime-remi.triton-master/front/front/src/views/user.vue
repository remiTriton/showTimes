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
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <updateUser :user="user" />
            <td>{{ user._id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td><supress :id ="user._id" /></td>
            <td>
              <button
                type="button"
                class="btn btn-outline-info btn-sm"
                data-bs-toggle="modal"
                :data-bs-target="'#updateUsers' + user._id"
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <addUser />
  </div>
</template>

<script>
import supress from "@/components/users/deleteUser.vue";
import updateUser from "@/components/users/updateUser.vue";
import AddUser from "@/components/users/addUser.vue";

export default {
  name: "user",
  components: {
    supress,
    updateUser,
    AddUser,
  },
  created() {
    this.$store.dispatch("users/fetchUser");
  },
  computed: {
    users() {
      return this.$store.state.users.users;
    },
  },
};
</script>