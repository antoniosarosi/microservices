<template>
  <div id="app">
    <div>
     <label>Todo</label>
     <input type="text" v-model="todo.todo">
     <label>Completed</label>
     <input type="checkbox" v-model="todo.completed">
     <button type="submit"  @click.prevent="addTodo()">Submit</button>
    </div>
    <div>
      <button @click.prevent="getTodos()">Get Todos</button>
    </div>
    <div>
      <p v-for="(todo, i) in todos" :key="i">
        {{ todo.todo }}, Completed: {{ todo.completed }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  created() {
    this.getTodos();
  },

  data() {
    return {
      todo: {
        todo: '',
        completed: false,
      },
      todos: [],
    }
  },

  methods: {
    async addTodo() {
      try {
        const res = await axios.post('http://localhost:5000/todos', this.todo);
        console.log(res.data);
      } catch (e) {
        console.log(e.response.data);
      }
    },

    async getTodos() {
      try {
        const res = await axios.get('http://localhost:5000/todos');
        this.todos = res.data;
        console.log(res.data);
      } catch (e) {
        console.log(e.response.data);
      }
    }
  }
}
</script>

