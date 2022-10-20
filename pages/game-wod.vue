<template>
  <div class="wod-page">
    <GameMainFrame :game="game[0]" />
    <ScreenshotsVideos :game="game[0]" />
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
  async asyncData({ $content }) {
    const game = await $content('games').where({title: 'World of Defish'}).fetch()
    const blogs = await $content('blog').only(['title', 'shot_description', 'image', 'slug']).limit(3).fetch()

    return {
      game,
      blogs
    }
  },
}
</script>
