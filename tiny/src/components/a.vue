<template>
  <div class="home">
    <p>vue - zuce</p>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>
export default {
  props: {
    datas: String
  },
  name: 'zuce',
  data() {
    return {
      data: {
        msg: ''
      }
    }
  },
  mounted() {
    console.log(this.datas, '111')
  },
  methods: {
    callParent() {}
  }
}
</script>
<style scoped>
</style>
