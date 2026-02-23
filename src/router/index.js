import { createRouter, createWebHistory } from 'vue-router'
import App from '@/layouts/App.vue'
import Home from '@/views/app/Home.vue'
import BrowseCategory from '@/views/app/BrowseCategory.vue'
import ProductDetail from '@/views/app/ProductDetail.vue'
import Auth from '@/layouts/Auth.vue'
import Login from '@/views/Auth/Login.vue'
import StoreDetail from '@/views/app/StoreDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: Auth,
      children: [
        {
          path: 'login',
          name: 'auth.login',
          component: Login
        }
      ]
    },
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          name: 'app.home',
          component: Home,
        },
        {
          path: 'browse-category/:slug',
          name: 'app.browse-category',
          component: BrowseCategory,
        },
        {
          path: 'product/:slug',
          name: 'app.product-detail',
          component: ProductDetail,
        },
        {
          path: 'store/:username',
          name: 'app.store-detail',
          component: StoreDetail,
        },
        // {
        //   path: 'store/:username',
        //   name: 'app.store-detail',
        //   component: StoreDetail,
        // },
      ]
    },
  ],
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router
