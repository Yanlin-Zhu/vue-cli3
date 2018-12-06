<template>
  <div id="app">
    <zz-header/>
    <router-view/>
    <zz-footer/>
  </div>
</template>

<style lang="scss">
html, body{
  height: 100%;
  padding: 0;
  margin: 0;
  background: #F2F2F2;
}
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
}
</style>
