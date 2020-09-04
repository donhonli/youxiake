import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/Reset.css'
import FastClick from 'fastclick'
Vue.config.productionTip = false
FastClick.attach(document.body)
// 引入字体图标
import './assets/css/iconfont.css'
// 引入适配font.js文件
import './assets/js/font'
// swiper引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
// 引入animate动画
import animate from 'animate.css'
Vue.use(animate)
// 引入axios
import axios from 'axios'
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
