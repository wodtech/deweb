<template>
  <div class="index-page">
    <MainFrame/>
    <Games :games="games"/>
    <ArtsStripe :arts="arts"/>
    <LaunchWindow/>
    <PlayerTalk/>
    <Blog/>
    <FollowUs/>
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
    Careers: () => import("~/components/subs"),
    CareersContent: () => import("~/components/careers/careers-content"),
    FollowUs: () => import("~/components/follow-us"),
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
