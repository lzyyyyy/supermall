import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home')
const Category = () => import('views/Category')
const ShopCart = () => import('views/ShopCart')
const Profile = () => import('views/Profile')

Vue.use(VueRouter);

const router = new VueRouter ({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
  
})

export default router