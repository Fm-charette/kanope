
const routes = [
  {
    path: '/',
    component: () => import('pages/myLogin.vue'),
    children: [
      { path: 'dashboard', component: () =>('pages/myDashboard.vue')}
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
