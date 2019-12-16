import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: {
      planetsCounter: 100000,
      planetsPerSecond: 0,
      planetsPerClick: 1
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
