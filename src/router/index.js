import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


const Home = () => import('views/Home/Home')
const Category = () => import('views/Category')
const ShopCart = () => import('views/ShopCart')
const Profile = () => import('views/Profile')
const Detail = () => import('views/Detail/Detail')

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
    },
    {
      path: '/detail/:iid',
      component: Detail
    }
  ],
  mode: 'history'
  
})

export default router