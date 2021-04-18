<script>
export default {
  name: "app",
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700&display=swap");
@import "./assets/scss/mobile.scss";

#app {
  font-family: "Mulish", sans-serif, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
  border: none;
  text-decoration: none;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}

body {
  background: url(https://user-images.githubusercontent.com/57585087/109042491-4f97ce00-76e1-11eb-82af-a9926eb08535.png)
    no-repeat;
  background-size: cover;
}
</style>
