import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index/index'
import login from '@/views/login/login'
import register from '@/views/register/register'
import forget from '@/views/forget/forget'
import vocabulary from '@/views/vocabulary/vocabulary'
import syntax from '@/views/syntax/syntax'
import literature from '@/views/literature/literature'
import literatureInfo from '@/views/literature/literatureInfo'
import spoken from '@/views/spoken/spoken'
import examine from '@/views/examine/examine'
import yuedu from '@/views/examine/yuedu'
import yuedu1 from '@/views/examine/yuedu1'
import tingli from '@/views/examine/tingli'
import tingli1 from '@/views/examine/tingli1'
import xuanci from '@/views/examine/xuanci'
import xuanci1 from '@/views/examine/xuanci1'
import record from '@/views/record/record'
import discuss from '@/views/discuss/discuss'
import discussInfo from '@/views/discuss/discussInfo'
import about from '@/views/about/about'
import center from '@/views/center/center'
import error404 from '@/views/error/404'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/forget',
    name: 'forget',
    component: forget
  },
  {
    path: '/vocabulary',
    name: 'vocabulary',
    component: vocabulary
  },
  {
    path: '/syntax',
    name: 'syntax',
    component: syntax
  },
  {
    path: '/literature',
    name: 'literature',
    component: literature
  },
  {
    path: '/literatureInfo',
    name: 'literatureInfo',
    component: literatureInfo
  },
  {
    path: '/spoken',
    name: 'spoken',
    component: spoken
  },
  {
    path: '/examine',
    name: 'examine',
    component: examine
  },
  {
    path: '/yuedu',
    name: 'yuedu',
    component: yuedu
  },
  {
    path: '/yuedu1',
    name: 'yuedu1',
    component: yuedu1
  },
  {
    path: '/tingli',
    name: 'tingli',
    component: tingli
  },
  {
    path: '/tingli1',
    name: 'tingli1',
    component: tingli1
  },
  {
    path: '/xuanci',
    name: 'xuanci',
    component: xuanci
  },
  {
    path: '/xuanci1',
    name: 'xuanci1',
    component: xuanci1
  },
  {
    path: '/record',
    name: 'record',
    component: record
  },
  {
    path: '/discuss',
    name: 'discuss',
    component: discuss
  },
  {
    path: '/discussInfo',
    name: 'discussInfo',
    component: discussInfo
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/center',
    name: 'center',
    component: center
  },
  {
    path: '/404',
    name: '404',
    component: error404,
  },
  { 
    path: '/:pathMatch(.*)',
    redirect: '/404'
 },
  
]

// 防止连续点击多次路由报错
let routerPush = VueRouter.prototype.push;
let routerReplace = VueRouter.prototype.replace;
// push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push(location) {
  return routerReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
