/*
 * @Author: magnum_zx
 * @Date: 2023-05-23 13:19:24
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-23 14:40:36
 * @FilePath: /vue3-todolist/uno.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { defineConfig} from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  // ...UnoCSS options
  shortcuts: [
    { logo: 'i-logos-vue w-6em h-6em transform transition-800' },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
})