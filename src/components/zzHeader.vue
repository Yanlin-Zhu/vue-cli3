<template>
  <div class="zz-header">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'ZzHeader',
  props: {
    msg: {
      type: String,
      default: 'aaa'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// TODO 使用自己配置的别名会报错@style
// scss文件引入别名时前面应加~
// Webpack 会将以 ~ 符号作为前缀的路径视作依赖模块而去解析，这样 @ 的 alias 配置就能生效了。
  @import "~@/style/base";

  @include b(header){
    height: 50px;
    background-color: rgb(204, 201, 201);
  }
</style>
