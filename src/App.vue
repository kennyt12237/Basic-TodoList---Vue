<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>
    <input v-model="textItem" placeholder="Edit Me"/>
    <button v-on:click="addItem(textItem)">
      Add Item
    </button>
  </p>
  <TodoList :todoItems="todos"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  },
   data() {
    return {
      todos: this.$store.getters.getItems,
      textItem: ""
    }
   },
  methods: {
    addItem(message) {
      if (message) {
        this.$store.commit('addItems', {
          name: message,
          completed: false
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
