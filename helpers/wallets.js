import Web3 from 'web3'
import EthereumProvider from '@walletconnect/ethereum-provider'

const validNetworkOrFail = async (web3) => {
  const config = useRuntimeConfig()
  const network_id = await web3.eth.net.getId()

  console.info('Network ID', network_id)
  console.log(config.public['CHAIN_RPC'])
  if (network_id != config.public['VUE_APP_NETWORK_ID']) {
    throw new Error('Please change network to ' + config.public['CHAIN_NAME'])
  }
}

export const connectWc = async () => {
  const config = useRuntimeConfig()
  //  Create WalletConnect Provider
  const _provider = await EthereumProvider.init({
    showQrModal: true,
    projectId: config.public['VUE_APP_WC_PROJECT_ID'],
    chains: [
        1
    ]
  })

  // var wc_provider = new WalletConnectProvider({
  //   rpc: {
  //     [Number(process.env['VUE_APP_NETWORK_ID'])]: process.env['CHAIN_RPC'],
  //   },
  //   network: 'binance',
  //   chainId: Number(process.env['VUE_APP_NETWORK_ID']),
  // })
  await _provider.enable();

  var web3 = new Web3(_provider)



  //  Enable session (triggers QR Code modal)

  await validNetworkOrFail(web3)

  // Subscribe to accounts change
  _provider.on('accountsChanged', () => {
    location.reload()
  })

  // Subscribe to chainId change
  _provider.on('chainChanged', () => {
    location.reload()
  })

  // Subscribe to session disconnection
  _provider.on('disconnect', () => {
    location.reload()
  })

  return web3
}

export const connectMetamask = async () => {
  const config = useRuntimeConfig()
  if (typeof ethereum === 'undefined') {
    throw new Error('No metamask detected')
  }

  var web3 = new Web3(ethereum)
  await ethereum.enable()

  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId:
            '0x' + Number(config.public['VUE_APP_NETWORK_ID']).toString(16),
        },
      ],
    })
  } catch (error) {
    try {
      // omg what a bullshit
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId:
              '0x' + Number(config.public['VUE_APP_NETWORK_ID']).toString(16),
            chainName: config.public['CHAIN_NAME'],
            nativeCurrency: {
              name: config.public['CHAIN_CURR_NAME'],
              symbol: config.public['CHAIN_CURR_SYMBOL'],
              decimals: Number(config.public['CHAIN_CURR_DECIMALS']),
            },
            rpcUrls: [config.public['CHAIN_RPC']],
          },
        ],
      })
    } catch (error) {
      if (/http:\/\//.test(config.public['CHAIN_RPC'])) {
        console.error(
          'Local blockchain is not working, add or change yourself.'
        )
      } else {
        throw new Error('Please change network to ' + config.public['CHAIN_NAME'])
      }
    }
  }

  await validNetworkOrFail(web3)

  // fucking metamsk bug - this code dont have to be executed after upper promise
  setTimeout(() => {
    ethereum.on('accountsChanged', (accounts) => {
      location.reload()
    })
    ethereum.on('chainChanged', (chainId) => {
      location.reload()
    })
  }, 5000)

  return web3
}
