<template>
  <div id="app">
    <MyTask v-bind:tasks="tasks"></MyTask>
    <nav>
    <router-link to="/">home</router-link>
    <router-link to="/about">About</router-link>
    <router-view/>
  </nav>
  </div>
</template>
<script>
import MyTask from "./components/MyTask";
import router from "./router";

export default {
  name: "App",
  components: {
    MyTask,
    router
},
  data() {
    return {
      tasks: [
      ],
    };
  },
};
</script>

