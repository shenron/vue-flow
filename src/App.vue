<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <CompositionCmp/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld/HelloWorld.vue';
import CompositionCmp from './components/CompositionCmp/CompositionCmp.vue';

export default {
  name: 'app',
  components: {
    CompositionCmp,
    HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
