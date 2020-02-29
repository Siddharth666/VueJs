import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SecondComponent from '@/components/SecondComponent'
import FirstComponent from '@/components/FirstComponent'
import ThirdComponent from '@/components/ThirdComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nodejs',
      name: 'FirstComponent',
      component: FirstComponent
    },
    {
      path: '/flask',
      name: 'SecondComponent',
      component: SecondComponent
    },
    {
      path: '/webapi',
      name: 'ThirdComponent',
      component: ThirdComponent
    }
  ]
})
