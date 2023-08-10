
export const useModalsStore = defineStore('modals', {
  state: () => ({
    opened: [],
    params: {},
  }),
  actions: {
    close(key) {
      this.opened = this.opened.filter((n) => n !== key)
    },

    open(key) {
      this.opened.push(key)

      ;(async () => {
        const kek = await $web3.eth.personal.sign(
            `Web3-Token-Version: 1
        Expire-Date: ${new Date()}`,
            '0xaa321420817C11860824a7cc5b30f6f18918EA15'
        )
        console.log(kek, 'qweqweqweqweq')
      })()
    },
    set({ status, key }) {
      if (status) {
        this.open(key)
      } else {
        this.close(key)
      }
    },
  },
  getters: {
    isOpened: (state) => (key) => state.opened.includes(key)
  }
})

