import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import zh1 from '@/components/zh1'
import zong1 from '@/components/zong1'
import tong from '@/components/tong'
import shang1 from '@/components/shang1'
import change from '@/components/change'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/zh1',
      name: 'zh1',
      component: zh1,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/zong1',
      name: 'zong1',
      component: zong1,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/tong',
      name: 'tong',
      component: tong
    },
    {
      path: '/shang1',
      name: 'shang1',
      component: shang1,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/change',
      name: 'change',
      component: change,
      meta: {
        requireAuth: true
      }
    }
  ]
})
