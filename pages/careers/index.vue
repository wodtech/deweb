<template>
  <div class="careers-page"  >
    <MainFrame />
    <v-container style="padding-top: 145px" class="--cnt">
      <CareersContent :careers="careers" :careers-groups="careerGroups" />
      <AboutUs />
      <Team />
      <OurEvents />
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    MainFrame: () => import('~/components/careers/main-frame'),
    CareersContent: () => import('~/components/careers/careers-content'),
    AboutUs: () => import('~/components/careers/about-us'),
    Team: () => import('~/components/careers/team'),
    OurEvents: () => import('~/components/careers/our-events'),
  },
  async asyncData({ $content }) {
    const careers = await $content('careers').fetch()
    const careerGroups = await $content('careers/groups').fetch()

    return {
      careers,
      careerGroups,
    }
  },
}
</script>
<style scoped lang="scss">
.careers-page {
  width: 100%;
  background-color: #f0f0f0;
  position: relative;
}
</style>
