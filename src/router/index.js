import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import Test from '@/components/test'
import Login from '@/views/Login'
import ManagerHome from '@/views/manager/manage_home'
import EventRegister from '@/views/manager/eventRegister'
import EventList from '@/views/manager/eventList'
import DisposeEvent from '@/views/manager/disposeEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ManagerHome',
      name: 'ManagerHome',
      component: ManagerHome
    },
    {
      path: '/EventRegister',
      name: 'EventRegister',
      component: EventRegister
    },
    {
      path: '/EventList',
      name: 'EventList',
      component: EventList
    },
    {
      path: '/DisposeEvent',
      name: 'DisposeEvent',
      component: DisposeEvent
    }
  ]
})
