<template>
<h1>
  {{ concerts.group_name }} à {{ concerts.place }}<br>
</h1>
  <div>
  Date : {{ concerts.date }}<br>
  Prix : {{ concerts.price }}<br>
  Genre : {{ concerts.gender }}<br>
  <button class="btn btn-primary btn-sm" @click.prevent="onClick">Buy ticket</button>
  </div>
  
</template>

<script>
// import { mapActions } from "vuex";

export default {

  name: 'PrintConcert',
  data: () => ({
    concerts: {}
  }),
  async created() {
      const res = await fetch("https://showtimelespetitsmusclesback.herokuapp.com/concerts/" + this.$route.params.id);
      const data = await res.json();
      this.concerts = data;
  },
  methods: {
    async onClick(){
    await this.$store.dispatch("tickets/addTicket", {
        // user_Id: this.user._id,
        concert: this.concerts._id
  })
}
  }
}
</script>

<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
