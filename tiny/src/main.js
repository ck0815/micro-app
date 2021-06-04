import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from "vue-router";
import routes from './router'

// 启动微服务
import startQiankun from "./micro";

Vue.use(ElementUI)
Vue.use(VueRouter)


// 启动qiankun
startQiankun();

Vue.config.productionTip = false;

// 解决多次跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
const router = new VueRouter({
  mode: "history",
  routes,
});

// 初始化实例
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#main-app')