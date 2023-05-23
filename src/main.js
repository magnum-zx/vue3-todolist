/*
 * @Author: magnum_zx
 * @Date: 2023-05-23 13:13:15
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-23 13:19:11
 * @FilePath: /vue3-todolist/src/main.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import './assets/main.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
