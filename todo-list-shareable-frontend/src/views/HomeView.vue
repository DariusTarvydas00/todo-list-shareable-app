<template>
  <div class="about">
    <button @click="getTasks">Get all tasks</button>
  </div>

  <div>
    <input type="text" id="title" v-model="task.title" name="title" placeholder="title" />
    <input type="text" id="description" v-model="task.description" name="description" placeholder="description">
    <input type="text" id="status" v-model="task.status" name="status" placeholder="status" />
    <button @click="createTask">Create task</button>
  </div>

  <div class="container" v-if="tasks != null">
    <h3>All tasks</h3>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <td>{{task.title}} {{task.description}} {{task.status}}
          <button @click="deleteTask(task.id)">Delete</button>
        </td>
        <td>
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <select @change="onChange($event,task.id)" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="OPEN">Open</option>
                <option value="IN_PROGRESS">In progress</option>
                <option value="DONE" >Done</option>
              </select>
            </div>
          </div>
        </td>
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
      },
      status: ''
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
         await axios.get( "http://161.97.99.214:3000/tasks/").then(response => {
           this.tasks = response.data
         })
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
    async onChange(event: any, id:string) {
      this.status = event.target.value
      try {
        await axios.patch( "http://161.97.99.214:3000/tasks/"+id+"/status",{
          status: this.status
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