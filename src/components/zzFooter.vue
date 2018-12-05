<template>
  <div class="zz-footer">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'ZzFooter',
  props: {
    msg: {
      type: String,
      default: 'bbb'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "~@/style/base";

  @include b(footer){
    height: 50px;
    background-color: rgb(132, 216, 146);
  }
</style>
