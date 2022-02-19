import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () =>
          import('@/views/Home.vue'),
      },
      {
        path: '/dc',
        name: 'Datacenter',
        component: () =>
          import('@/views/Datacenter.vue'),
      },
      {
        path: '/upstream',
        name: 'Upstream',
        component: () =>
          import('@/views/Upstream.vue'),
      },
      {
        path: '/address',
        name: 'IP-Address',
        component: () =>
          import('@/views/IPAddress.vue'),
      },
      {
        path: '/peering',
        name: 'Peering',
        component: () =>
          import('@/views/Peer.vue'),
      },
      {
        path: '/ix',
        name: 'IX',
        component: () =>
          import('@/views/InternetExchange.vue'),
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () =>
          import('@/views/Contact.vue'),
      },
      {
        path: '/redirect/:path',
        component: () =>
          import('@/views/Redirect.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
