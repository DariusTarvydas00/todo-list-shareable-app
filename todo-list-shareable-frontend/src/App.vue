<template>
  <NavBar></NavBar>
  <RouterView />
</template>

<script lang="ts">

export default {
  data() {
    return {
      userLoggedIn: (sessionStorage.getItem('token')) != null
    };
  },
  methods:{
    logout(){
      localStorage.clear()
      sessionStorage.clear()
      window.location.reload()
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 500;
  background-color: rgb(229 231 235);}

nav {
  padding: 30px;
  a {
    color: #ffffff;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>
