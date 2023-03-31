import Axios from 'axios'

export const state = () => ({
  k: 1,
  inited: false,
  connection: null,
  exchange_rate: 0.0,
})

export const mutations = {
  setRate(state, exchange_rate) {
    state.exchange_rate = exchange_rate
  },

  setK(state, k) {
    state.k = k
  },

  setConnection(state, conn) {
    state.connection = conn
  },

  inited(state) {
    state.inited = true
  },
  closeLoop(state) {
    state.inited = false
  },
}

export const actions = {
  init({ commit, getters, state }) {
    if (!state.inited) {
      commit('inited')
    }
    if (state.inited) {
      async function loop() {
        const { data } = await Axios.get(
          'https://api.pancakeswap.info/api/v2/tokens/0x298632d8ea20d321fab1c9b473df5dbda249b2b6'
        )
        // state.exchange_rate = data.data.price
        state.exchange_rate = 0.00039;
        await new Promise((resolve) => setTimeout(resolve, 5000))

        loop()
      }

      loop()
    }
  },
  stopLoop({ commit }) {
    commit('closeLoop')
  },
}

export const getters = {
  rate(state) {
    return state.exchange_rate
  },
  k(state) {
    return state.k
  },
  connection(state) {
    return state.connection
  },
  inited(state) {
    return state.inited
  },
}
