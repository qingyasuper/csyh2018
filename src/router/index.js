import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import zh1 from '@/components/zh1'
import zong1 from '@/components/zong1'
import tong from '@/components/tong'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: index
    },
    {
      path: '/zh1',
      name: '',
      component: zh1
    },
    {
      path: '/zong1',
      name: '',
      component: zong1
    },
    {
      path: '/tong',
      name: '',
      component: tong
    }
  ]
})
