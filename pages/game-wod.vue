<template>
  <div class="wod-page">
    <GameMainFrame/>
    <ScreenshotsVideos/>
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
    const games = await $content('games').fetch()
    const blogs = await $content('blog').only(['title', 'shot_description', 'image', 'slug']).limit(3).fetch()

    return {
      games,
      blogs
    }
  },
}
</script>
