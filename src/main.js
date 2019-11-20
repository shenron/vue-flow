// @flow

import Vue from 'vue';
import CompositionApi from '@vue/composition-api';
import App from '@/App.vue';
import type { DemoType } from './DemoType.js.flow'; // eslint-disable-line no-unused-vars

Vue.config.productionTip = false;
Vue.use(CompositionApi);

// uncomment to see errors
const hello: string = 'Welcome!';
// const myDemoType: DemoType = {
//   str: () => {},
//   func: () => {},
// };
// hello = 10;
// console.log(hello, myDemoType);

new Vue({
  render: (h) => h(App),
  created() {
    console.log(hello);
  },
}).$mount('#app');
