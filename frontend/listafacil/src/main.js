import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.filter('reais', function (value) {
  return 'R$ ' + parseFloat(value).toFixed(2).replace(".", ",");
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
