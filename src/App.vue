<script>
import Header from './components/Header.vue';

export default {
  components:{
    Header,
  }, 

      data() {
        return {

        }
      },
}
</script>

<template lang="">
  <Header />
  <router-view></router-view>
  <div>
    
  </div>
</template>

<style lang="scss">
  @use "./styles/general.scss" as *;

</style>./pages/Main.vue