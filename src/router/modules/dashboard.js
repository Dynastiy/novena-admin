import Dashboard from '@/pages/index.vue'
import Reviews from '@/pages/reviews.vue'
import Messages from '@/pages/messages.vue'


const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      name: 'dashboard',
      parent: 'dashboard'
    }
  },

  {
    path: '/messages',
    name: 'messages',
    component: Messages,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      name: 'messages',
      parent: 'messages'
    }
  },

  // {
  //   path: '/user/:id',
  //   name: 'userideatils',
  //   component: UserDetails,
  //   meta: {
  //     layout: 'dashboard',
  //     requiresAuth: false,
  //     name: 'users',
  //     parent: 'users'
  //   }
  // },

  {
    path: '/reviews',
    name: 'reviews',
    component: Reviews,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      name: 'reviews',
      parent: 'reviews'
    }
  }
]

export default routes
