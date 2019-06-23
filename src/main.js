// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import './components/base'
import './styles/index.scss'
import './assets/fonts/iconfont'
import './styles/rem'
Vue.config.productionTip = false
console.log(BaseUrl)
const instance = axios.create({
  baseURL: `http://${BaseUrl}:3000`
})

Vue.prototype.$ajax = instance



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
