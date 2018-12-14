<template>
  <div class="zz-content">
    <div class="zz-content__img">
      <p>一倍图</p>
      <div class="zz-content__img--one">
        <div class="a"></div>
        <div class="b"></div>
        <div class="c"></div>
        <div class="cd"></div>
        <div class="ct1"></div>
        <div class="ct2"></div>
      </div>
      <p>二倍图</p>
      <div class="zz-content__img--double">
        <div class="a"></div>
        <div class="b"></div>
        <div class="c"></div>
        <div class="cd"></div>
        <div class="ct1"></div>
        <div class="ct2"></div>
      </div>
      <p>三倍图</p>
      <div class="zz-content__img--treble">
        <div class="a"></div>
        <div class="b"></div>
        <div class="c"></div>
        <div class="cd"></div>
        <div class="ct1"></div>
        <div class="ct2"></div>
      </div>
    </div>
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
    @include e(img){
      div{
        margin: 10px;
        display: inline-block;
        text-align: center;
      }
      @include m(one){
        .a{
          background: url('../assets/img/img/ABC.png') no-repeat;
          height: 90px;
          width: 90px;
        }
        .b{
          background: url('../assets/img/img/BOB.png') no-repeat;
          height: 90px;
          width: 90px;
        }
        .c{
          background: url('../assets/img/img/lion.jpg') no-repeat;
          height: 50px;
          width: 80px;
        }
        .cd{
          background: url('../assets/img/img/christmasdecorate.png') no-repeat;
          height: 67px;
          width: 200px;
        }
        .ct1{
          background: url('../assets/img/img/christmastree1.png') no-repeat;
          height: 113px;
          width: 100px;
        }
        .ct2{
          background: url('../assets/img/img/christmastree2.png') no-repeat;
          height: 75px;
          width: 50px;
        }
      }
      @include m(double){
        .a{
          background: url('../assets/img/img@2X/ABC@2X.png') no-repeat;
          height: 45px;
          width: 45px;
        }
        .b{
          background: url('../assets/img/img@2X/BOB@2X.png') no-repeat;
          height: 45px;
          width: 45px;
        }
        .c{
          background: url('../assets/img/img@2X/lion@2X.jpg') no-repeat;
          height: 50px;
          width: 80px;
        }
        .cd{
          background: url('../assets/img/img@2X/christmasdecorate@2X.png') no-repeat;
          height: 34px;
          width: 100px;
        }
        .ct1{
          background: url('../assets/img/img@2X/christmastree1@2X.png') no-repeat;
          height: 56px;
          width: 50px;
        }
        .ct2{
          background: url('../assets/img/img@2X/christmastree2@2X.png') no-repeat;
          height: 38px;
          width: 25px;
        }
      }
      @include m(treble){
        .a{
          background: url('../assets/img/img@3X/ABC@3X.png') no-repeat;
          height: 30px;
          width: 30px;
        }
        .b{
          background: url('../assets/img/img@3X/BOB@3X.png') no-repeat;
          height: 30px;
          width: 30px;
        }
        .c{
          background: url('../assets/img/img@3X/lion@3X.jpg') no-repeat;
          height: 50px;
          width: 80px;
        }
        .cd{
          background: url('../assets/img/img@3X/christmasdecorate@3X.png') no-repeat;
          height: 22px;
          width: 67px;
        }
        .ct1{
          background: url('../assets/img/img@3X/christmastree1@3X.png') no-repeat;
          height: 38px;
          width: 33px;
        }
        .ct2{
          background: url('../assets/img/img@3X/christmastree2@3X.png') no-repeat;
          height: 25px;
          width: 17px;
        }
      }
    }
  }
</style>
