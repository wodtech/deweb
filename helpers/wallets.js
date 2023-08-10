import Web3 from 'web3'
import EthereumProvider from '@walletconnect/ethereum-provider'

const validNetworkOrFail = async (web3) => {
  const network_id = await web3.eth.net.getId()

  console.info('Network ID', network_id)
  console.log(process.env['CHAIN_RPC'])
  if (network_id != process.env['VUE_APP_NETWORK_ID']) {
    throw new Error('Please change network to ' + process.env['CHAIN_NAME'])
  }
}

export const connectWc = async () => {
  //  Create WalletConnect Provider
  const _provider = await EthereumProvider.init({
    showQrModal: true,
    projectId: process.env['VUE_APP_WC_PROJECT_ID'],
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
            '0x' + Number(process.env['VUE_APP_NETWORK_ID']).toString(16),
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
              '0x' + Number(process.env['VUE_APP_NETWORK_ID']).toString(16),
            chainName: process.env['CHAIN_NAME'],
            nativeCurrency: {
              name: process.env['CHAIN_CURR_NAME'],
              symbol: process.env['CHAIN_CURR_SYMBOL'],
              decimals: Number(process.env['CHAIN_CURR_DECIMALS']),
            },
            rpcUrls: [process.env['CHAIN_RPC']],
          },
        ],
      })
    } catch (error) {
      if (/http:\/\//.test(process.env['CHAIN_RPC'])) {
        console.error(
          'Local blockchain is not working, add or change yourself.'
        )
      } else {
        throw new Error('Please change network to ' + process.env['CHAIN_NAME'])
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
