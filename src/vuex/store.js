// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userinfo: {},
    erinfo: {},
    tongdata: {},
    cstongdata: []
  },
  mutations: {
    uInfo: (state, data) => {
      const obj = state
      obj.userinfo = data
    },
    eInfo: (state, data) => {
      const obj = state
      obj.erinfo = data
    },
    tongInfo: (state, data) => {
      const obj = state
      obj.tongdata = data
    },
    tongdatainfo: (state, data) => {
      const obj = state
      obj.cstongdata = data
    }
  }
})

export default store
