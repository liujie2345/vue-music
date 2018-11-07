import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import faseClick from 'fastclick'
import VueLazyLoard from 'vue-lazyload'
import 'stylus/index.styl'

Vue.config.productionTip = false
faseClick.attach(document.body)
Vue.use(VueLazyLoard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
