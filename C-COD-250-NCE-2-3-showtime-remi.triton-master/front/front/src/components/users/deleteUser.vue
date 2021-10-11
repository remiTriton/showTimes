<template>
  <button type="button" class="btn btn-outline-danger btn-sm" @click="onClick">
    Delete
  </button>
</template>
<script>
export default {
name :'supress',
props : ["id"],

  data() {
    return {
      user: {

      },
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("users/deleteUserAdmin", this.id);
      console.log("User deleted")
    },
  },
};

</script>