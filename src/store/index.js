import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: "Memes",
    memes: []
  },
  mutations: {
  },
  actions: {
    async getMemes({ commit }) {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes")
        const result = await response.json()

        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  },
  getters: {
  }
})
