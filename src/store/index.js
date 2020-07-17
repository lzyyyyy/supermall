import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建store对象
const store = new Vuex.Store({
  state:{
    carList:[]
  },
  mutations:{
    addCart(state,payload){
      

      state.carList.push(payload)
    }
  }
})

//3.导出
export default store