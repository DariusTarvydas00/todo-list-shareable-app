<template>
  <div class="flex flex-wrap -mx-3 mb-6 mt-3">
    <div class="w-full ml-6 md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Title
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-t-2 border-t-blue-900" type="text" id="title" v-model="task.title" name="title" placeholder="">
    </div>
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Description
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-t-2 border-t-blue-900" type="text" id="description" v-model="task.description" name="description" placeholder="">
    </div>
    <div class="bg-gray-100 w-full md:w-1/6 h-2/3 ml-6 mt-7 text-gray-700 hover:text-white border border-blue-900 hover:bg-blue-800 appearance-none block w-full border rounded leading-tight focus:outline-none focus:bg-white text-sm px-5 py-2.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
      <button @click="createTask">Create task</button>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-2/3 px-3 ml-6">
      <input class="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-200 border-t-2 border-t-blue-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" id="search" name="search" placeholder="search">
    </div>
    <div class="bg-gray-100 w-full md:w-1/6 h-2/3  ml-6 mt-1 text-gray-700 hover:text-white border border-blue-900 hover:bg-blue-800 appearance-none block w-full border rounded leading-tight focus:outline-none focus:bg-white text-sm px-5 py-2.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
      <button @click="search">Search task</button>
    </div>
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-3 border-t-2 border-blue-900 bg-gray-50">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3 w-2/5">
          Title
        </th>
        <th scope="col" class="px-6 py-3 w-2/5">
          Description
        </th>
        <th scope="col" class="px-6 py-3 w-1/5">
          Status
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(task, index) in tasks" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap">
          {{task.title}}
        </th>
        <th scope="row" class="px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap">
          {{task.description}}
        </th>
        <th scope="row" class="px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap">
          <select @change="onChange($event,task.id)" v-model="task.status" class="form-select appearance-none block w-50 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In progress</option>
            <option value="DONE" >Done</option>
          </select>
        </th>
        <td class="px-6 py-4 text-right">
          <a @click="deleteTask(task.id)" class=" text-gray-900 dark:text-gray-900 hover:underline">Delete</a>
        </td>
        <td class="px-6 py-4 text-right">
          <a href="#" class=" text-gray-900 dark:text-gray-900 hover:underline">Edit</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      tasks: [{
        title: '',
        description: '',
        status: ''
      }],
      task: {
        title: '',
        description: '',
      },
      status: ''
    }
  },
  methods:{
     async getTasks() {
       try {
         await axios.get( "http://161.97.99.214:3000/tasks/").then(response => {
           this.tasks = response.data
         })
       } catch (e) {
         console.log(e)
       }
     },
    async createTask(){
      try {
        await axios.post( "http://161.97.99.214:3000/tasks/",{
            title: this.task.title,
            description: this.task.description
        },)
        await this.getTasks()
      } catch (e) {
        console.log(e)
      }
    },
    async deleteTask(id: string){
       console.log(id)
      try {
        await axios.delete( "http://161.97.99.214:3000/tasks/"+id)
        await this.getTasks()
      } catch (e) {
        console.log(e)
      }
    },
    async onChange(event: any, id:string) {
      this.status = event.target.value
      try {
        await axios.patch( "http://161.97.99.214:3000/tasks/"+id+"/status",{
          status: this.status
        },)
        await this.getTasks()
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