<!--
 * @Author: magnum_zx
 * @Date: 2023-05-25 13:37:46
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-25 21:08:07
 * @FilePath: /vue3-todolist/src/components/TodoItemCreate.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div>
        <input v-model="input_data" placeholder="add your todo item" class="input input-bordered w-full max-w-xs"
            @keyup.enter="onSubmit(input_data)" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
const input_data = ref(null)
const emit = defineEmits(['submit'])

const onSubmit = (data) => {
    if (input_data.value !== null) {
        emit('submit', data)
        input_data.value = null
    }
}

</script>

<style lang="scss" scoped></style>