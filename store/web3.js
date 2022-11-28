import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { contracts } from "./contracts";
import Axios from "axios";
import { connectMetamask, connectWc } from './wallets';

export const state = () => ({
    network_id: 0,
    loaded: false,
    acc: null,
    connected: false,
    lootbox_popup: false,
    login_popup: false,
    lootbox_items : {},
    current_card: {},
    balance: null,
});

export const mutations = {

    setInstance(state, web3) {
        // state.instance = web3;
        window.$web3 = web3;
    },

    setNetworkId(state, network_id) {
        state.network_id = network_id;
    },
    setCard(state, card){
        state.current_card = card
    },
    setAcc(state, acc) {
        state.acc = acc;
    },
    setBalance(state, balance){
        state.balance = balance;
    },
    setLootboxPopup(state, opened) {
        state.lootbox_popup = opened;
    },
    setLoginPopup(state, opened) {
        state.login_popup = opened;
    },
    setLootboxItems(state, items) {
        state.lootbox_items = items;
    },
    loaded(state) {
        state.loaded = true;
    },

    connected(state) {
        state.connected = true;
    },

    set(state) {
        state.connected = true;
    },

    setContract(state, {name,inst }) {
        window.$contracts[name] = inst;
    },

    clearContracts(state) {
        window.$contracts = {};
    },
};

export const actions = {
    async getLootboxItems({ commit, dispatch, state, getters }, card) {
        const lootbox_items = await Axios.get(process.env['SERVICE_API_URL'] + '/lootboxes/'+ card._id +'/possible-drops');
        var filtered_items = {
            '1': [],
            '2': [],
            '3': [],
            '4': [],
            '5': [],
            '6': []
        }
        lootbox_items.data.filter((item) => {
            filtered_items[item.rarity].push(item);
        });
        commit('setLootboxItems', filtered_items)
    },
    async loadContracts({ commit, dispatch, state, getters }) {
        commit('clearContracts');

      console.log('+')
        const jsons = await Promise.all(
            contracts.map((n) =>
                Axios.get(process.env["CONTRACTS_URL"] + n.url).then(
                    (res) => res.data
                )
            )
        );
        console.log(contracts)
        console.log(process.env["CONTRACTS_URL"])
        for (const i in jsons) {
            const json = jsons[i];

            const network = json.networks[process.env["VUE_APP_NETWORK_ID"]];

            commit("setContract", {
                name: contracts[i].name,
                inst: new $web3.eth.Contract(json.abi, network.address),
            });

            if(contracts[i].name === 'WodCoin') {
                commit("setContract", {
                    name: 'BUSDCoin',
                    inst: new $web3.eth.Contract(json.abi, process.env["CONTRACT_BUSD_ADDR"]),
                });
            }
        }
    },

    async init({ commit, dispatch, state }) {
        // Maybe to use
        // ethereum.isConnected(): boolean;
        var web3 = new Web3(process.env['CHAIN_RPC']);
        commit('setInstance', web3);
        await dispatch('loadContracts')
    },
    async getBalance({ commit, dispatch, state}, contract){
        const balance = Number(
            Web3.utils.fromWei(String(
                await $contracts[contract].methods.balanceOf(state.acc).call()
            ))
        );
        commit('setBalance', balance);
    },
    async load({ commit, dispatch, state }, wallet) {
        try {
            if(wallet == 'metamask') {

                var web3 = await connectMetamask();
            }
            else if(wallet == 'walletconnect') {
                var web3 = await connectWc();
            }
            else {
                throw new Error('Couldn\'t detect any wallet');
            }

            const network_id = await web3.eth.net.getId();

            console.info('Network ID', network_id);

            if(network_id != Number(process.env['CHAIN_ID'])) {
                throw new Error(`Please change network to BSC Testnet`);
            }

            commit('setAcc', (await web3.eth.getAccounts())[0])
            commit('setNetworkId', network_id)
            commit('setInstance', web3);
            await dispatch('loadContracts')

            commit('connected')
            commit('loaded')
        } catch (error) {
            commit('loaded')
            throw error;
        }
    },
};


export const getters = {

    isLoaded(state) {
        return state.loaded
    },

    inst(state) {
        return state.instance
    },

    acc(state) {
        return state.acc
    },
    getCard(state){
        return state.current_card
    },
    getLootboxPopup(state){
        return state.lootbox_popup
    },
    getLoginPopup(state){
        return state.login_popup
    },
    lootboxItems(state){
        return state.lootbox_items
    },
    networkId(state) {
        return state.network_id
    },
    userBalance(state){
        return state.balance;
    },
    isConnected(state) {
        return state.connected
    },

    error(state) {
        return state.error
    },

}
