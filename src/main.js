// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import Loading from './components/Loading'
import './components/base'
import './styles/index.scss'
import './assets/fonts/iconfont'
import './styles/rem'
Vue.config.productionTip = false
const instance = axios.create({
  baseURL: baseURL
})

Vue.use(Loading)
Vue.prototype.$ajax = instance



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
