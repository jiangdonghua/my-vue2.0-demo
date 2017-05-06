import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import bottomNav from '@/components/bottomNav'
import welcome from '@/components/welcome'
import rank from '@/components/rank'
import App from '../App'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/home',
      name: 'Hello',
      component: Hello,
      children:[{
        path:'/home',
        components: {
            
        }
      }]
    },
    {
      path: '/BottomNav',
      name: 'bottomNav',
      component: bottomNav
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    }
  ]
})
