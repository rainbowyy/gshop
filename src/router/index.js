import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/Msite/Msite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/login'


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
      name:'Msite',
      meta:{
        showFoot:true
      }
    },
    {
      path:'/search',
      component:Search,
      name:'Search',
      meta:{
        showFoot:true
      }
    },
    {
      path:'/order',
      component:Order,
      name:'Order',
      meta:{
        showFoot:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      name:'Profile',
      meta:{
        showFoot:true
      }
    },
    {
      path:'/login',
      component:Login,
      name:'Login',
      meta:{
        showFoot:false
      }

    }
  ]
})
