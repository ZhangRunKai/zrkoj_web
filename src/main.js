import Vue from 'vue'
import App from './App'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'

Vue.use(Antd)
// Vue.component(Button.name, Button)
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");