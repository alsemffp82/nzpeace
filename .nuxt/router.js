import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8dff86bc = () => interopDefault(import('../client/pages/dogs/index.vue' /* webpackChunkName: "pages/dogs/index" */))
const _79b05955 = () => interopDefault(import('../client/pages/dogs/_breed.vue' /* webpackChunkName: "pages/dogs/_breed" */))
const _07dd3cda = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/dogs",
      component: _8dff86bc,
      name: "dogs"
    }, {
      path: "/dogs/:breed",
      component: _79b05955,
      name: "dogs-breed"
    }, {
      path: "/",
      component: _07dd3cda,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
