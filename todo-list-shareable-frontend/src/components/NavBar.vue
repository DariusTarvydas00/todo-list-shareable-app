<template>
  <nav class="square colour">
    <div>
      <h1 class="title"> TODO Sharable</h1>
      <a class="btn" v-if="!userLoggedIn" href="/login">Login</a>
      <a class="btn" v-else-if="userLoggedIn" @click="logout">Logout</a>
      <a class="btn" href="/register">Register</a>
      <a class="btn" href="/about">about</a>
      <a class="btn" href="/">home</a>
      <a class="btn" href="/lists">Lists</a>
    </div>
  </nav>
</template>

<script lang="ts">


import store from "@/store";

export default {
  data() {
    return {
      userLoggedIn: (localStorage.getItem('token')) != null
    };
  },
  methods:{
    logout(){
      localStorage.clear()
      window.location.reload()
    }
  }
}

</script>

<style scoped>
</style>