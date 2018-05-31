/* @flow */

import Vue from 'vue';
import App from './App.vue';
import type { DemoType } from './DemoType.js.flow';

Vue.config.productionTip = false;

const myDemoType: DemoType = {
  str: () => {},
  func: () => {},
};

const hello: string = 10;
console.log(hello, myDemoType);

new Vue({
  render: h => h(App),
  created() {
    console.log(hello);
  },
}).$mount('#app');
