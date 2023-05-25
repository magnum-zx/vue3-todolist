<!--
 * @Author: magnum_zx
 * @Date: 2023-05-23 13:13:15
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-25 20:00:07
 * @FilePath: /vue3-todolist/src/views/HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <NavBar class="fixed top-0 left-0 right-0"/>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>
