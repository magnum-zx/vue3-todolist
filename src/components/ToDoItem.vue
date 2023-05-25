<!--
 * @Author: magnum_zx
 * @Date: 2023-05-24 20:45:22
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-25 21:05:48
 * @FilePath: /vue3-todolist/src/components/TodoItem.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div>
        {{listItem.data}}
        <button class="btn btn-xs btn-circle" @click="emit('close', listItem.id)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
    </div>
</template>

<script setup>
// import { watch } from "vue"

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    listItem: Object
})


const emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>

</style>