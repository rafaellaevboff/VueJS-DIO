<template>
  <div id="app">
    <ButtonVue></ButtonVue>
    <ButtonString></ButtonString>
    <ButtonTemplateString></ButtonTemplateString>
  </div>
</template>

<script>
import ButtonVue from './components/ButtonVue.vue';
export default {
  name: 'App',
  components: {
    ButtonVue,
  }
}
</script>

<style>
  #app {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
  }
</style>
