// 当前版本 qiankun 对 insertBefore 处理有问题，这里先使用修改后的本地包
// import { initGlobalState, MicroAppStateActions } from '@/micro/es'

import {
  initGlobalState
} from "qiankun";
// 初始化 state
const initialState = {}
const actions = initGlobalState(initialState)

export default actions