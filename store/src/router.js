import { createRouter, createWebHistory } from 'vue-router';
import { session } from './data/session';
import { userResource } from '@/data/user';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:{
      name:'ProductListPage'
    }
    // meta: {
    //   requiresLogin: false,
    // },
  },{
    path:'/product/:name',
    name:'ProductDetailsPage',
    component:() => import('@/pages/ProductDetails.vue')
  },
  {
    path: '/product',
    name:'ProductListPage',
    component:()=> import('@/pages/Products.vue')
  },
  {
    path: '/checkout',
    name: 'CheckoutPage',
    component: () => import('@/pages/Checkout.vue'),
    meta: {
      requiresLogin: true,
    },
  },
  {
    name: 'Login',
    path: '/account/login',
    component: () => import('@/pages/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/store'),
  routes,
});

router.beforeEach(async (to, from) => {
  let isLoggedIn = session.isLoggedIn;

  try {
    await userResource.promise;
  } catch (error) {
    isLoggedIn = false;
  }

  // Redirect to login if the route requires login and the user is not logged in
  if (to.meta.requiresLogin && !isLoggedIn) {
    return { name: 'Login' }; // Redirect to login page
    // window.location.href("/login")
  }

  // Redirect logged-in users away from the login page
  // if (to.name === 'Login' && isLoggedIn) {
  //   return { name: 'Home' }; // Redirect to home page
  // }

  // Allow navigation
  
});

export default router;
