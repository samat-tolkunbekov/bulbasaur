<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/pomodoro">Pomodoro</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
  background-color: #0d1117;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c9d1d9;
  width: 70%;
  margin: auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #c9d1d9;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
