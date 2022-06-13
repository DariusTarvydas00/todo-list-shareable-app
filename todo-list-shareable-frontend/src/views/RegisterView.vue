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
            <input id="confirmPassword" name="confirmPassword" type="password" v-model="confirmPassword" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Repeat Password" />
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
        confirmPassword: ''
    };
  },
  methods: {
    async register() {
      if (this.confirmPassword === this.password){
        await authService.register(this.$data).then(() => {
          this.$router.push('/login')
        }).catch((error) => {
          if (error.response) {
            console.log(error)
          }
        });
      }
    }
  }
}
</script>

<!--<template>-->
<!--  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">-->
<!--    <div class="max-w-md w-full space-y-8">-->
<!--      <div>-->
<!--        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register new account</h2>-->
<!--      </div>-->
<!--      <form @submit.prevent="register" class="mt-8 space-y-6" action="#" method="POST">-->
<!--        <input type="hidden" name="remember" value="true" />-->
<!--        <div class="rounded-md shadow-sm -space-y-px">-->
<!--          <div>-->
<!--&lt;!&ndash;            <input id="email-address" v-model="username" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />&ndash;&gt;-->
<!--          </div>-->
<!--          <div>-->
<!--&lt;!&ndash;            <input id="password" name="password" v-model="password" type="password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Password" />&ndash;&gt;-->
<!--          </div>-->
<!--          <div class="form-group">-->
<!--&lt;!&ndash;            <input type="password" class="form-control"  placeholder="Confirm Password" v-model="confirmPassword" autocomplete="off" />&ndash;&gt;-->
<!--&lt;!&ndash;            <div v-if="v.validate.user.confirmPassword.$error" class="invalid-feedback left">&ndash;&gt;-->
<!--&lt;!&ndash;              <span v-if="confirmPassword.required">Confirm Password is required</span>&ndash;&gt;-->
<!--&lt;!&ndash;              <span v-if="confirmPassword && !confirmPassword.sameAsPassword">Password and Confirm Password should match</span>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--          </div>-->
<!--          <div>-->
<!--&lt;!&ndash;            <input id="confirmPassword" name="confirmPassword" type="password" v-model="confirmPassword" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Repeat Password" />&ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="flex items-center justify-between">-->
<!--          <div class="text-sm">-->
<!--            <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500"> Already have account? </a>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div>-->
<!--          <button type="submit" :disabled="isDisabled" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-->
<!--            Sign up-->
<!--          </button>-->
<!--        </div>-->
<!--      </form>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div>-->
<!--&lt;!&ndash;    <div>&ndash;&gt;-->
<!--&lt;!&ndash;      <form @submit.prevent="submitRegistration" novalidate>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="form-group">&ndash;&gt;-->
<!--&lt;!&ndash;          <input type="text" class="form-control" placeholder="Enter your company email ID" v-model="username" autocomplete="off"/>&ndash;&gt;-->
<!--&lt;!&ndash;          <div v-if="this.submitted && $v.user.email.$error" class="invalid-feedback left">&ndash;&gt;-->
<!--&lt;!&ndash;            <span v-if="!$v.user.email.required">Email is required</span>&ndash;&gt;-->
<!--&lt;!&ndash;            <span v-if="user.email && !$v.user.email.email">Enter valid email address</span>&ndash;&gt;-->
<!--&lt;!&ndash;            <span v-if="user.email && $v.user.email.email && !$v.user.email.maxLength">Email is allowed only 30 characters</span>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        <div class="form-group">-->
<!--          <input type="password" class="form-control" placeholder="Enter Password" v-model="user.password" autocomplete="off" />-->
<!--          <div v-if="this.submitted && $v.user.password.$error" class="invalid-feedback left">-->
<!--            <span v-if="!$v.user.password.required">Password is required</span>-->
<!--            <span v-if="user.password && !$v.user.password.minLength">Password must be minimum 6 characters</span>-->
<!--          </div>-->
<!--        </div>-->
<!--&lt;!&ndash;        <div class="form-group">&ndash;&gt;-->
<!--&lt;!&ndash;          <input type="password" class="form-control"  placeholder="Confirm Password" v-model="user.confirmPassword" autocomplete="off" />&ndash;&gt;-->
<!--&lt;!&ndash;          <div v-if="this.submitted && $v.user.confirmPassword.$error" class="invalid-feedback left">&ndash;&gt;-->
<!--&lt;!&ndash;            <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>&ndash;&gt;-->
<!--&lt;!&ndash;            <span v-if="user.confirmPassword && !$v.user.confirmPassword.sameAsPassword">Password and Confirm Password should match</span>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <input type="submit" class="btnRegister" value="Register" :disabled="this.isDisabled" />&ndash;&gt;-->
<!--&lt;!&ndash;      </form>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->



<!--  <div class="form-group">-->
<!--    <input-->
<!--        type="password"-->
<!--        class="form-control"-->
<!--        placeholder="Enter Password"-->
<!--        v-model="user.password"-->
<!--        autocomplete="off"-->
<!--    />-->
<!--    <div-->
<!--        class="invalid-feedback left"-->
<!--        v-for="(error, index) of v$.user.password.$errors"-->
<!--        :key="index"-->
<!--    >-->
<!--      {{ error.$message }}-->
<!--    </div>-->
<!--  </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import authService from "@/auth/services/auth-service";-->
<!--import useVuelidate from '@vuelidate/core'-->
<!--import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'-->

<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      user: {-->
<!--        username: '',-->
<!--        password: '',-->
<!--        confirmPassword: '',-->
<!--      },-->
<!--      submitted: false-->
<!--    };-->
<!--  },-->
<!--  setup: () => ({ v$: useVuelidate() }),-->
<!--  validations: {-->
<!--    user: {-->
<!--      username: { required, email },-->
<!--      password: { required, minLength: minLength(6) },-->
<!--      confirmPassword: { required, sameAsPassword: sameAs('password') }-->
<!--    }-->
<!--  },-->
<!--  // created () {-->
<!--  //   this.submitted = true-->
<!--  //   return this.$v.$touch()-->
<!--  // },-->
<!--  // computed: {-->
<!--  //   isDisabled () {-->
<!--  //     return this.$v.$invalid-->
<!--  //   }-->
<!--  // },-->
<!--  methods: {-->
<!--    submitRegistration () {-->
<!--      this.submitted = true-->
<!--      this.$v.$touch()-->
<!--      if (this.$v.$invalid) {-->
<!--        return false // stop here if form is invalid-->
<!--      } else {-->
<!--        alert('Form Valid')-->
<!--      }-->
<!--    },-->
<!--    async register() {-->
<!--      await authService.register(this.$data).then(() => {-->
<!--        this.$router.push('/login')-->
<!--      }).catch((error) => {-->
<!--        if (error.response) {-->
<!--          console.log(error)-->
<!--        }-->
<!--      });-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <div id="app">-->
<!--    <form @submit.prevent="submitRegistration" novalidate>-->
<!--      <div class="form-group">-->
<!--        <input-->
<!--            type="text"-->
<!--            class="form-control"-->
<!--            placeholder="First Name"-->
<!--            v-model="user.name"-->
<!--        />-->
<!--        <div-->
<!--            class="invalid-feedback left"-->
<!--            v-for="(error, index) of v$.user.name.$errors"-->
<!--            :key="index"-->
<!--        >-->
<!--          {{ error.$message }}-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="form-group">-->
<!--        <input-->
<!--            type="text"-->
<!--            class="form-control"-->
<!--            placeholder="Enter your company email ID"-->
<!--            v-model="user.email"-->
<!--            autocomplete="off"-->
<!--        />-->
<!--        <div-->
<!--            class="invalid-feedback left"-->
<!--            v-for="(error, index) of v$.user.email.$errors"-->
<!--            :key="index"-->
<!--        >-->
<!--          {{ error.$message }}-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="form-group">-->
<!--        <input-->
<!--            type="password"-->
<!--            class="form-control"-->
<!--            placeholder="Enter Password"-->
<!--            v-model="user.password"-->
<!--            autocomplete="off"-->
<!--        />-->
<!--        <div-->
<!--            class="invalid-feedback left"-->
<!--            v-for="(error, index) of v$.user.password.$errors"-->
<!--            :key="index"-->
<!--        >-->
<!--          {{ error.$message }}-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="form-group">-->
<!--        <input-->
<!--            type="password"-->
<!--            class="form-control"-->
<!--            placeholder="Confirm Password"-->
<!--            v-model="user.confirmPassword"-->
<!--            autocomplete="off"-->
<!--        />-->
<!--        <div-->
<!--            class="invalid-feedback left"-->
<!--            v-for="(error, index) of v$.user.confirmPassword.$errors"-->
<!--            :key="index"-->
<!--        >-->
<!--          {{ error.$message }}-->
<!--        </div>-->
<!--      </div>-->
<!--      <input-->
<!--          type="submit"-->
<!--          class="btnRegister"-->
<!--          value="Register"-->
<!--          :disabled="this.isDisabled"-->
<!--      />-->
<!--    </form>-->
<!--  </div>-->

<!--  <div>-->
<!--    <div>-->
<!--      <input type="password"-->
<!--             placeholder="Password"-->
<!--             v-model="password"-->
<!--             v-validate="'required|min:6|max:35|confirmed'"-->
<!--             ref="password"-->
<!--             name="password" />-->
<!--    </div>-->
<!--    <div>-->
<!--      <span>{{ errors.first('password') }}</span>-->
<!--    </div>-->
<!--    <div>-->
<!--      <input type="password"-->
<!--             placeholder="Confirm password"-->
<!--             v-model="confirmPassword"-->
<!--             v-validate="'required|confirmed:password'"-->
<!--             ref="confirmPassword"-->
<!--             name="confirm_password" />-->
<!--    </div>-->
<!--    <div>-->
<!--      <span>{{ errors.first('confirm_password') }}</span>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { required, email, minLength, sameAs } from "@vuelidate/validators";-->
<!--import { useVuelidate } from "@vuelidate/core";-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      user: {-->
<!--        name: "",-->
<!--        email: "",-->
<!--        password: "",-->
<!--        confirmPassword: "",-->
<!--      },-->
<!--      submitted: false,-->
<!--    };-->
<!--  },-->
<!--  setup: () => ({ v$: useVuelidate() }),-->
<!--  validations: {-->
<!--    user: {-->
<!--      name: { required },-->
<!--      email: { required, email },-->
<!--      password: { required, minLength: minLength(6) },-->
<!--      confirmPassword: { required, sameAsPassword: sameAs("password") },-->
<!--    },-->
<!--  },-->
<!--  // created() {-->
<!--  //   this.submitted = true;-->
<!--  //   return this.$v.$touch();-->
<!--  // },-->
<!--  // computed: {-->
<!--  //   isDisabled() {-->
<!--  //     return this.$v.$invalid;-->
<!--  //   },-->
<!--  // },-->
<!--  methods: {-->
<!--    submitRegistration() {-->
<!--      this.submitted = true;-->
<!--      this.$v.$touch();-->
<!--      if (this.$v.$invalid) {-->
<!--        return false; // stop here if form is invalid-->
<!--      } else {-->
<!--        alert("Form Valid");-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.invalid-feedback {-->
<!--  color: red;-->
<!--}-->
<!--.form-group {-->
<!--  margin: 10px;-->
<!--}-->
<!--</style>-->
