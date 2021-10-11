<template>
  <div class="index">
    <!-- <img alt="Vue logo" src="/src/assets/logo.png"> -->
    <Index />
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/index/components/Index.vue'
export default {
  name: 'index',
  components: {
    Index
  }
}
</script>
