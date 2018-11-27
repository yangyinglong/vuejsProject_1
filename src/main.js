// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Axios from "axios"
import iView from 'iview'
import global from './global/global'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Api from './api'
import store from './store'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(iView)
// Vue.prototype.$axios = Axios
Vue.prototype.$http = Api
//全局配置
// Axios.defaults.baseURL = "htttp://www.wwtliu.com"
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode'

Vue.config.productionTip = false

Vue.prototype.GLOBAL = global

// // 添加请求拦截器
// Axios.interceptors.request.use(function(config) {
// 	if (config.method == "post") {
// 		config.data = qs.stringify(config.data)
// 	}
// 	return config;
// }, function(error) {
// 	// 对请求错误做些什么
// 	return Promise.reject(error);
// });

// // 添加响应拦截器
// Axios.interceptors.request.use(function(response) {
// 	return response;
// }, function(error) {
// 	return	Promise.reject(error);
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
