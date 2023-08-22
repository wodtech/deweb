import Web3 from 'web3'
import { contracts } from '~/helpers/contracts'
import Axios from 'axios'
import { connectMetamask, connectWc } from '~/helpers/wallets'


export const useWeb3Store = defineStore('web3', {
  state: () => ({
    network_id: 0,
    loaded: false,
    acc: null,
    connected: false,
    lootbox_popup: false,
    login_popup: false,
    lootbox_items: {},
    current_card: {},
    balance: null,
  }),
  actions: {
    setInstance(web3) {
      // state.instance = web3;
      (window as any).$web3 = web3
    },

    setNetworkId(network_id) {
      this.network_id = network_id
    },
    setCard(card) {
      this.current_card = card
    },
    setAcc(acc) {
      this.acc = acc
    },
    setBalance(balance) {
      this.balance = balance
    },
    setLootboxPopup(opened) {
      this.lootbox_popup = opened
    },
    setLoginPopup(opened) {
      this.login_popup = opened
    },
    setLootboxItems(items) {
      this.lootbox_items = items
    },
    loaded() {
      this.loaded = true
    },

    connected() {
      this.connected = true
    },

    set() {
      this.connected = true
    },

    setContract({name, inst}) {
      (window as any).$contracts[name] = inst
    },

    clearContracts() {
      (window as any).$contracts = {}
    },
    async getLootboxItems(card) {
      const lootbox_items = await Axios.get(
          this.config.public['SERVICE_API_URL'] +
          '/lootboxes/' +
          card._id +
          '/possible-drops'
      )
      var filtered_items = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
      }
      lootbox_items.data.filter((item) => {
        filtered_items[item.rarity].push(item)
      })
      this.setLootboxItems(filtered_items)
    },
    async loadContracts() {
      this.clearContracts()

      const jsons = await Promise.all(
          contracts.map((n) =>
              Axios.get(this.config.public.CONTRACTS_URL + n.url).then((res) => res.data)
          )
      )


      for (const i in jsons) {
        const json = jsons[i]

        const network = json.networks[this.config.public['VUE_APP_NETWORK_ID']]
        console.log(network)
        this.setContract({
          name: contracts[i].name,
          inst: new $web3.eth.Contract(json.abi, network.address),
        })
        if (contracts[i].name === 'WodCoin') {
          this.setContract({
            name: 'BUSDCoin',
            inst: new $web3.eth.Contract(
                json.abi,
                process.env['CONTRACT_BUSD_ADDR']
            ),
          })
        }
      }
    },

    async init() {
      // Maybe to use
      // ethereum.isConnected(): boolean;
      var web3 = new Web3(this.config.public['CHAIN_RPC'])
      this.setInstance(web3)

      await this.loadContracts()
    },
    async getBalance(contract) {
      const balance = Number(
          Web3.utils.fromWei(
              String(await $contracts[contract].methods.balanceOf(this.acc).call())
          )
      )
      this.setBalance(balance)
    },
    async load(wallet) {
      try {
        if (wallet == 'metamask') {
          var web3 = await connectMetamask()
        } else if (wallet == 'walletconnect') {
          var web3 = await connectWc()
        } else {
          throw new Error("Couldn't detect any wallet")
        }

        const network_id = await web3.eth.net.getId()

        console.info('Network ID', network_id)

        if (network_id != Number(this.configconfig.public['CHAIN_ID'])) {
          throw new Error(`Please change network to BSC Testnet`)
        }
        this.setAcc((await web3.eth.getAccounts())[0])
        this.setNetworkId(network_id)
        this.setInstance(web3)
        await this.loadContracts()

        this.connected()
        this.loaded()
      } catch (error) {
        this.loaded()
        throw error
      }
    }
  },
  getters: {
    isLoaded: (state) => state.loaded,
    inst: (state) => state.instance,
    getCard: (state) => state.current_card,
    lootboxItems: (state) => state.lootbox_items,
    networkId: (state) => state.network_id,
    userBalance: (state) => state.balance,
    isConnected: (state) => state.connected,
    config: (state) => useRuntimeConfig(),


  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWeb3Store, import.meta.hot));
}