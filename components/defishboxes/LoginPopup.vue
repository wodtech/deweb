<template>
  <div >
    <v-dialog
      dark
      class="d-flex align-center justify-center showed lootbox-popup"
      :model-value="showed_login"
      max-width="400px"
    >
      <v-card
        flat
        class="login-popup-inner rounded-xl pa-8 d-flex flex-column align-center"
        tile
        style="
          position: relative;
          background: linear-gradient(
            39.79deg,
            rgba(41, 77, 87, 0.7) 4.57%,
            rgba(42, 81, 90, 0.322) 89.2%
          );
        "
      >
        <v-btn
          @click="close"
          class="close-btn"
          icon
          color="#67E8D3"
          style="position: absolute; right: 15px; top: 15px"
        >
          <v-icon color="black">mdi-window-close</v-icon>
        </v-btn>
        <div class="title mb-2 text-white">Choose your wallet</div>
        <div class="wallets d-flex flex-column align-center">
          <DefishboxesMetamaskLogin
            @click="loginFlow('metamask')"
            :loading="loading"
            class="mb-3"
          />
          <DefishboxesWcLogin @click="loginFlow('walletconnect')" :loading="loading" />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, toRefs } from 'vue'
const value = ref(false)
let loading = ref(false)
const web3Store = useWeb3Store()
const exchangeStore = useExchangeStore()

const rate = computed(() => exchangeStore.exchange_rate)
const props = defineProps(['showed_login'])

const {showed_login} = toRefs(props)


const loginFlow = async(wallet) => {
  await web3Store.load(wallet).then().then( () => {
     web3Store.setLoginPopup(false)
     web3Store.setLootboxPopup(true)
  })
}

const close = async() => {
  web3Store.setLoginPopup(false)
}


</script>

<style lang="scss" scoped>
.login-popup-inner::v-deep {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.13);
  backdrop-filter: blur(54px);
  overflow-y: hidden;
}
</style>
