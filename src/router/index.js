import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import JoinIn from '@/pages/joinIn/joinIn'
import Mall from '@/pages/mall/mall'
import Shoppcar from '@/pages/mall/shoppcar'
import Detail from '@/pages/mall/detail'
import Reset from '@/pages/Reset/resets'
import Seach from '@/components/seach'
import Order from '@/pages/mall/order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:"/shoppcar",component:Shoppcar},
    {path:"/detail",component:Detail},
    {path:"/resets",component:Reset},
    {path:"/home",name:"Home",component:Home},
    {path:"/joinIn",name:"JoinIn",component:JoinIn},
    {path:"/Mall",name:"Mall",component:Mall},
    {path:"/seach",name:"Mall",component:Seach},
    {path:"/order",name:"order",component:Order}

  ]
})
