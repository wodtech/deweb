<template>
  <div class="career-single">
     <div class="career-content">
       <SinglePageComponent :career="career" />
     </div>
  </div>
</template>

<script>

 export default {
   components: {
     SinglePageComponent: () => import('~/components/careers/single-page-content'),
   },
   async asyncData({ $content, params }) {
     const career = await $content('careers', params.slug).fetch()
      return { career }
   },
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #090F1B;
  height: 90px;
  width: 100%;
}
.career-content {
  margin: 106px 120px 56px 120px;
  padding: 60px 80px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  @media screen and (max-width: 960px) {
    margin: 106px 25px 56px 25px;
  }
}
</style>
