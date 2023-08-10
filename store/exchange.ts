export const useExchangeStore = defineStore('exchange', {
  state: () => ({
    k: 1,
    isInited: false,
    connection: null,
    exchange_rate: 0.0,
  }),
  actions: {
    setRate(exchange_rate) {
      this.exchange_rate = exchange_rate
    },

    setK(state, k) {
      this.k = k
    },

    setConnection(state, conn) {
      this.connection = conn
    },

    inited() {
      this.isInited = true
    },
    closeLoop() {
      this.isInited = false
    },
    init() {
      if (!this.isInited) {
        this.inited()
      }
      if (this.isInited) {
        async function loop() {
          // const { data } = await Axios.get(
          //   'https://api.pancakeswap.info/api/v2/tokens/0x298632d8ea20d321fab1c9b473df5dbda249b2b6'
          // )
          // state.exchange_rate = data.data.price
          this.exchange_rate = 0.00039;
          await new Promise((resolve) => setTimeout(resolve, 5000))

          loop()
        }

        loop()
      }
    },
    stopLoop() {
      this.closeLoop()
    },
  },
  getters: {

  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useExchangeStore, import.meta.hot));
}



