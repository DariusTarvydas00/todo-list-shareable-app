<template>
  <div id="app">
    <form @submit.prevent="login">
      <div>
        <label for="username">username</label>
        <input name="username" v-model="username" placeholder="username">
      </div>
      <div>
        <label for="password">password</label>
        <input name="password" v-model="password" placeholder="password" type="password">
      </div>
      <div>
        <label for="password">password</label>
        <input name="password" v-model="password" placeholder="password" type="password">
      </div>
      <input type="submit" value="register">
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const { username, password } = this;
      axios.post({

      })
      const res = await fetch(this.hostname + "/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username,
              password,
            })
          }
      );
      const data = await res.json();
      console.log(data);
    }
  }
};
</script>