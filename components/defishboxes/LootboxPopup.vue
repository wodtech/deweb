<template>
  <div>
    <DefishboxesLootboxNotify :showed="success_popup" @close="success_popup = $event" />

    <v-dialog
      dark
      class="d-flex align-center justify-center showed lootbox-popup"
      @input="close"
      :model-value="showed"
      max-width="1100px"
      transition="slide-y-transition"
    >
      <v-card
        flat
        class="lootbox-popup-inner rounded-xl pa-8 d-flex flex-column text-white"
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
        <img
          style="
            position: absolute;
            width: 700px;
            height: 690px;
            object-fit: cover;
            top: -3%;
            z-index: -1;
            left: 0;
            right: 0;
            margin: auto;
            transform: scale(1.5) translateX(0);
            filter: blur(9px) opacity(0.5);
          "
          :src="single_card.pic_url"
        />

        <v-btn
          @click="close"
          class="close-btn"
          icon
          color="#67E8D3"
          style="position: absolute; right: 15px; top: 15px"
        >
          <v-icon color="67e8d3">mdi-window-close</v-icon>
        </v-btn>
        <div class="upper-part d-flex align-center">
          <v-img
            style="margin: auto"
            height="350"
            max-width="500"
            :src="`${single_card.pic_url}`"
          >
          </v-img>
          <div
            class="box-content d-flex flex-column flex-grow-1"
            style="max-width: 48%"
          >
            <v-card-title class="d-flex pa-0"
              ><span class="main-title text-h3 pa-0">{{
                single_card.name
              }}</span></v-card-title
            >
            <div class="count-line mt-2 mb-6" style="position: relative">
              <v-progress-linear
                class="mt-1"
                height="8"
                :model-value="countPercent(single_card.count, single_card.limit)"
                color="#67e8d3"
                rounded
              ></v-progress-linear>
              <div class="number left caption">
                {{ single_card.limit - single_card.count }} left
              </div>
              <div class="number right caption">{{ single_card.limit }}</div>
            </div>
            <div class="item-number mt-4">
              <span class="caption" style="font-weight: 600">QUANTITY</span>
              <div class="d-flex align-center">
                <v-btn
                  icon
                  outlined
                  color="primary"
                  class="minus"
                  :disabled="item_count === 1"
                  @click="item_count--"
                >
                  <v-icon small> mdi-minus </v-icon>
                </v-btn>
                <div class="mx-3"> {{ item_count }}</div>
<!--                :disabled="-->
<!--                single_card.limit - single_card.count === 0 ||-->
<!--                item_count >= 20 ||-->
<!--                item_count > single_card.limit - single_card.count-->
<!--                "-->

                <v-btn
                  icon
                  outlined
                  color="primary"
                  class="plus"
                  :disabled="
                    item_count >= 20 ||
                    item_count >= single_card.limit - single_card.count
                  "
                  @click="item_count++"
                >
                  <v-icon small> mdi-plus </v-icon>
                </v-btn>
              </div>
            </div>
            <div class="lower-line d-flex align-center justify-space-between">
              <div class="d-flex flex-column mt-6">
                <span class="caption" style="font-weight: 600"
                  >TOTAL PRICE</span
                >
                <div
                  class="price-part d-flex align-center"
                  v-if="single_card.token_name === 'wod'"
                >
                  <div
                    class="text-h5 font-weight-bold d-flex"
                    v-if="single_card && single_card.price"
                    style="color: white !important"
                  >
                    <svg
                      class="d-flex align-self-end mr-1 mt-6"
                      style="transform: translateY(-13px)"
                      width="24"
                      height="15"
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
                    <span class="main-price" v-if="single_card.price">{{
                      (item_count * single_card.price).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                      })
                    }}</span>
                  </div>
                  <div
                    v-if="single_card && single_card.price"
                    class="caption body-2"
                    style="
                      color: #a0a2c1 !important;
                      margin-left: 3px;
                      margin-top: -10px;
                    "
                  >
                    ${{
                      (
                        item_count *
                        single_card.price *
                        Number(rate)
                      ).toLocaleString('en-US', { minimumFractionDigits: 2 })
                    }}
                  </div>
                </div>
                <div class="price-part d-flex align-center" v-else>
                  <div
                    class="text-h5 font-weight-bold d-flex"
                    v-if="single_card && single_card.price"
                    style="color: white !important"
                  >
                    <span class="main-price" v-if="single_card.price"
                      >$
                      {{
                        (item_count * single_card.price).toLocaleString(
                          'en-US',
                          { minimumFractionDigits: 2 }
                        )
                      }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column">
                <v-btn
                  @click="getLootbox()"
                  :disabled="
                    item_count > 20 ||
                    !item_count ||
                    item_count > single_card.limit - single_card.count
                  "
                  :loading="loading"
                  class="text-uppercase font-weight-bold px-10"
                  rounded
                  min-height="56"
                  color="primary"
                >
                  Buy Now
                </v-btn>
                <div
                  class="body-2 error--text pa-2"
                  v-if="limit_error === single_card._id"
                >
                  Enough boxes for you ({{ single_card.owner_limit }} per user)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="drop-chance-line mt-4 mb-8">
          <p class="caption">Item Drop Chance</p>
          <div class="d-flex flex-wrap py-3 rarity-chips">
            <div
              class="d-flex single-rarity mr-8"
              v-for="(chance, name) in single_card.chances"
              :key="name"
            >
              <DefishboxesCrystalIcon
                :rarity="rarities[name].name"
                :size="3"
                class="mr-1"
              />
              <div class="crystal-content d-flex flex-column">
                <span
                  :style="{ color: rarityColor(name) }"
                  class="caption"
                  style="transform: translateY(2px); font-weight: 600"
                  >{{ chance }}%</span
                >
                <span
                  :style="{ color: rarityColor(name) }"
                  class="caption"
                  style="
                    text-transform: uppercase;
                    font-weight: 600;
                    margin-top: -5px;
                  "
                  >{{ name }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="cards-chance d-flex flex-column" v-if="card_items">
          <div
            class="chance-row artifact mb-8"
            v-if="card_items[6] && card_items[6].length > 0"
          >
            <div class="heading-part d-flex align-center mb-2">
              <DefishboxesCrystalIcon :rarity="'Artifact'" :size="3" class="mr-1" />
              <div class="body-1">Artifact</div>
            </div>
            <v-row class="items-row">
              <v-col
                md="2"
                v-for="(single_item, index) in card_items[6]"
                :key="'A' + index"
              >
                <v-img
                  style="height: 230px"
                  :src="single_item.rendered_image_url"
                >
                </v-img>
              </v-col>
            </v-row>
          </div>

          <div
            class="chance-row legendary mb-8"
            v-if="card_items[5] && card_items[5].length > 0"
          >
            <div class="heading-part d-flex align-center mb-2">
              <DefishboxesCrystalIcon :rarity="'Legendary'" :size="3" class="mr-1" />
              <div class="body-1">Legendary</div>
            </div>
            <v-row class="items-row">
              <v-col
                md="2"
                v-for="(single_item, index) in card_items[5]"
                :key="'L' + index"
              >
                <v-img
                  style="height: 230px"
                  :src="single_item.rendered_image_url"
                >
                </v-img>
              </v-col>
            </v-row>
          </div>

          <div
            class="chance-row epic mb-8"
            v-if="card_items[4] && card_items[4].length > 0"
          >
            <div class="heading-part d-flex align-center mb-2">
              <DefishboxesCrystalIcon :rarity="'Epic'" :size="3" class="mr-1" />
              <div class="body-1">Epic</div>
            </div>
            <v-row class="items-row">
              <v-col
                md="2"
                v-for="(single_item, index) in card_items[4]"
                :key="'E' + index"
              >
                <v-img
                  style="height: 230px"
                  :src="single_item.rendered_image_url"
                >
                </v-img>
              </v-col>
            </v-row>
          </div>

          <div
            class="chance-row rare mb-8"
            v-if="card_items[3] && card_items[3].length > 0"
          >
            <div class="heading-part d-flex align-center mb-2">
              <DefishboxesCrystalIcon :rarity="'Rare'" :size="3" class="mr-1" />
              <div class="body-1">Rare</div>
            </div>
            <v-row class="items-row">
              <v-col
                md="2"
                v-for="(single_item, index) in card_items[3]"
                :key="'R' + index"
              >
                <v-img
                  style="height: 230px"
                  :src="single_item.rendered_image_url"
                >
                </v-img>
              </v-col>
            </v-row>
          </div>

          <div
            class="chance-row uncommon mb-8"
            v-if="card_items[2] && card_items[2].length > 0"
          >
            <div class="heading-part d-flex align-center mb-2">
              <DefishboxesCrystalIcon :rarity="'Uncommon'" :size="3" class="mr-1" />
              <div class="body-1">Uncommon</div>
            </div>
            <v-row class="items-row">
              <v-col
                md="2"
                v-for="(single_item, index) in card_items[2]"
                :key="'U' + index"
              >
                <v-img
                  style="height: 230px"
                  :src="single_item.rendered_image_url"
                >
                </v-img>
              </v-col>
            </v-row>
          </div>

          <div
            class="chance-row common mb-8"
            v-if="card_items[1] && card_items[1].length > 0"
          >
            <div class="heading-part d-flex align-center mb-2">
              <DefishboxesCrystalIcon :rarity="'Common'" :size="3" class="mr-1" />
              <div class="body-1">Common</div>
            </div>
            <v-row class="items-row">
              <v-col
                md="2"
                v-for="(single_item, index) in card_items[1]"
                :key="'C' + index"
              >
                <v-img
                  style="height: 230px"
                  :src="single_item.rendered_image_url"
                >
                </v-img>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, toRefs} from 'vue'

let loading = ref(false)
let success_popup = ref(false)
const item_count = ref(1)
let limit_error = ref(false)
const rarities = {
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
    }
const rules = {
  check: (value) => {
    if (!value) {
      return 'Amount Required'
    } else if (!value.match(/^[0-9]+$/)) {
      return 'Invalid amount'
    } else {
      return true
    }
  },
}


const props = defineProps(['showed', 'single_card','card_items'])
const {showed, single_card, card_items} = toRefs(props)



const exchangeStore = useExchangeStore()
const web3Store = useWeb3Store()


const rate = computed(() => exchangeStore.exchange_rate)
const acc = computed(() => web3Store.acc)
const balance = computed(() => web3Store.userBalance)


const close = async () => {
  web3Store.setLootboxPopup(false)
}
const countPercent = (item_left, item_all) => {
  let percent = (100 * (item_all - item_left)) / item_all
  return percent
}

const waitAllowance = async (contract, account, to, allowanceNeeded, timesLeft) => {
  if (timesLeft > 1) {
    const currentAllowance = await contract.methods
        .allowance(account, to)
        .call()
    console.log(
        `I want ${allowanceNeeded}, and current is ${currentAllowance} `
    )
    const needed = Number(allowanceNeeded)
    const current = Number(currentAllowance)
    if (current >= needed) {
      return
    }
    await new Promise((res) => setTimeout(res, 1000))
    await this.waitAllowance(
        contract,
        account,
        to,
        allowanceNeeded,
        timesLeft - 1
    )
  }
  throw new Error('wait allowance failed for many times.')
}

const getLootbox = async ()=> {
  const pop = async () => {
    console.log(web3Store.acc,single_card.value._id, item_count.value)
    const is_limit_exceeded_for_me = await $contracts['Lootboxes'].methods
        .isLimitExceeded(
            web3Store.acc,
            single_card.value._id,
            item_count.value
        )
        .call()

    console.log('Limit', is_limit_exceeded_for_me)
    if (is_limit_exceeded_for_me) {
      limit_error.value = single_card.value._id
      throw new Error('Limit exceeded')
    }

    await getBalance()
    let curr_contract
    if (single_card.value.token_name === 'wod') {
      curr_contract = 'WodCoin'
    } else {
      curr_contract = 'BUSDCoin'
    }
    // const currentAllowance = await $contracts[curr_contract].methods
    //     .allowance(this.acc, $contracts["Lootboxes"]._address)
    //     .call();
    // const needed = Number(this.single_card.price * this.item_count);
    // const current = Number(currentAllowance);
    // if (current < needed) {
    await approve($contracts['Lootboxes']._address)
    // }

    await $contracts['Lootboxes'].methods
        .buyLootbox(single_card.value._id, item_count.value)
        .send({ from: web3Store.acc })
  }

  loading.value = true
  pop()
      .then(() => {
        success_popup.value = true
        close()
      })
      .finally(() => {
        loading.value = false
      })
}
const rarityColor = (name)=> {
  return rarities[name].color
}
const getBalance = async ()=> {
  let curr_contract
  if (single_card.value.token_name === 'wod') {
    curr_contract = 'WodCoin'
  } else {
    curr_contract = 'BUSDCoin'
  }
  await web3Store.getBalance(curr_contract, acc)
}

const  approve = async (to) => {
  let curr_contract
  if (single_card.value.token_name === 'wod') {
    curr_contract = 'WodCoin'
  } else {
    curr_contract = 'BUSDCoin'
  }
  await $contracts[curr_contract].methods
      .approve(to, Math.$toWei(single_card.value.price * item_count.value))
      .send({ from: web3Store.acc }),
      await waitAllowance(
          $contracts[curr_contract],
          web3Store.acc,
          to,
          Math.$toWei(single_card.value.price * item_count.value),
          1000
      )
}





</script>

<style lang="scss" scoped>
.v-dialog__content::v-deep {
  ::-webkit-scrollbar {
    width: 3px;
    max-height: 90%;
    margin: 30px 0;
    background: transparent;
  }
  ::-webkit-scrollbar-track {
    background: #20313c;
    border-radius: 30px;
    margin: 21px 0;
  }
  ::-webkit-scrollbar-thumb {
    background: #67e8d3;
    transition: 0.5s;
    max-height: 90%;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #c7c5c5;
    transition: 0.5s;
  }
  .v-dialog {
    max-height: 70% !important;
    border-radius: 32px !important;
  }
}
.rarity-chips {
  justify-content: flex-start;
}
.v-tooltip__content {
  border-radius: 50px;
  padding: 10px !important;
  height: 36px;
  &:before {
    border-top: 8px solid #253f48;
  }
}

.lootbox-popup-inner::v-deep {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.13);
  backdrop-filter: blur(54px);
  overflow: hidden;
  .drop-chance-line {
    p {
      font-family: Colfax;
      font-weight: bold;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
  .items-percent {
    svg {
      transform: scale(1.5);
      margin-left: -10px;
    }
    .info-part {
      .chip-percent {
        font-family: Colfax;
        font-weight: 500;
        font-size: 24px;
        line-height: 20px;
        letter-spacing: 0.04em;
        color: #8ae5fd;
      }
      .chip-name {
        font-family: Colfax;
        font-weight: bold;
        font-size: 12px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #839fb7;
      }
    }
  }
  .item-number {
    .v-input {
      max-height: 36px;
      max-width: 22px;
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .v-input__slot {
        padding: 0;
        .v-text-field__slot {
          margin: 0;
          input {
            max-width: 25px;
            text-align: center;
          }
        }
      }
      .v-text-field__details {
        display: none;
      }
    }
  }
  .count-line {
    .number {
      position: absolute;
      top: 15px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: Colfax;
      font-weight: bold;
      &.left {
        left: 0;
      }
      &.right {
        right: 0;
        color: rgba(103, 232, 211, 0.2);
      }
    }
  }
  .lower-row {
    .price-part {
      p {
        margin: 0;
      }
      .rate-price {
        margin-top: -14px;
        font-size: 12px;
        line-height: 18px;
        font-family: Colfax;
        margin-left: 3px;
      }
    }
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
  z-index: 10;
  position: relative;
}
.box-card {
  border: 1px solid rgba(160, 162, 193, 0.15) !important;
}
.blur_follow {
  background: url('~/assets/images/Blur.png') center no-repeat #12142a;
  background-size: 360%;
  background-repeat: no-repeat;
  background-position: 52% 28%;
  @media (min-width: 1365px) {
    background: none;
  }
}
.lootbox-popup-inner {
  background: linear-gradient(39.79deg, rgba(41, 77, 87, 0.7) 4.57%, rgba(42, 81, 90, 0.32) 89.2%)!important;
  backdrop-filter: blur(54px) !important;
}
@media (max-width: 960px) {
  .lootbox-popup-inner {
    max-height: 65vh;
    overflow-y: scroll;
    .upper-part {
      margin-bottom: 20px;
      flex-direction: column !important;
      .box-content {
        max-width: 100% !important;
        width: 100%;
        .lower-line {
          flex-direction: column !important;
          align-items: flex-start !important;
          .v-btn.primary {
            min-height: 47px !important;
            margin-top: 10px !important;
          }
        }
      }
    }
    .cards-chance {
      .chance-row {
        .items-row {
          .col {
            max-width: 48% !important;
            .v-image.v-responsive::v-deep {
              max-width: 100% !important;
              height: 210px !important;
              .v-image__image--cover {
                background-size: contain !important;
                background-position: left center !important;
              }
            }
          }
        }
      }
    }
    .drop-chance-line {
      .rarity-chips {
        justify-content: space-between;
        .single-rarity {
          width: 48%;
          margin-bottom: 10px;
          margin-right: 0 !important;
        }
      }
    }
    .v-image.v-responsive::v-deep {
      max-width: 100% !important;
      height: 210px !important;
    }
    .lower-row {
      flex-direction: column !important;
    }
  }
}
</style>
