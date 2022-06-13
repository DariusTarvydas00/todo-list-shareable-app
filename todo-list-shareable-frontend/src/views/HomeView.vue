<template>
  <div class="about">
    <button @click="getTasks">Button</button>
  </div>

  <div>
    <input type="text" id="title" v-model="task.title" name="title" placeholder="title" />
    <input type="text" id="description" v-model="task.description" name="description" placeholder="description">
    <input type="text" id="status" v-model="task.status" name="status" placeholder="status" />
    <button @click="createTask">Create</button>
  </div>

  <div class="container" v-if="tasks != null">
    <h3 class="p-3 text-center">Vue.js - Display a list of items with v-for</h3>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <td>{{task.title}} {{task.description}} {{task.status}}<button @click="deleteTask(task.id)">Delete</button> <button @click="updateTaskStatus(task.id)">Update</button></td>
      </tr>
      </tbody>
    </table>
  </div>

</template>
<script lang="ts">
import axios from "axios";
import {TaskModel} from "@/auth/model/task-model";
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
        status: ''
      }
    }
  },
  name: "ASD ASD",
  created() {
    try {
      this.getTasks()
    } catch (e) {
      console.log(e)
    }
  }
    ,
  methods:{
     async getTasks() {
       try {
         await axios.get( "http://161.97.99.214:3000/tasks/").then(response => {this.tasks = response.data})
       } catch (e) {
         console.log(e)
       }
     },
    async createTask(task: TaskModel){
      try {
        await axios.post( "http://161.97.99.214:3000/tasks/",{
          title: this.task.title,
          description: this.task.description
        })
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
    async updateTaskStatus(id: string){
      try {
        await axios.patch( "http://161.97.99.214:3000/tasks/"+id+"/status",{
          status: 'IN_PROGRESS'
        })
        await this.getTasks()
      } catch (e) {
        console.log(e)
      }
    }
  }
})
</script>
<style>
</style>