import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
      children:[
      {
        path: '/course',
        name: 'Course',
        component: ()=>import('../views/Course')
      },
      {
        path: '/contests',
        name: 'Contests',
        component: ()=>import('../views/Contests'),

      },
        {
          path: '/URGreat',
          name: 'URGreat',
          component: ()=>import('../views/URGreat'),
        },
        {
          path: '/details',
          name: 'Details',
          component:()=>import('../views/Details')
        },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
        {
          path: '/editor',
          name: 'Editor',
          component:() => import('../views/Editor')
        }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
