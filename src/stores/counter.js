/*
 * @Author: magnum_zx
 * @Date: 2023-05-23 13:13:15
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-25 14:31:29
 * @FilePath: /vue3-todolist/vue3-todolist/src/stores/counter.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'


const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

const useToDoStore = defineStore('todolist', () => {
  const state = reactive({ todolist: [] })
  // const todo = ref('')

  function addToDoItem() {
    return (data) => {
      state.todolist = [
        ...state.todolist,
        {
          id: state.todolist.at(-1)?.id + 1 || 0,
          data: data
        }
      ]
    }

  }
  return {
    state,
    addToDoItem
  }
})

export {
  useCounterStore,
  useToDoStore
}
