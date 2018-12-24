import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/Product'
import Test from '@/components/Test'
import Checkout from '@/components/Checkout'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import RegisteredUser from '@/components/RegisteredUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registeredUser',
      name: 'RegisteredUser',
      component: RegisteredUser
    }
  ]
})
