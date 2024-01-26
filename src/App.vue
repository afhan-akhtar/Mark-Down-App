<template>
  <div id="app">
    <h1>Mark Down App</h1>
    <MarkDownEditor/>
    </div>
  
  </template>
  
  <script>
  import MarkDownEditor from './components/MarkDownEditor.vue'
  
  export default {
    name: 'App',
    components: {
      MarkDownEditor
    }
  }
  </script>
  <style scoped>
  #app{
    text-align: center;
  }
</style>
