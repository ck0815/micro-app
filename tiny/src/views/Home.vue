<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>主应用</p>
    <el-button type="success" plain @click="callChren">传参给子应用</el-button>
    <!--  -->
    <el-button type="success" plain @click="callChrenCon">传组件给子应用</el-button>

    <p>{{ data.msg }}</p>
    <!-- <p>{{ data.msgs }}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
import actions from '@/shared/actions'

// 引入模板a
import html from '@/components/a.vue'

export default {
  name: 'Home',
  data() {
    return {
      data: {
        msg: ''
        // msgs: ''
      }
    }
  },
  created() {
    // console.log(actions, 'actions')
    // setTimeout(() => {
    //   this.callChren()
    // }, 5000)
  },
  mounted() {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log('主应用观察者：data 改变前的值为 ', prevState)
      console.log('主应用观察者：data 改变后的值为 ', state)
      // this.data.msgs = state.msgs
    })
  },
  methods: {
    callChren() {
      this.data.msg = '父组件传递得参数 - ' + Math.round(Math.random() * 100)
      //设置 token
      actions.setGlobalState(this.data)
    },

    //
    callChrenCon() {
      //设置
      actions.setGlobalState({ tpl: html })
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  text-align: center;
}
</style>
