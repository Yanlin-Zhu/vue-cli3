<template>
  <div class="zz-content">
    <div class="a">qq</div>
    <div class="b">ww</div>
    <div class="c">ee</div>
    <div class="d">rr</div>
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

  @include b(content){
    flex: auto;
    div{
      height: 100px;
      margin: 20px 0;
    }
  }
  .a{
    background: url('../assets/img/img@2X/BOS@2X.png') no-repeat;
  }
  .b{
    background: url('../assets/img/img@2X/BOC@2X.png') no-repeat;
  }
  .c{
    background: url('../assets/img/img@2X/ABC@2X.png') no-repeat;
  }
  .d{
    background: url('../assets/img/img@2X/CEB@2X.png') no-repeat;
  }
</style>
