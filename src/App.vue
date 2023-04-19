<script setup>
import { ref, computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Merapikan tempat tidur', done: false },
  { id: id++, text: 'Mandi', done: false },
  { id: id++, text: 'Gosok gigi', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

const allTodos = computed(() => {
  return todos.value
})

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <div class="text-center">
      <h1 class="text-3xl font-bold pb-4">List Kegiatan</h1>
    </div>
    <div class="tambah">
      <form @submit.prevent="addTodo">
        <input class="shadow-lg rounded-md border pl-2 pr-2" v-model="newTodo">
        <br>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded px-3 mt-5 text-xl">Add New</button>
      </form>
    </div>
    <ul>
      <div class="con">
        <li v-for="todo in filteredTodos" :key="todo.id" class="text-2xl">
          <span :class="{ done: todo.done }" >{{ todo.text }}</span>
          <input type="checkbox" v-model="todo.done" class="cb"> <button @click="removeTodo(todo)" class="float-right" ><i class="fa-solid fa-trash"></i></button>
        </li>
      </div>
      <br>
      <br>
    </ul>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show All' : ' not Finished Task' }}
    </button>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
.tambah{
  padding: 30px;
  text-align: center;
  font-size: x-large;
}

.cb{
  float: right;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
