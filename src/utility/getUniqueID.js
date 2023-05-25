/*
 * @Author: magnum_zx
 * @Date: 2023-05-25 16:16:03
 * @LastEditors: wuzx wzx19980321@163.com
 * @LastEditTime: 2023-05-25 16:17:54
 * @FilePath: /vue3-todolist/src/utility/getUniqueID.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
function getUniqueID() {
    // 当前时间转成 36 进制字符串
    var time = Date.now().toString(36)
    // 当前随机数转成 36 进制字符串
    var random = Math.random().toString(36)
    // 去除随机数的 0. 字符串
    random = random.substring(2, random.length)
    // 返回唯一ID
    return random + time
}

export default getUniqueID