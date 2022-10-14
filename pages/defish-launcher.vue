<template>
  <div class="index-page">
    <MainFrame/>
    <LaunchWindow/>
    <InfoArticles/>
    <ChatSection/>
    <DefishSection/>
    <Arts :arts="arts"/>
    <FollowUs/>
  </div>
</template>

<script>
export default {
  components: {
    MainFrame: () => import("~/components/defish-launcher/main-frame"),
    LaunchWindow: () => import("~/components/defish-launcher/launch-window"),
    InfoArticles: () => import("~/components/defish-launcher/info-articles"),
    ChatSection: () => import("~/components/defish-launcher/chat-section"),
    DefishSection: () => import("~/components/defish-launcher/defish-section"),
    Arts: () => import("~/components/arts-stripe"),
    FollowUs: () => import('~/components/follow-us'),
  },
  async asyncData({ $content }) {
    const arts = await $content('arts').fetch()

    return {
      arts
    }
  },
}
</script>
