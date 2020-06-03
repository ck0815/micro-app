// 一个进度条插件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 提示
import {
  Message
} from 'element-ui'

// 子应用注册信息
import apps from './apps'

import {
  start,
  registerMicroApps,
  addGlobalUncaughtErrorHandler
} from "qiankun"

/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 加载前
  beforeLoad: app => {
    // 加载子应用前，加载进度条
    NProgress.start()

    console.log("加载前", app);
  },
  // 挂载前回调
  beforeMount: app => {
    console.log("挂载前回调", app);
  },
  // 挂载后回调
  afterUnmount: app => {
    // 加载子应用前，进度条加载完成
    NProgress.done()
    // 
    console.log("挂载后回调", app);
  }
  // 卸载后回调
})

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler(event => {
  // 加载失败时提示
  console.log(event, '添加全局的未捕获异常处理器')
  const msg = event;
  if (msg.message && msg.message.includes('died in status LOADING_SOURCE_CODE')) {
    Message.error('子应用加载失败，请检查应用是否可运行')
  }
})

// 设置默认子应用,与 genActiveRule中的参数保持一致
// setDefaultMountApp("/vue");
// 启动
// start();

// 导出 qiankun 的启动函数
export default start