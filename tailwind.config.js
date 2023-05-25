/*
 * @Author: magnum_zx
 * @Date: 2023-05-25 16:39:31
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-25 19:15:42
 * @FilePath: /vue3-todolist/tailwind.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

