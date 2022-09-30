<template>
  <div class="index-page">
    <MainFrame/>
    <InfoArticles />
    <LaunchWindow/>
    <Blog/>
    <Subs/>
  </div>
</template>

<script>
export default {
  components: {
    MainFrame: () => import("~/components/for-developers/main-frame"),
    ScreenshotsVideos: () => import("~/components/screenshots-videos"),
    LaunchWindow: () => import("~/components/launch-window"),
    Blog: () => import("~/components/blog"),
    InfoArticles: () => import("~/components/for-developers/info-articles"),
    Subs: () => import("~/components/subs"),
  },
  async asyncData({ $content }) {
    const games = await $content('games').fetch()

    return {
      games,
    }
  },
}
</script>
