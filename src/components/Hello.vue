<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="clicked">Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import Vue from 'vue';
  const Hello = Vue.component('hello', {
    data: function () {
      return {msg: 'Welcome to Your Vue.js App'};
    },
    methods: {
      clicked: function () {
        alert('head clicked');
      }
    }
  });
  export default Hello;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  h1, h2 {
    font-weight: normal;
  }

  ul {
    padding: 0;

    li {
      display: inline-block;
      margin: 0 20px;
    }
  }

  a {
    color: #42b983;
  }
</style>
