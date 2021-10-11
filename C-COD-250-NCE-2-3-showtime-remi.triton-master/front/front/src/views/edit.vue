<template>
  <div>
    <editProfile :user="this.$store.state.auth.user"/>
  </div>

</template>

<script>
import editProfile from "@/components/editProfil.vue"
export default {
  name: "edit.vue",
  components: { editProfile }
}
</script>

<style scoped>

</style>