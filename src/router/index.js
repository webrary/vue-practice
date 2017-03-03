import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import SearchArea from '../components/SearchArea';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/s',
      name: 'Search',
      component: SearchArea
    }
  ]
});
