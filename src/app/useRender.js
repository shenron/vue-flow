// @flow

import CompositionCmp from '@/components/CompositionCmp/CompositionCmp';
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';
import logoImg from '@/assets/logo.png';

export default function (h: any) { // eslint-disable-line
  return <div id="app">
    <img src={ logoImg } />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CompositionCmp/>
  </div>;
}
