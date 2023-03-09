<template>
    <v-container>
      <v-card class="mt-4">
        <!-- title -->
        <v-card-title class="text-center"> To Do List </v-card-title>
  
        <!-- form -->
        <v-card-text>
          <v-form>
            <v-row text-align="center">
              <v-col cols="9" md="10">
                <v-text-field
                  placeholder="New Task"
                  v-model="newTask"
                  append-icon="mdi-plus"
                  @keyup.enter="addTask"
                  outlined
                />
              </v-col>
              <v-col cols="3" md="2">
                <v-btn
                  color="secondary"
                  @click="addTask"
                >하이</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
  
        <!-- task lists -->
        <v-list class="mb-4">
          <v-list-item-group>
            <task-item
              v-bind:task="task"
              v-for="(task, index) in tasksCopy"
              :key="task.id"
              @remove="removeTask(index)"
              @complete="completeTask(task)"
            ></task-item>
          </v-list-item-group>
        </v-list>
  
        <!-- buttons -->
        <v-card-actions>
          <v-btn
            class="mr-2"
            color="error"
            @click="clearCompleted"
          >Clear completed</v-btn>
          <v-btn
            color="primary"
            @click="clearAll"
          >Clear all</v-btn>
        </v-card-actions>
  
        <!-- pending task -->
        <v-card-text class="text-center">
          <span>Pending Tasks: {{ incomplete }}</span>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import TaskItem from "./Task-item";
  
  export default {
    name: "TaskG",
    props: ['tasks'],
    components: {
      TaskItem,
    },
    data() {
      return {
        newTask: "",
        tasksCopy: [...this.tasks],
      };
    },
    computed: {
      incomplete() {
        return this.tasksCopy.filter(this.inProgress).length;
      },
    },
    methods: {
      addTask() {
        if (this.newTask) {
          this.tasksCopy.push({
            title: this.newTask,
            completed: false,
          });
          this.newTask = "";
        }
      },
      inProgress(task) {
        return !this.isCompleted(task);
      },
      isCompleted(task) {
        return task.completed;
      },
      clearCompleted() {
        this.tasksCopy = this.tasksCopy.filter(this.inProgress);
      },
      clearAll() {
        this.tasksCopy = [];
      },
      completeTask(task) {
        let index = this.tasksCopy.findIndex(item => item.id === task.id);
        this.$set(this.tasksCopy, index, { ...task });
      },
      removeTask(index) {
        this.tasksCopy.splice(index, 1);
      },
    },
  };
  </script>
  