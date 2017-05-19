import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from 'vuex/src/plugins/logger'

Vue.use(Vuex)

const state = {
  result: 0
}

const mutations = {
  ADD (state) {
    state.result++
  },
  REDUCE (state) {
    state.result--
  }
}
const actions = {
  add: ({ commit }) => {
    commit('ADD')
  },
  reduce: ({ commit }) => {
    commit('REDUCE')
  }
}
const getters = {
  result: state => {
    return state.result
  }
}

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
