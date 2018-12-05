<template>
  <div class="zz-content-body">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home'
}
</script>

<style scoped lang="scss">
  @import "~@/style/base";

  @include b(content-body){
    flex: 1;
  }
</style>
