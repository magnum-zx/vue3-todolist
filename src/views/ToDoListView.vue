<!--
 * @Author:
  components: { TodoItem }, magnum_zx
 * @Date: 2023-05-24 19:37:48
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-25 21:32:00
 * @FilePath: /vue3-todolist/src/views/TodolistView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <!-- <div class="text-5xl">
        todo-list
    </div> -->
    <div class="hero w-screen p-0 m-0 min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
            <TodoItemCreate class="" @submit="submit" />
            <div class="block">
                <ul class="list-outside">
                    <li v-for="item in itemList" :key="item.id">
                        <TodoItem :list-item="item" @close="close" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import TodoItem from "../components/TodoItem.vue";
import TodoItemCreate from '../components/TodoItemCreate.vue';
// import { reactive, toRefs } from 'vue'
import { useToDoStore } from '../stores/todolist.js';
import { storeToRefs } from "pinia";

const store = useToDoStore()

const { todolist: itemList } = storeToRefs(store)
const { addToDoItem } = store
console.log(itemList);
function close(id) {
    // itemList.splice(item.id, 1)
    console.log(`close ${id}`)

    itemList.value = itemList.value.filter((item) => {
        if (item.id !== id) {
            return true
        }
    })
}
function submit(data) {
    console.log(`add ${data}`);
    console.log(itemList.value);
    addToDoItem(data)
}



</script>