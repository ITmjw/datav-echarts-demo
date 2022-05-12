import Vue from 'vue'
import App from './App.vue'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
