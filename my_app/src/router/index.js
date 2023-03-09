import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/components/TodoList.vue'
import PaginatedTodoList from '@/components/PaginatedTodoList.vue'
import { createApp } from 'vue'
import App from './App.vue'

const app =createApp(App);
app.use(router).mount('#app');
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/paginated-todo-list',
    name: 'PaginatedTodoList',
    component: PaginatedTodoList
  }
]

const myRouter = new VueRouter({
  routes
})

export default myRouter;