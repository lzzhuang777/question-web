<template>
  <div id="app">
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style >

  #app{
    background-color: #f9fafc;
    height: 1200px;
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
