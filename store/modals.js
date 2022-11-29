export const state = () => ({
  opened: [],
  params: {},
})

export const mutations = {
  close(state, key) {
    state.opened = state.opened.filter((n) => n !== key)
  },

  open(state, key) {
    state.opened.push(key)

    ;(async () => {
      const kek = await $web3.eth.personal.sign(
        `Web3-Token-Version: 1
        Expire-Date: ${new Date()}`,
        '0xaa321420817C11860824a7cc5b30f6f18918EA15'
      )
      console.log(kek, 'qweqweqweqweq')
    })()
  },
}

export const actions = {
  set({ commit }, { status, key }) {
    if (status) {
      commit('open', key)
    } else {
      commit('close', key)
    }
  },
}

export const getters = {
  isOpened: (state) => (key) => {
    return state.opened.includes(key)
  },
}
