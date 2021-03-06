// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueJsonp from 'vue-jsonp'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
import Vuex from 'vuex'
import store from './vuex/store'
import './assets/scss/base.scss'

Vue.config.productionTip = false

Vue.use(VueJsonp)
Vue.use(IScrollView, IScroll)
Vue.use(router)
Vue.use(Vuex)

Vue.prototype.Url = 'http://bank.h5sina.com/csyh/index/'
Vue.prototype.uer = 'http://www.h5sina.com/h5/csyhuser/'

Vue.prototype.getQueryString = function (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var result = window.location.search.substr(1).match(reg)
  if (result !== null) {
    return decodeURIComponent(result[2])
  } else {
    return null
  }
}

Vue.prototype.setCookie = function (cName, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = cName + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString())
}

Vue.prototype.getCookie = function (cName) {
  if (document.cookie.length > 0) {
    var cStart = document.cookie.indexOf(cName + '=')
    var cEnd
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1
      cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) {
        cEnd = document.cookie.length
      }
      return unescape(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
}

Vue.prototype.clearCookie = function (name) {
  this.setCookie(name, '', -1)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach(function (to, from, next) {
  if (to.meta.requireAuth) {
    var uf = store.state.userinfo
    console.log(uf)
    if (to.name === 'zhi1' && uf.type !== 1) {
      next({
        path: '/'
      })
    } else if (to.name === 'shang1' && uf.type !== 2) {
      next({
        path: '/'
      })
    } else if (to.name === 'zong1' && uf.type !== 0) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
