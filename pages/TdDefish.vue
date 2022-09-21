<template>
  <div class="index-page">
    <MainFrame/>
    <ScreenshotsVideos/>
    <Blog/>
    <FollowUs/>
  </div>
</template>

<script>
export default {
  components: {
    MainFrame: () => import('~/components/main-frame'),
    ScreenshotsVideos: () => import ('~/components/screenshots-videos'),
    Blog: () => import('~/components/blog'),
    FollowUs: () => import('~/components/follow-us')
  },
  async asyncData({ $content }) {
    const games = await $content('games').fetch()

    return {
      games,
    }
  },
}
</script>
