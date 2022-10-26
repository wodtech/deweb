<template>
  <div class="td-page">
    <GameMainFrame  :game="game[0]">
      <template #additional-links>
        <v-btn class="app-icon mr-4"  icon>
          <v-icon color="#D2C7C7" size="27px">mdi-apple</v-icon>
        </v-btn>
        <v-btn class="app-icon" icon>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M3.27246 14.5499C3.27246 15.4064 4.00885 16.1071 4.90888 16.1071H5.45436V18.7025C5.45436 19.419 6.06474 20.0001 6.81805 20.0001C7.57135 20.0001 8.18173 19.419 8.18173 18.7025V16.1071H9.81816V18.7025C9.81816 19.419 10.4285 20.0001 11.1818 20.0001C11.9351 20.0001 12.5455 19.419 12.5455 18.7025V16.1071H13.091C13.991 16.1071 14.7274 15.4064 14.7274 14.5499V6.76392H3.27246V14.5499Z" fill="white"/>
              <path d="M16.6361 6.50439C15.8828 6.50439 15.2725 7.08549 15.2725 7.80206V12.9927C15.2725 13.7093 15.8828 14.2904 16.6361 14.2904C17.3894 14.2904 17.9998 13.7093 17.9998 12.9927V7.80206C17.9998 7.08549 17.3894 6.50439 16.6361 6.50439Z" fill="white"/>
              <path d="M1.36369 6.50439C0.610386 6.50439 0 7.08549 0 7.80206V12.9927C0 13.7093 0.610386 14.2904 1.36369 14.2904C2.11699 14.2904 2.72737 13.7093 2.72737 12.9927V7.80206C2.72737 7.08549 2.11699 6.50439 1.36369 6.50439Z" fill="white"/>
              <path d="M12.0999 1.66659L12.836 0.384237C12.9083 0.258363 12.8594 0.100826 12.7274 0.0320497C12.5954 -0.0367266 12.4293 0.00947052 12.3573 0.135344L11.6278 1.40602C10.8401 1.01776 9.94825 0.795078 8.99994 0.795078C8.05164 0.795078 7.15979 1.01776 6.37212 1.40602L5.64255 0.135344C5.57 0.00973006 5.40445 -0.0372457 5.27244 0.0320497C5.14044 0.100826 5.09162 0.258363 5.16389 0.384237L5.90001 1.66659C4.32059 2.63699 3.27246 4.32317 3.27246 6.24528H14.7274C14.7274 4.32317 13.6793 2.63699 12.0999 1.66659ZM6.54531 4.42854C6.24421 4.42854 5.99983 4.196 5.99983 3.90948C5.99983 3.62295 6.24421 3.39041 6.54531 3.39041C6.84641 3.39041 7.09078 3.62295 7.09078 3.90948C7.09078 4.196 6.84641 4.42854 6.54531 4.42854ZM11.4546 4.42854C11.1535 4.42854 10.9091 4.196 10.9091 3.90948C10.9091 3.62295 11.1535 3.39041 11.4546 3.39041C11.7557 3.39041 12.0001 3.62295 12.0001 3.90948C12.0001 4.196 11.7557 4.42854 11.4546 4.42854Z" fill="white"/>
            </g>
          </svg>
        </v-btn>
      </template>
    </GameMainFrame>
    <ScreenshotsVideos :links="links" title="td" :cards="cards" :game="game[0]"/>
    <Blog :data="blogs" />
    <FollowUs/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        follow: [
          {
            id: 1,
            disabled: true,
            link: '#nothing-here',
            text: 'Whitepaper',
          },
          {
            id: 2,
            disabled: true,
            link: '#nothing-here',
            text: 'Download',
          },
        ],
        community: [
          {title: 'Announcements', link: 'https://t.me/DefishANN'}
        ],
      },
      cards: [
        {
          id: 1,
          img: require('~/assets/images/td-screenshots/1.png'),
        },
        {
          id: 2,
          img: require('~/assets/images/td-screenshots/2.png'),
        },
        {
          id: 3,
          img: require('~/assets/images/td-screenshots/3.png'),
        },
        {
          id: 4,
          img: require('~/assets/images/td-screenshots/4.png'),
        },
        {
          id: 5,
          img: require('~/assets/images/td-screenshots/5.png'),
        },
        {
          id: 6,
          img: require('~/assets/images/td-screenshots/6.png'),
        }
      ],
    }
  },
  components: {
    GameMainFrame: () => import('~/components/game-main-frame'),
    ScreenshotsVideos: () => import ('~/components/screenshots-videos'),
    Blog: () => import('~/components/blog'),
    FollowUs: () => import('~/components/follow-us')
  },
  async asyncData({ $content }) {
    const game = await $content('games').where({title: 'Tower Defish'}).fetch()
    const blogs = await $content('blog').only(['title', 'shot_description', 'image', 'slug']).limit(3).fetch()

    return {
      game,
      blogs
    }
  },
}
</script>
<style>
.app-icon {
  background: rgba(229, 229, 230, 0.2) !important;
}
</style>
