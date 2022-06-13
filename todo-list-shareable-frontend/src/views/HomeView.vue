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
  <div class="container">
    <div class="row justify-content-center">
      <div
          class="col-12 col-md-5 card m-2 border-5 p-2 border-secondary bg-dark text-light"
      >
        <div class="card-header border-secondary mb-1">Character List</div>
        <div class="card-body" v-if="charList.length <= 0">
          <h5 class="text-warning">You don't have any character.</h5>
        </div>
        <nav>
          <div class="nav nav-tabs border-bottom-0" id="nav-tab" ref="myTab">
            <button
                v-for="(char, index) in charList"
                :key="char.charName"
                class="nav-link bg-dark text-light"
                id="nav-home-tab"
                data-bs-toggle="tab"
                :data-bs-target="'#tab' + index"
                type="button"
                role="tab"
            >
              {{ char.charName }}
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
              v-for="(char, index) in charList"
              :key="char.charName"
              class="tab-pane fade show"
              :id="'tab' + index"
          >
            <div class="accordion" id="accordionExample">
              <div class="accordion-item border-secondary">
                <h2 class="accordion-header" id="headingOne">
                  <button
                      class="accordion-button bg-dark text-light border-secondary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                  >
                    Daily Tasks
                  </button>
                </h2>
                <div
                    id="collapseOne"
                    class="accordion-collapse collapse show bg-dark text-light"
                    data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="list-group">
                      <button
                          type="button"
                          class="list-group-item list-group-item-action bg-dark text-light border-secondary"
                          v-for="(task, index) in char.dailyTasks"
                          :key="task"
                          @click="
                          task.isDone = !task.isDone;
                          updateCharTasks(char, index);
                        "
                      >
                        <span
                            class="badge bg-primary text-dark"
                            :class="{ 'bg-warning': !task.isDone }"
                        >{{ index + 1 }}
                        </span>
                        {{ task.task }}
                        <input
                            class="form-check-input float-end"
                            type="checkbox"
                            value=""
                            disabled
                            :checked="task.isDone"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item border-secondary">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                      class="accordion-button collapsed bg-dark text-light border-secondary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                  >
                    Weekly Tasks
                  </button>
                </h2>
                <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                  <div
                      class="accordion-body bg-dark text-light border-secondary"
                  >
                    <div class="list-group">
                      <button
                          type="button"
                          class="list-group-item list-group-item-action bg-dark text-light border-secondary"
                          v-for="(task, index) in char.weeklyTasks"
                          :key="task"
                          @click="
                          task.isDone = !task.isDone;
                          updateCharTasks(char, index);
                        "
                      >
                        <span
                            class="badge bg-primary text-dark"
                            :class="{ 'bg-warning': !task.isDone }"
                        >{{ index + 1 }}
                        </span>
                        {{ task.task }}
                        <input
                            class="form-check-input float-end"
                            type="checkbox"
                            value=""
                            disabled
                            :checked="task.isDone"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
                class="btn btn-outline-danger w-100 mt-5"
                @click="deleteChar(char)"
            >
              DELETE CHARACTER
            </button>
          </div>
        </div>
      </div>

      <div
          class="col-12 col-md-5 card m-2 border-5 border-secondary bg-dark text-light p-2"
      >
        <div class="card-header border-secondary">Account-Wide Tasks</div>
        <div class="card-body" v-if="getAccWideTasks.length <= 0">
          <h5 class="text-warning">You don't have any account-wide task.</h5>
        </div>
        <div class="list-group" v-else>
          <button
              type="button"
              class="list-group-item list-group-item-action bg-dark text-light border-secondary"
              v-for="(task, index) in getAccWideTasks"
              :key="task"
              @click="
              task.isDone = !task.isDone;
              updateAccWideTasks(task, index);
            "
          >
            <span
                class="badge bg-primary"
                :class="{ 'bg-warning': !task.isDone }"
            >{{ index + 1 }}</span
            >
            {{ task.task }}
            <input
                class="form-check-input float-end"
                type="checkbox"
                value=""
                disabled
                :checked="task.isDone"
            />
          </button>
        </div>
      </div>
    </div>
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