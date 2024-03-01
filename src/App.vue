<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue'

export default {
  components:{
    Header,
    Main,
  }, 

      data() {
        return {

        }
      },
}
</script>

<template lang="">
  <Header />
  <Main />
  <div>
    
  </div>
</template>

<style lang="scss">
  @use "./styles/general.scss" as *;

</style>