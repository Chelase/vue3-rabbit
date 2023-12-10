import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: '/category/:id',
          name: 'Category',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: '/category/sub/:id',
          name: 'Subcategory',
          component: () => import('@/views/Subcategory/index.vue')
        },
        {
          path: '/detail/:id',
          name: 'Detail',
          component: () => import('@/views/Details/index.vue')
        },
        {
          path: '/cartList',
          name: 'cartList',
          component: () => import('@/views/CartList/index.vue')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('@/views/Order/index.vue')
        },
        {
          path: '/pay',
          name: 'pay',
          component: () => import('@/views/Pay/index.vue')
        },
        {
          path: '/paycallback',
          name: 'paycallback',
          component: () => import('@/views/PayBack/index.vue')
        },
        {
          path: '/member',
          name: 'member',
          component: () => import('@/views/Member/index.vue'),
          children: [
            {
              path: '',
              name: 'userInfo',
              component: () => import('@/views/Member/components/UserInfo.vue')
            },
            {
              path: '/member/order',
              name: 'userOrder',
              component: () => import('@/views/Member/components/UserOrder.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    }
  ],
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
