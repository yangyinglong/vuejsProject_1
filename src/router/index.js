import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Details from '@/pages/details'
import Car from '@/pages/details/car'
import Earth from '@/pages/details/earth'
import Loud from '@/pages/details/loud'
import Hill from '@/pages/details/hill'
import Print from '@/pages/print'
import Register from '@/components/user/register'
import ForgetPass from '@/components/user/forgetPass'
import UseG2Line from '@/pages/useg2line'

Vue.use(Router)

export default new Router({
  routes: [
    {
  		path: '/',
  		name: 'Layout',
  		component: Layout
    },
    {
      path: '/print',
      name: 'Print',
      component: Print
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
     {
      path: '/fotgetPass',
      name: 'ForgetPass',
      component: ForgetPass
    },
    {
      path: '/useG2Line',
      name: 'UseG2Line',
      component: UseG2Line
    },
    {
    	path: '/details',
    	name: "details",
    	component: Details,
      redirect: "details/car",
      children: [
        {
          name: "car",
          path: "car",
          component: Car
        },
        {
          name: "earth",
          path: "earth",
          component: Earth
        },
        {
          name: "loud",
          path: "loud",
          component: Loud
        },
        {
          name: "hill",
          path: "hill",
          component: Hill
        }
      ]
    }
  ]
})
