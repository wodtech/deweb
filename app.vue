<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>

const title = 'Web3 Gaming Studio'



function scrollDown() {
  const gamesID = document.getElementById('gamesID')
  const y = gamesID.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: 'smooth'
  });
}
</script>
<style lang="scss" scoped>
body{
  color: white;
}
</style>


<!--export default {-->
<!--  // components: {-->
<!--  //   MainFrame: () => import("~/components/main-frame"),-->
<!--  //   LaunchWindow: () => import("~/components/launch-window"),-->
<!--  //   Blog: () => import("~/components/blog"),-->
<!--  //   PlayerTalk: () => import("~/components/player-talk"),-->
<!--  //   Games: () => import("~/components/games"),-->
<!--  //   Careers: () => import("~/components/subs"),-->
<!--  //   CareersContent: () => import("~/components/careers/careers-content"),-->
<!--  //   FollowUs: () => import("~/components/follow-us"),-->
<!--  //   ArtsStripe,-->
<!--  // },-->
<!--  methods: {-->
<!--    scrollDown() {-->
<!--      const gamesID = document.getElementById('gamesID')-->
<!--      const y = gamesID.getBoundingClientRect().top + window.scrollY;-->
<!--      window.scroll({-->
<!--        top: y,-->
<!--        behavior: 'smooth'-->
<!--      });-->

<!--    }-->
<!--  },-->

<!--}-->
<!--</script>-->
