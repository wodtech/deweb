<template>
  <div class="wod-page text-white">
    <GameMainFrame active-link="https://game.worldofdefish.com/" :game="game">
      <template #additional-links>
        <v-btn
          to="/game-wod/defishboxes"
          max-width="100px"
          large
          class="large-button caption font-weight-light rounded-pill mr-2"
        >
          Buy Box
        </v-btn>
        <v-btn
          target="_blank"
          href="https://pancakeswap.finance/swap?outputCurrency=0x298632d8ea20d321fab1c9b473df5dbda249b2b6"
          max-width="100px"
          large
          class="large-button caption font-weight-light rounded-pill mr-2"
        >
          Buy $WOD
        </v-btn>
      </template>
    </GameMainFrame>
    <ScreenshotsVideos :links="links" title="wod" :cards="cards" :game="game" />
    <Blog :data="blogs" />
    <FollowUs/>
  </div>
</template>

<script setup>
import screen1 from '~/assets/images/wod-screenshots/1.png'
import screen2 from '~/assets/images/wod-screenshots/2.png'
import screen3 from '~/assets/images/wod-screenshots/3.png'
import screen4 from '~/assets/images/wod-screenshots/4.png'
import screen5 from '~/assets/images/wod-screenshots/5.png'


const links = {
  follow: [
    {
      id: 1,
      link: 'https://world-of-defish.gitbook.io/world-of-defish/',
      text: 'Whitepaper',
    },
    {
      id: 2,
      link: 'https://defish.games/game-wod/defishboxes/',
      text: 'Buy Box',
    },
    {
      id: 3,
      link: 'https://pancakeswap.finance/swap?outputCurrency=0x298632d8ea20d321fab1c9b473df5dbda249b2b6',
      text: 'Buy $WOD',
    },
    {
      id: 4,
      link: 'https://marketplace.worldofdefish.com/',
      text: 'Marketplace',
    },
    {
      id: 5,
      link: 'https://worldofdefish.com/defishboxes/',
      text: 'Defish Box',
    },
  ],
      community: [
    {title: 'Announcements', link: 'https://t.me/DefishANN'},
    {title: 'Community', link: 'https://t.me/worldofdefish'},
  ],
}

const cards = [
  {
    id: 1,
    img: screen1,
  },
  {
    id: 2,
    img: screen2,
  },
  {
    id: 3,
    img: screen3,
  },
  {
    id: 4,
    img: screen4,
  },
  {
    id: 5,
    img: screen5,
  }
]
const title = 'World of Defish'
const { data: game } = await useAsyncData(
    'games',
    () => queryContent('/games').where({title: 'World of Defish'}).findOne()
);
const { data: blogs } = await useAsyncData(
    'blog',
    () => queryContent('/blog').only(['title', 'shot_description', 'image', '_path']).limit(3).find()
);
console.log(blogs)
console.log(game)
</script>
