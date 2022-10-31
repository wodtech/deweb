<template>
  <div class="wod-page">
    <GameMainFrame active-link="https://worldofdefish.com/" :game="game[0]">
      <template #additional-links>
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
    <ScreenshotsVideos :links="links" title="wod" :cards="cards" :game="game[0]" />
    <Blog :data="blogs" />
    <FollowUs/>
  </div>
</template>

<script>
export default {
  components: {
    GameMainFrame: () => import('~/components/game-main-frame'),
    ScreenshotsVideos: () => import ('~/components/screenshots-videos'),
    Blog: () => import('~/components/blog'),
    FollowUs: () => import('~/components/follow-us')
  },
  data() {
    return {
      links: {
        follow: [
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
        community: [
          {title: 'Announcements', link: 'https://t.me/DefishANN'},
          {title: 'Community', link: 'https://t.me/worldofdefish'},
        ],
      },

      cards: [
        {
          id: 1,
          img: require('~/assets/images/wod-screenshots/1.png'),
        },
        {
          id: 2,
          img: require('~/assets/images/wod-screenshots/2.png'),
        },
        {
          id: 3,
          img: require('~/assets/images/wod-screenshots/3.png'),
        },
        {
          id: 4,
          img: require('~/assets/images/wod-screenshots/4.png'),
        },
        {
          id: 5,
          img: require('~/assets/images/wod-screenshots/5.png'),
        }
      ],
    }
  },
  async asyncData({ $content }) {
    const game = await $content('games').where({title: 'World of Defish'}).fetch()
    const blogs = await $content('blog').only(['title', 'shot_description', 'image', 'slug']).limit(3).fetch()

    return {
      game,
      blogs
    }
  },

  metaInfo() {
    return {
      title: 'World of Defish',
    }
  },
}
</script>
