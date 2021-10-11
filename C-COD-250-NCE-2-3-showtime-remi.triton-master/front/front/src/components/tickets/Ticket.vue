<template>
<h1>
  {{ tickets.concert }}<br>
</h1>
  <div v-for="concert in concerts" :key="concert.id">
  {{ concert.group_name }}<br>
  </div>
  <div>
  <img v-if="qrcode" :src="qrcode" />
  </div>
  
</template>

<script>
import { toDataURL } from 'qrcode';

export default {

  name: 'Ticket',
  data() {
    return {
      qrcode: "",
    };
  },  
  async created() {
      console.log(this.qrcode);
      this.$store.dispatch('tickets/getTicket', String(this.$route.params.id));
      this.qrcode = await toDataURL("https://showtimelespetitsmuscles.herokuapp.com/#/qrvalidate/" + this.$route.params.id);

  },
  
  computed:{
      tickets(){
      this.$store.dispatch('concerts/findOneConcert', this.$store.state.tickets.tickets.concert );    
          return this.$store.state.tickets.tickets;
      },
      concerts(){
          return this.$store.state.concerts.concerts;
      }
  },
  // methods: {
  //   async QRcode() {
  //     this.qrcode = await toDataURL('http://localhost:8080/#/qrvalidate/');
  //   },
  
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
