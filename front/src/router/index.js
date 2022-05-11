import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import {userStore} from '../pinia/user'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE),
  })
  Router.beforeEach((to, from, next) => {
    const userAuth = userStore();
    // to and from are both route objects. must call `next`.
    if (!userAuth.isLoggedIn) {
      next({
        path:'/dashboard',
        query: { redirect:'/login'}
      })
    } else {
      next()
    } 
  })
  return Router
})
