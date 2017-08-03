// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routes from './router'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/css/main.scss'
Vue.use(Router)
Vue.use(ElementUI)
NProgress.configure({ ease: 'ease', speed: 500, minimum: 0.5, showSpinner: false})
Vue.config.productionTip = false
const router = new Router({
	routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next() 
})
router.afterEach((to, from, next) => {
  NProgress.done()
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
