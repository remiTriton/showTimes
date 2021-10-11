import { createRouter, createWebHashHistory } from 'vue-router'
import index from '@/index/views/Index.vue'
import user from '../views/user.vue'
import concert from '../views/concert.vue'

// import index from '@/index/views/Index.vue'


const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/user',
    name: 'user',
    component: user,
    meta: { requiresAuth: true }


  },
  {
    path:'/concert',
    name:'concert',
    component: concert,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../components/Register.vue')
  },
  {
    path:'/concerts/:id',
    name:'PrintConcert',
    component: () => import(/* webpackChunkName: "show" */ '../components/PrintConcert')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "register" */ '../components/editProfil.vue')
  },
  {
    path: '/tickets/:id',
    name: 'Ticket',
    component: () => import(/* webpackChunkName: "ticket" */ '../components/tickets/Ticket.vue')
  },
  {
    path: '/qrvalidate/:id',
    name: 'QRValidate',
    component: () => import(/* webpackChunkName: "qrvalidate" */ '../components/QRValidate.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
