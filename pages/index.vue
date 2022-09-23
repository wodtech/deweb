<template>
  <div class="index-page">
    <MainFrame/>
    <Games :games="games"/>
    <ArtsStripe/>
    <LaunchWindow/>
    <Blog/>
    <Subs/>
  </div>
</template>

<script>
import ArtsStripe from '~/components/arts-stripe';
export default {
  components: {
    MainFrame: () => import("~/components/main-frame"),
    ScreenshotsVideos: () => import("~/components/screenshots-videos"),
    LaunchWindow: () => import("~/components/launch-window"),
    Blog: () => import("~/components/blog"),
    Games: () => import("~/components/games"),
    Subs: () => import("~/components/subs"),
    ArtsStripe,
  },
  async asyncData({ $content }) {
    const games = await $content('games').fetch()

    return {
      games,
    }
  },
}
</script>
