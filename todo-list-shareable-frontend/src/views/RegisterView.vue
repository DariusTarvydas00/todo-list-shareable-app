<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register new account</h2>
      </div>
      <form @submit.prevent="register" class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <input id="email-address" v-model="username" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <input id="password" name="password" v-model="password" type="password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Password" />
          </div>
          <div>
            <input id="password2" name="password2" type="password" v-model="password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Repeat Password" />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="text-sm">
            <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500"> Already have account? </a>
          </div>
        </div>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import authService from "@/auth/services/auth-service";

export default {
  data() {
    return {
        username: '',
        password: '',
    };
  },
  methods: {
    async register() {
      await authService.register(this.$data).then(() => {
        this.$router.push('/login')
      }).catch((error) => {
        if (error.response) {
          console.log(error)
          this.$router.push('/register')
        }
      });
    },
    created() {
      this.$emit('ready')
    }
  }
}
</script>