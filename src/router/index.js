import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/pages/rank/rank.vue'
import Search from '@/pages/search/search.vue'
import Singer from '@/pages/singer/singer.vue'
import Recommend from '@/pages/recommend/recommend'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  }, {
    path: '/rank',
    name: 'Rank',
    component: Rank
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/singer',
    name: 'Singer',
    component: Singer
  }, {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  }]
})
