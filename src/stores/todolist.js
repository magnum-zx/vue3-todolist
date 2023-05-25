/*
 * @Author: magnum_zx
 * @Date: 2023-05-23 13:13:15
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-25 16:18:17
 * @FilePath: /vue3-todolist/src/stores/todolist.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import getUniqueID from '../utility/getUniqueID'


export const useToDoStore = defineStore('todolist', () => {
    const todolist = ref([])
    // const todo = ref('')

    function addToDoItem(data) {
        todolist.value.unshift({
            id: getUniqueID(),
            data: data
        })
    }
    return {
        todolist,
        addToDoItem
    }
})
