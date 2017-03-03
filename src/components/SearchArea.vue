<template>
  <div class="container">
    <input type="text" class="search-box" v-model="keyword" title="search box">
    <ul class="candidates" v-show="candidates.length" tab-index="0">
      <li class="candidate" v-for="candidate in candidates">{{candidate}}</li>
    </ul>
  </div>
</template>
<script type="text/babel">
  import Vue from 'vue';
  const words = [
    'data',
    'methods',
    'computed',
    'props',
    'watch',
    'template'
  ];

  const SearchArea = Vue.component('search-area', {
    data: function () {
      return {
        keyword: '',
        notEmpty: false
      };
    },
    computed: {
      candidates: function () {
        if (this.keyword) {
          return words.filter(word => word.indexOf(this.keyword) > -1);
        }
        return [];
      }
    }
  });
  export default SearchArea;
</script>
<style scoped lang="less" rel="stylesheet/less">
  .container {
    width: 200px;

    .search-box {
      width: 200px;
    }

    .candidates {
      width: 200px;
      margin-top: 5px;
      border: solid 1px black;
      padding-left: 5px;
      .candidate {
        list-style: none;
        text-align: left;
        color: #ff0000;
      }
    }
  }
</style>
