import Toast from './Toast'
import Vue from 'vue'

const obj = {}
obj.install = function() {
  //1.创建组件构造器
  const toastConstrustor = Vue.extend(Toast)
  //2.new的方式根据组件构造器来创建一个组件对象
  const toast = new toastConstrustor()
  //3.将组建对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj