<template>
  <v-row class="cards-wrapper d-flex">
    <v-col class="d-flex align-center col-md-7 col-12">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 5 : 20"
          style="transition: box-shadow 0.3s ease-in-out"
          rounded="xl"
          outlined
          height="100%"
          max-width="100%"
          class="pa-sm-14 pa-6 d-flex justify-space-between flex-column"
        >
          <div class="top-text d-flex flex-column pb-4">
            <span class="text-h3 mb-4">{{ firstCard.titleTop }}</span>
            <span class="first-top-desc body-1" >
               <ContentRenderer :value="game" />
            </span>
          </div>
          <div class="bottom-text d-flex flex-column justify-end">
            <span class="first-bottom-title text-h3 mb-4">{{
              firstCard.titleBottom
            }}</span>
            <v-row class="d-flex">
              <v-col v-for="text in game.features" :key="text" cols="12">
                <span class="list-el">{{ text }}</span>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-hover>
    </v-col>
    <v-col class="col-md-5 col-12">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 10 : 20"
          rounded="xl"
          outlined
          width="100%"
          style="transition: box-shadow 0.3s ease-in-out"
          class="d-flex flex-column flex-grow-1 pa-sm-14 pa-6"
        >
          <span class="text-h3 mb-4">{{ secondCard.titleTop }}</span>
          <CommonDefishLinks variant="gray" class="flex-grow-1" />

          <div class="d-flex flex-wrap w-100">
            <div
              v-for="btn in links.follow"
              :key="btn.id"
              class="d-flex pt-6"
            >
              <v-btn
                target="_blank"
                :disabled="btn.disabled"
                :href="btn.link"
                max-width="100px"
                large
                class="large-button caption font-weight-light rounded-pill mr-2"
              >
                {{ btn.text }}
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 5 : 20"
          rounded="xl"
          outlined
          min-height="500px"
          width="100%"
          style="transition: box-shadow 0.3s ease-in-out"
          class="d-flex flex-column flex-grow-1 mt-6 pa-sm-14 pa-6"
        >
          <span class="text-h3 mb-4">{{ thirdCard.titleTop }}</span>
          <div class="d-flex flex-column flex-grow-1">
            <div class="d-flex flex-column flex-grow-1">
              <div class="d-flex subtitle-1">Game</div>
              <div class="d-flex align-center">
                <span v-for="(el, i) in game.tags" :key="i" class="mr-1">
                  <a :style="pinkClass(true)"
                    >{{ el }}<span v-if="i !== game.tags.length-1">,</span></a
                  >
                </span>
              </div>
            </div>
            <div
              v-for="el in thirdCard.list"
              :key="el"
              class="d-flex flex-column flex-grow-1"
            >
              <div class="d-flex subtitle-1">{{ el.title }}</div>
              <a
                href
                class="d-flex flex-grow-1 list-el"
                :style="pinkClass(el.isPink)"
                >{{ el.desc }}</a
              >
            </div>
            <div class="d-flex flex-column flex-grow-1">
              <div class="d-flex subtitle-1">Community</div>
              <div class="d-flex align-center">
                <span v-for="(el, i) in links.community" :key="el.title" class="mr-1">
                  <a target="_blank" :href="el.link" :style="pinkClass(true)"
                    >{{ el.title }}<span v-if="i !== links.community.length-1">,</span></a
                  >
                </span>
              </div>
            </div>
          </div>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script setup>
const props =  defineProps(['game', 'links'])
const {game, links} = props


const firstCard = {
  titleTop: 'game description:',
  descTop:
      'Feel a real Storm of the Seven Seas, hunting for mystical NFT Fish, crafting, compete and filling your pocket with $WOD doubloons. Welcometo World of Defish, play-to earn gaming universe running on BSC.',
  titleBottom: 'core features:',
  descBottom: [
    'Ranking System',
    'Guilds System',
    'Crafting Mechanism',
    'Marketplace',
    'NFT',
    '$WOD Token',
  ],
}

const secondCard = {
  titleTop: 'follow us  there:',
  btns: [
    {
      id: 1,
      link: 'https://world-of-defish.gitbook.io/world-of-defish/',
      text: 'Whitepaper',
    },
    {
      id: 2,
      link: 'https://pancakeswap.finance/swap?outputCurrency=0x298632d8ea20d321fab1c9b473df5dbda249b2b6',
      text: 'Buy $WOD',
    },
    {
      id: 3,
      link: 'https://marketplace.worldofdefish.com/',
      text: 'Marketplace',
    },
    {
      id: 4,
      link: 'https://worldofdefish.com/defishboxes/',
      text: 'Defish Box',
    },
  ],
}

const thirdCard = {
  titleTop: 'information:',
  list: [
    {
      title: 'Developer:',
      desc: 'Defish Games',
      isPink: false,
    },
    {
      title: 'Languages:',
      desc: 'English',
      isPink: false,
    },
  ],
}

const pinkClass = (isPink) => {
  if (isPink) {
    return 'color: rgba(233, 68, 133, 1)'
  }
  return 'color: black'
}
</script>

<style scoped lang="scss">
.list-el {
  font-weight: 500;
  font-size: 18px;
}
</style>
