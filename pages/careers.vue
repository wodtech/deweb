<template>
  <div class="index-page">
    <MainFrame/>
    <CareersContent
      :careers="careers"
      :careers-groups="careerGroups"
    />
  </div>
</template>

<script>
export default {
  components: {
    MainFrame: () => import("~/components/careers/main-frame"),
    CareersContent: () => import("~/components/careers/careers-content")
  },
  async asyncData({ $content }) {
    const careers = await $content('careers').fetch()
    const careerGroups = await $content('careers/groups').fetch()

    return {
      careers,
      careerGroups
    }
  },
}
</script>
