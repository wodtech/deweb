<template>
  <div style="background: #0b0e29">
    <v-container
      class="d-flex flex-column justify-center align-center lootbox-items wide"
      style="padding: 150px 0"
    >
      <span
        class="mb-3 text-h2 text-uppercase font-weight-bold white--text"
        >DEFISH BOX IS HERE</span
      >
      <p class="body-1 text-center mt-4 white--text" style="max-width: 600px">
        Open the Fish Boxes to get equipment for fishing. Each box contains
        <span class="font-weight-bold">4 items</span> of equipment of
        <span class="font-weight-bold">random quality</span>.
      </p>
      <v-row class="d-flex align-center mt-4" style="width: 100%; z-index: 1">
        <v-col
          md="4"
          class="d-flex align-center justify-center"
          v-for="(card, i) in lootboxes"
          :key="'A' + i"
        >
          <v-card
            class="d-flex flex-column justify-center align-center pa-8 box-card"
            width="500"
            rounded="xl"
            color="transparent"
          >
            <v-img
              @click="openLogin(card, i)"
              class="lootbox-image"
              height="270"
              max-width="336"
              :src="`${card.pic_url}`"
            >
            </v-img>
            <v-card-title
              class="d-flex justify-center pa-0"
              @click="openLogin(card, i)"
              ><span class="main-title text-h3 pa-0">{{
                card.name
              }}</span></v-card-title
            >
            <v-card-text class="mt-2">
              <v-row class="d-flex flex-column">
                <div class="d-flex flex-wrap rarity-chips py-3">
                  <div v-for="(chance, name) in card.chances" :key="name">
                    <v-tooltip top rounded="xl" color="#253f48">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          height="35"
                          v-on="on"
                          v-bind="attrs"
                          x-small
                          rounded
                          color="transparent"
                          style="z-index: 100"
                        >
                          <div class="d-flex align-center justify-center">
                            <RarityIcon
                              :color="rarityColor(name)"
                              class="mr-1"
                            />
                            <span
                              :style="{ color: rarityColor(name) }"
                              style="transform: translateY(2px)"
                              >{{ chance }}%</span
                            >
                          </div>
                        </v-btn>
                      </template>
                      <div class="tooltip-content d-flex align-center">
                        <CrystalIcon
                          :rarity="rarities[name].name"
                          :size="2"
                          class="mr-1"
                          style="margin-top: -3px"
                        />
                        <span
                          style="text-transform: uppercase; font-weight: 600"
                          :style="{ color: rarityColor(name) }"
                          >{{ name }}</span
                        >
                      </div>
                    </v-tooltip>
                  </div>
                </div>
                <v-col class="pa-0">
                  <v-progress-linear
                    rounded
                    :value="countPercent(card.count, card.limit)"
                    height="6"
                  ></v-progress-linear>
                </v-col>
                <v-col class="d-flex pa-0 pt-2">
                  <div style="color: #67e8d3">
                    {{ card.limit - card.count }} left
                  </div>
                  <div style="margin-left: auto" class="white--text">
                    {{ card.limit }}
                  </div>
                </v-col>
                <v-col class="d-flex pa-0 mt-2">
                  <v-row class="d-flex align-center lower-row">
                    <v-col
                      cols="12"
                      class="d-flex price-row"
                      v-if="card.token_name === 'wod'"
                    >
                      <div
                        class="text-h5 font-weight-bold d-flex"
                        style="color: white !important"
                      >
                        <svg
                          class="d-flex align-self-end mr-1 mt-6"
                          style="transform: translateY(-13px)"
                          width="24"
                          height="16"
                          viewBox="0 0 24 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 0.661133H6.41336L5.3672 2.31505V2.872L8.1857 10.7705L10.5823 3.76649V3.31081L9.28272 0.661133H12V8.00268L10.2447 13.3528L11.0886 14.8042H4.50646L5.55285 13.2684L1.85674 2.872L0 0.661133ZM24 0.661133H17.5866L18.6328 2.31505V2.872L15.8143 10.7705L13.4177 3.76649V3.31081L14.7173 0.661133H12V8.00268L13.7553 13.3528L12.9114 14.8042H19.4935L18.4472 13.2684L22.1433 2.872L24 0.661133Z"
                            fill="white"
                          />
                        </svg>
                        {{
                          card.price.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                          })
                        }}
                      </div>
                      <div
                        style="color: #a0a2c1 !important; margin-left: 3px"
                        v-if="rate"
                      >
                        ${{
                          (card.price * Number(rate)).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                          })
                        }}
                      </div>
                    </v-col>
                    <v-col cols="12" class="d-flex price-row" v-else>
                      <div
                        class="text-h5 font-weight-bold d-flex"
                        style="color: white !important"
                      >
                        $
                        {{
                          card.price.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                          })
                        }}
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="d-flex align-end justify-end btn-row"
                    >
                      <v-btn
                        :loading="card.loading"
                        @click="openLogin(card, i)"
                        class="text-uppercase font-weight-bold"
                        style="width: 100%; margin-left: auto; z-index: 100"
                        rounded
                        color="primary"
                        min-height="56"
                      >
                        VIEW BOX
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <LootboxPopup
      :showed="lootboxPopup"
      :single_card="single_card"
      :card_items="lootbox_items"
    />
    <LoginPopup :showed_login="loginPopup" />
  </div>
</template>

<script>
import Axios from 'axios'
import { mapGetters } from 'vuex'
import RarityIcon from '@/components/defishboxes/RarityIcon.vue'
import CrystalIcon from '@/components/defishboxes/CrystalIcon.vue'
import FollowScreen from '@/components/defishboxes/FollowScreen.vue'
import LootboxPopup from '~/components/defishboxes/LootboxPopup.vue'
import LoginPopup from '~/components/defishboxes/LoginPopup.vue'

export default {
  data() {
    return {
      rarities: {
        common: {
          name: 'Common',
          color: '#9298A5',
        },
        uncommon: {
          name: 'Uncommon',
          color: '#839FB7',
        },
        rare: {
          name: 'Rare',
          color: '#8AE5FD',
        },
        epic: {
          name: 'Epic',
          color: '#BB5EEA',
        },
        legendary: {
          name: 'Legendary',
          color: '#F29136',
        },
        artifact: {
          name: 'Artifact',
          color: '#EE3D3C',
        },
      },
      lootboxes: [],
      single_card: {},
    }
  },
  mounted() {
    this.initContract()
    this.getLootboxes()
    this.$store.dispatch('exchange/init')
  },
  destroyed() {
    this.$store.dispatch('exchange/stopLoop')
  },
  methods: {
    async openLogin(card) {
      card.loading = true
      await this.$store.dispatch('web3/getLootboxItems', card).then(() => {
        this.single_card = card
      })
      if (!this.isConnected) {
        await this.$store.commit('web3/setLoginPopup', true)
      } else {
        await this.$store.commit('web3/setLootboxPopup', true)
      }
      card.loading = false
    },

    rarityColor(name) {
      return this.rarities[name].color
    },
    countPercent(item_left, item_all) {
      return (100 * (item_all - item_left)) / item_all
    },
    async initContract() {
      await this.$store.dispatch('web3/init').finally(() => {})
    },
    async getLootboxes() {
      const lootboxes = await Axios.get(
        process.env['SERVICE_API_URL'] + '/lootboxes'
      )
      this.lootboxes = lootboxes.data.map((n) => {
        n.loading = false
        return n
      })
    },
  },
  components: {
    RarityIcon,
    FollowScreen,
    LootboxPopup,
    CrystalIcon,
    LoginPopup,
  },
  computed: {
    ...mapGetters({
      rateInited: 'exchange/inited',
      rate: 'exchange/rate',
      isConnected: 'web3/isConnected',
      lootboxPopup: 'web3/getLootboxPopup',
      loginPopup: 'web3/getLoginPopup',
      lootbox_items: 'web3/lootboxItems',
    }),
  },
}
</script>

<style lang="scss" scoped>
.rarity-chips {
  justify-content: space-between;
}

.lootbox-image:hover {
  cursor: pointer;
}

@media (max-width: 1680px) {
  .rarity-chips {
    justify-content: flex-start;
  }
  .lootbox-items {
    max-width: 94% !important;
  }
}
.v-tooltip__content {
  border-radius: 50px;
  padding: 10px !important;
  height: 36px;
  &:before {
    border-top: 8px solid #253f48;
  }
}
.main-title {
  font-family: Druk;
  font-size: 3.45vw;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    cursor: pointer;
  }
}

.box-card {
  border: 1px solid rgba(160, 162, 193, 0.15) !important;
  transition: 0.4s ease-in-out;
  &:hover {
    transition: 0.4s ease-in-out;
    background: #898a952e !important;
  }
}

@media (max-width: 960px) {
  .main-title {
    font-size: 40px;
  }

  .box-card {
    &:hover {
      transform: scale(1);
    }
    .price-row {
      justify-content: center !important;
    }
    .btn-row {
      .v-btn {
        margin-right: auto !important;
      }
    }
  }
}
</style>
