<template>
  <div class="index-page">
    <MainFrame/>
    <InfoArticles />
    <DefishUniverse />
    <FollowUs/>
  </div>
</template>

<script>
export default {
  components: {
    MainFrame: () => import("~/components/for-developers/main-frame"),
    InfoArticles: () => import("~/components/for-developers/info-articles"),
    DefishUniverse: () => import('~/components/for-developers/defish-universe'),
    FollowUs: () => import('~/components/follow-us'),
  },
}
</script>
