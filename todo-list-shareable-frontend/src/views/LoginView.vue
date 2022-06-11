<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>
      <form @submit.prevent="login" class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" v-model="form.email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" v-model="form.password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="text-sm">
            <a href="/register" class="font-medium text-indigo-600 hover:text-indigo-500"> Don't have account? </a>
          </div>
        </div>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      form:{
        email: "",
        password: "",
      }
    };
  },
  methods: {
    login () {
      console.log('asdf', this.form)
    }
    //async register() {
    //   //console.log(username,password)
    //   const { email, password } = this;
    //   try {
    //     const res = await fetch(this.hostname + "/auth/signup",
    //         {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json "
    //           },
    //           body: JSON.stringify({
    //             email,
    //             password,
    //           })
    //         }
    //     );
    //     const data = await res.json();
    //     console.log(data);
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  }
};
</script>