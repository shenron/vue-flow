// @flow

import Vue from 'vue';
import CompositionApi from '@vue/composition-api';
import App from './app/App';

Vue.config.productionTip = false;
Vue.use(CompositionApi);

const hello: string = 'Welcome!';

new Vue({
  render: (h) => h(App),
  created() {
    console.log(hello);
  },
}).$mount('#app');
