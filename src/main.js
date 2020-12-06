import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

Vue.prototype.$http=Axios				//$[http]:http随便取名
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
