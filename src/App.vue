<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
@import "./assets/main";
@import url("https://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto", sans-serif;
  cursor: pointer;
}
a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
</style>
