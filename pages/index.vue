<template>
  <div class="index-page">
    <MainFrame/>
    <ScreenshotsVideos/>
    <Games :games="games"/>
    <Games/>
    <LaunchWindow/>
    <Blog/>
    <Subs/>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const games = await $content('games').fetch()

    return {
      games,
    }
  },
  components: {
    MainFrame: () => import('~/components/main-frame'),
    ScreenshotsVideos: () => import ('~/components/screenshots-videos'),
    LaunchWindow: () => import('~/components/launch-window'),
    Blog: () => import('~/components/blog'),
    Games: () => import('~/components/games'),
    Subs: () => import('~/components/subs'),
  },
}
</script>
