<template>
  <div class="mt-5 flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-2/3 px-3 ml-6">
      <input class="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-200 border-t-2 border-t-blue-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" id="search" name="search" placeholder="search">
    </div>
    <div class="bg-gray-100 w-full md:w-1/6 h-2/3  ml-6 mt-1 text-gray-700 hover:text-white border border-blue-900 hover:bg-blue-800 appearance-none block w-full border rounded leading-tight focus:outline-none focus:bg-white text-sm px-5 py-2.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
      <button @click="search">Search account</button>
    </div>
  </div>
  <div class="bg-gray-50 relative overflow-x-auto shadow-md sm:rounded-lg my-3 border-t-2 border-blue-900">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3 w-2/5">
          Email
        </th>
        <th scope="col" class="px-6 py-3 w-2/5">
          Description
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(accounts, index) in accounts" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap">
          {{accounts.username}}
        </th>
        <td class="px-6 py-4 text-right">
          <a href="#" class=" text-gray-900 dark:text-gray-900 hover:underline">Edit</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div>
    <button @click="getAccounts">Get Accounts</button>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      accounts: []
    }
  },
  methods:{
    async getAccounts() {
      try {
        await axios.get( "http://161.97.99.214:3000/accounts/").then(response => {
          this.accounts = response.data
        })
      } catch (e) {
        console.log(e)
      }
    },
    search(){
      //TODO create method that will set tasks for search result
    }
  }
})
</script>
<style>
</style>