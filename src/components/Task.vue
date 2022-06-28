<template>
  <!-- <div> -->
  <div class="wrapper container">
    <!-- title -->
    <header id="myHeader" class="header">
      <h2 class="myfont">Manage <br>
        <span class="font-italic">
          Your daily day
        </span>
        <h4 class="my-2 myfont">with simply app To Do</h4>
      </h2> <br>
      <input type="text" id="myInput" placeholder="What I'm gonna do?" @keyup.enter="addTask" v-model="newTask">
      <i onclick="addTask" class="add" @click="addTask">Add</i>
    </header>
    <div class="task-items">
      <ul>
        <task-item v-bind:task="task" v-for="(task, index) in tasks" :key="task.id" @remove="removeTask(index)"
          @complete="completeTask(task)">
        </task-item>
      </ul>
    </div>
    <!-- buttons -->
    <div class="clearBtns">
      <button @click="clearCompleted">Clear completed</button>
      <button @click="clearAll">Clear all</button>
    </div>
  </div>
</template>

<script>
import '../assets/css/styles.css'
import TaskItem from "./Task-item";

export default {
  name: "Task",
  props: ['tasks'],
  components: {
    TaskItem,
  },
  data() {
    return {
      newTask: "",
    };
  },

  methods: {
    addTask() {

    },
    inProgress(task) {
      return !this.isCompleted(task);
    },
    isCompleted(task) {
      return task.completed;
    },
    clearCompleted() {
      this.tasks = this.tasks.filter(this.inProgress);
    },
    clearAll() {
      this.tasks = [];
    },
    completeTask(task) {
      task.completed = !task.completed;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};

</script>

<style>
.clearBtns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.clearBtns button {
  padding: 5px;
}
</style>
