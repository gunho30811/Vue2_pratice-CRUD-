<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card>
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Todo List</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="clearCompleted">
                <v-icon>mdi-delete-variant</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                v-model="newTodo"
                label="New Todo"
                outlined
                @keyup.enter="addTodo"
              ></v-text-field>
              <v-btn color="primary" @click="addTodo">Add</v-btn>
              <v-list>
                <v-list-item-group>
                  <v-list-item
                    v-for="(todo, index) in todos"
                    :key="index"
                  >
                    <v-list-item-action>
                      <v-checkbox
                        v-model="todo.done"
                        @change="updateTodo(index)"
                        color="primary"
                      ></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title
                        :class="{ 'text-strike': todo.done }"
                      >{{ todo.text }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn
                        icon
                        @click="removeTodo(index)"
                        color="error"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { text: 'Learn Vue.js', done: false },
        { text: 'Learn Vuetify', done: false },
        { text: 'Build a Todo List', done: true }
      ]
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, done: false })
        this.newTodo = ''
      }
    },
    updateTodo(index) {
      this.todos[index].done = !this.todos[index].done
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.done)
    }
  }
}
</script>