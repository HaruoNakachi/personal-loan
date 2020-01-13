import Vue from 'vue'
import App from './App.vue'

import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import awsconfig from './aws-exports';
import vuetify from './plugins/vuetify';
API.configure(awsconfig);
PubSub.configure(awsconfig);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')