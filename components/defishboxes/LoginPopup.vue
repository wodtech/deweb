<template>
  <div>
    <v-dialog
      class="d-flex align-center justify-center showed lootbox-popup"
      @input="close"
      :value="showed_login"
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
          <v-icon color="#67E8D3">mdi-window-close</v-icon>
        </v-btn>
        <div class="title mb-2 white--text">Choose your wallet</div>
        <div class="wallets d-flex flex-column align-center">
          <MetamaskLogin
            @click="loginFlow('metamask')"
            :loading="loading"
            class="mb-3"
          />
          <WcLogin @click="loginFlow('walletconnect')" :loading="loading" />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MetamaskLogin from '~/components/defishboxes/MetamaskLogin.vue'
import WcLogin from '~/components/defishboxes/WcLogin.vue'

export default {
  data() {
    return {
      loading: false,
    }
  },
  components: {
    MetamaskLogin,
    WcLogin,
  },
  mounted() {},
  methods: {
    async loginFlow(wallet) {
      await this.$store.dispatch('web3/load', wallet).then(async () => {
        await this.$store.commit('web3/setLoginPopup', false)
        await this.$store.commit('web3/setLootboxPopup', true)
      })
    },
    async close() {
      await this.$store.commit('web3/setLoginPopup', false)
    },
  },
  computed: {
    ...mapGetters({
      rate: 'exchange/rate',
    }),
  },
  props: {
    showed_login: {},
  },
}
</script>

<style lang="scss" scoped>
.login-popup-inner::v-deep {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.13);
  backdrop-filter: blur(54px);
  overflow-y: hidden;
}
</style>
