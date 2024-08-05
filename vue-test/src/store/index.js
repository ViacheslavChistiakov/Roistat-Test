import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: JSON.parse(localStorage.getItem('formData')) || [],
    idCounter: parseInt(localStorage.getItem('idCounter')) || 0
  },
  mutations: {
    addFormData (state, data) {
      data.id = state.idCounter++
      function addChildToParent (parent, newData) {
        if (parent.id === newData.parent) {
          parent.children.push(newData)
          return true
        }

        for (const child of parent.children) {
          if (addChildToParent(child, newData)) {
            return true
          }
        }
        return false
      }

      if (data.parent === null) {
        state.formData.push(data)
      } else {
        for (const item of state.formData) {
          if (addChildToParent(item, data)) {
            return true
          }
        }
        return false
      }

      localStorage.setItem('formData', JSON.stringify(state.formData))
      localStorage.setItem('idCounter', state.idCounter)
    },
    updateLocalFormData (state) {
      state.localFormData = [...state.formData]
    }
  },
  actions: {
    saveFormData ({ commit }, data) {
      commit('addFormData', data)
      commit('updateLocalFormData')
    }
  },
  getters: {
    getFormData (state) {
      return state.formData
    }
  }
})
