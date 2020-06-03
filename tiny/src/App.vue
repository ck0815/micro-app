<template>
  <div id="main-root">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            mode="horizonta"
            :default-active="navBar.active"
            :unique-opened="true"
            :router="true"
            class="menu-item"
            background-color="#141f2a"
            text-color="#fff"
          >
            <!-- 一级菜单 -->
            <div v-for="(item, index) in navBar.list" :key="index">
              <el-menu-item :index="item.path">
                <span slot="title">{{ item.name }}</span>
              </el-menu-item>
            </div>
            <!-- end -->
          </el-menu>
        </el-aside>
        <!-- 容器 -->
        <el-container>
          <!-- 在路由表配置的 name 字段进行判断，判断当前路由是否为主应用路由，最后决定渲染主应用组件或是微应用节点。 -->
          <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
          <router-view v-show="$route.name" />

          <!-- 子应用渲染区，用于挂载子应用节点 -->
          <el-main v-show="!$route.name" id="root-view">Main</el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navBar: {
        active: this.$route.fullPath || '/',
        // 头部导航数据 响应侧边栏
        list: [
          {
            key: 'Home',
            name: '主页',
            path: '/'
          },
          {
            key: 'vue1',
            name: 'Vue 第一个子应用',
            path: '/vue1'
          },
          {
            key: 'vue2',
            name: 'Vue 第二个子应用',
            path: '/vue2'
          },
          {
            key: 'vue3',
            name: 'Vue 第三个子应用',
            path: '/vue3'
          }
        ]
      }
    }
  },
  created() {
    // console.log('11')
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
#main-root,
body .el-container {
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
