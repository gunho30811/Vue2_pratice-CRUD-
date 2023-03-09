import { create } from 'core-js/core/object'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index.js'
import 'core-js/core/object';

create(App).use(router).mount('#app')
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
