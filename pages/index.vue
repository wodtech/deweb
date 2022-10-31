<template>
  <div class="index-page">
    <MainFrame @scrollTo="scrollDown" />
    <Games id="gamesID" :games="games"/>
    <ArtsStripe :arts="arts"/>
    <LaunchWindow/>
    <PlayerTalk/>
    <Blog :data="blogs "/>
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
  methods: {
    scrollDown() {
      const gamesID = document.getElementById('gamesID')
      const y = gamesID.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y,
        behavior: 'smooth'
      });

    }
  },
  async asyncData({ $content }) {
    const games = await $content('games').fetch()
    const arts = await $content('arts').fetch()
    const blogs = await $content('blog').only(['title', 'shot_description', 'image', 'slug']).limit(3).fetch()

    return {
      games,
      arts,
      blogs
    }
  },
  head() {
    return {
      title: 'Home',
    }
  },
}
</script>
