<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/myApp">myApp</router-link>
  </nav>

  <button class="navigasi" @click="redirect">Redirect</button>
  <button class="navigasi" @click="back">Go back</button>
  <button class="navigasi" @click="forward">Go Forward</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name : 'home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  font-size: x-large;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.navigasi{
  margin : 0 10px;
  padding: 10px;
  border: solid;
  border-radius: 4px;
}
</style>