<template>
  <div id="app">
    <button @click="count.x++, count.a++">Click</button>
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: {
        x: 0,
      }
    }
  },
  mounted() {
    console.log(this);
    this.$set(this.count, 'y', 1)
    this.count = {...this.count, ...{ a:1, b:2}}
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
