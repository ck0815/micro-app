// let host = window.location.host

const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "app1",
    // entry: "//localhost:8001/app1",
    entry: "//192.168.70.72/app1",
    container: "#root-view",
    activeRule: "/app1"
  },
  {
    name: "app2",
    // entry: "//localhost:8002/app2",
    entry: "//192.168.70.72/app2",
    container: "#root-view",
    activeRule: "/app2"
  },
  {
    name: "app3",
    // entry: "//localhost:8003/app3",
    entry: "//192.168.70.72/app3",
    container: "#root-view",
    activeRule: "/app3"
  }
];

// 判断本地环境不做处理
// 部署后环境处理 绑定动态域名
// console.log(host, host.indexOf('localhost') === -1, 'wwwwwwwwwwwwwwwwwwwwwww')
// if (host.indexOf('localhost') === -1) {
//   apps.forEach(item => {
//     let prot = item.entry.split(':')[1].split('/')[0]
//     let newEntry = item.entry.replace(`localhost:${prot}`, host)
//     item.entry = newEntry
//   })
//   console.log(apps, 'apps')
// }

export default apps;