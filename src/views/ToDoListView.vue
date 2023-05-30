<!--
 * @Author:
  components: { TodoItem }, magnum_zx
 * @Date: 2023-05-24 19:37:48
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-30 20:43:41
 * @FilePath: /vue3-todolist/src/views/TodolistView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <!-- <div class="text-5xl">
        todo-list
    </div> -->
    <div class="min-h-screen bg-base-200">
        <TodoItemCreate class="mt-16 p-32 pt-16 pb-10" @submit="submit" />
        <div class="flex justify-center">
            <ul class="list-outside w-52">
                <li v-for="item in itemList" :key="item.id">
                    <TodoItem :list-item="item" @close="close" />
                </li>
            </ul>
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