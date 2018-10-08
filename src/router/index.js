import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Details from '@/pages/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Layout',
		component: Layout
    },
    {
    	path: '/details',
    	name: "details",
    	component: Details
    }
  ]
})
