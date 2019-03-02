import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: Home,
      children: [{
        path: 'home',
        component: () => import('@/components/home/home_content'),
        name: 'home',
        meta: {
          title: '首页'
        }
      },
        {
          path: 'own',
          component: () => import('@/views/own')
        }
      ]
    },
    // {
    //   path: '/own',
    //   name: 'own',
    //   component: () => import('./views/own.vue')
    // }
  ]
})
