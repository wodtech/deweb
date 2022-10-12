<template>
  <div class="terms">
    <div class="header"></div>
    <div class="terms-content">
      <div class="title text-h4">WHAT</div>
    </div>
    <SinglePageComponent :career="{test: 'test'}" />
  </div>
</template>

<script>

 export default {
   components: {
     SinglePageComponent: () => import('~/components/careers/single-page-content'),
   },
   // async asyncData({params, $content }) {
   //   const career = await $content('careers').fetch()
   //   return {
   //     career
   //   }
   // },
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #090F1B;
  height: 90px;
  width: 100%;
}
.terms-content {
  margin: 56px 120px;
  padding: 60px 80px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
}
</style>
