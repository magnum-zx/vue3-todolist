/*
 * @Author: magnum_zx
 * @Date: 2023-05-23 13:13:15
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-23 14:36:50
 * @FilePath: /vue3-todolist/vite.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(),UnoCSS()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
