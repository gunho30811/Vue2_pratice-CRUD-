<template>
  <div id="app">
    <MyTask v-bind:tasks="tasks"></MyTask>
  </div>
</template>
<script>
import MyTask from "./components/MyTask";

export default {
  name: "App",
  components: {
    MyTask,
  },
  data() {
    return {
      tasks: [
      ],
    };
  },
};
</script>

