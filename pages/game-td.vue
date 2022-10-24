<template>
  <div class="td-page">
    <GameMainFrame  :game="game[0]" />
    <ScreenshotsVideos title="td" :cards="cards" :game="game[0]"/>
    <Blog :data="blogs" />
    <FollowUs/>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
