import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/Msite/Msite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite,
      name:'Msite'
    },
    {
      path:'/search',
      component:Search,
      name:'Search'
    },
    {
      path:'/order',
      component:Order,
      name:'Order'
    },
    {
      path:'/profile',
      component:Profile,
      name:'Profile'
    }
  ]
})
