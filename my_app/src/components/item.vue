<template>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title :class="{ 'completed': task.completed }">
          <v-icon small class="mr-2" @click="$emit('complete')">
            {{ task.completed ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
          </v-icon>
          {{ task.title }}
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon small color="red" @click="$emit('remove')">
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </template>
  
  <script>
  export default {
    name: 'TaskItem',
    props: ['task']
  }
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>