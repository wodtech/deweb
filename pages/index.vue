<template>
  <div class="index-page">
    <MainFrame/>
    <Games :games="games"/>
    <ArtsStripe :arts="arts"/>
    <LaunchWindow/>
    <PlayerTalk/>
    <Blog/>
    <Subs/>
  </div>
</template>

<script>
import ArtsStripe from '~/components/arts-stripe';
export default {
  components: {
    MainFrame: () => import("~/components/main-frame"),
    LaunchWindow: () => import("~/components/launch-window"),
    Blog: () => import("~/components/blog"),
    PlayerTalk: () => import("~/components/player-talk"),
    Games: () => import("~/components/games"),
    Subs: () => import("~/components/subs"),
    Careers: () => import("~/components/subs"),
    CareersContent: () => import("~/components/careers/careers-content"),
    ArtsStripe,
  },
  async asyncData({ $content }) {
    const games = await $content('games').fetch()
    const arts = await $content('arts').fetch()

    return {
      games,
      arts
    }
  },
}
</script>
