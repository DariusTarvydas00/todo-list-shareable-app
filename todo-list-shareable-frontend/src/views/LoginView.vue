<template>
  <div class="col-md-12">
    <div class="container">
      <h3 class="e-shop-font">Login Page</h3>
      <div class="card">
        <div class="card-body">
          <div class="form-group">
            <label for="email">Email:</label>
            <input id="email" v-model="user.email" ref="email" type="email" class="form-control" placeholder="Enter email" name="email" />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input id="pwd" v-model="user.password" ref="psw" type="password" class="form-control" placeholder="Enter password" name="pwd" />
          </div>
          <div class="clearfix">
            <button type="button" class="signin" v-on:click="login">Sign in</button>
            <button type="button" class="signup error" v-on:click="signup">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-blue-200 flex">
    <div class="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
      <h1 class="font-bold text-2xl my-10 text-white"> Login </h1>
      <form action="" class="mt-2 flex flex-col lg:w-1/2 w-8/12">
        <div class="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
          <div class="flex -mr-px justify-center w-15 p-4">
              <span
                  class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
              >
                <i class="fas fa-user-circle"></i>
              </span>
          </div>
          <input class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                 id="email" v-model="user.email" ref="email" type="email" placeholder="Enter email" name="email"
          />
        </div>
        <div class="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
          <div class="flex -mr-px justify-center w-15 p-4">
              <span class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                <i class="fas fa-lock"></i>
              </span>
          </div>
          <input class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                 id="pwd" v-model="user.password" ref="psw" type="password" placeholder="Password" name="pwd"
          />
          <div class="flex -mr-px">
              <span
                  class="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
              >
                <i class="fas fa-eye-slash"></i>
                </span>
          </div>
        </div>
        <a href="#" class="text-base text-white text-right font-roboto leading-normal hover:underline mb-6">Forget Password ?</a>
        <a href="/" class="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20">
          Login
        </a>
      </form>
    </div>
  </div>


</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import '../assets/tailwind.css';
export default {
  data(){
    return{
      user:{
        username:"",
        password:""
      }
    }
  },
  methods:{
    signup(){
      this.$router.push({ name: 'Register' });
    },
    login(){
      if(this.checkValidation()){
        axios.post(this.hostname + "/api/auth/Login",{
          username: this.user.email,
          password: this.user.password,
        })
            .then(response => {
              if(response.status){
                localStorage.setItem('token', JSON.stringify(response.data.token));
                response.data.token = "";
                localStorage.setItem('user', JSON.stringify(response.data));
                this.$router.push({name:"Home"});
              }
            })
            .catch(error => {
              if (error.response) {
                Swal.fire(error.response.data);
              }
            });
      }
    },
    checkValidation(){
      if(!this.user.email){
        this.$refs.email.focus();
        Swal.fire("Give email !");
        return;
      }
      if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(this.user.email)){
        this.$refs.email.focus();
        Swal.fire("Invalid email !");
        return;
      }
      if(!this.user.password){
        this.$refs.password.focus();
        Swal.fire("Give password");
        return;
      }
      return true;
    }
  }
}
</script>

<style scoped>
.container{
  max-width: 360px;
}
button:hover {
  opacity:1;
}
.signin, .signup {
  float: left;
  width: 50%;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>