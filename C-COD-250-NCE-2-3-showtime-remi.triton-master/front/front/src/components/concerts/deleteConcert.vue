<template>
  <button type="button" class="btn btn-outline-danger btn-sm" @click="onClick">
    Delete
  </button>
</template>
<script>
export default {
name :'deleteConcert',
props : ["id"],

  data() {
    return {
      concert: {

      },
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("concerts/deleteConcertAdmin", this.id);
      console.log("Concert deleted")
    },
  },
};

</script>