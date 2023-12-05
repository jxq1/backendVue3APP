<script setup>
// import { useRouter } from 'vue-router';
// import { useStore } from 'vuex'
// const store = useStore();
// const router = useRouter()
// store.commit('addMenu',router);
</script>

<template>
<router-view/>
</template>

<style lang="less">
html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  // overflow: hidden;
}
#app {
  margin:0 !important;
  font-family: Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  color:#2c3e50;
  width: 100%;
  height: 100%;
  padding: 0;
  max-width: 100%;
}
</style>
