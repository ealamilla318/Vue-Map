<template>
  <router-view/>
  <img src="../src/assets/logo.png" alt="vue" class="logo">
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vh;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logo{
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 120px;
}
</style>
