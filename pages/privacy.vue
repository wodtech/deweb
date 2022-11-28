<template>
  <div class="terms">
    <div class="header"></div>
    <div class="terms-content">
      <div class="title text-h4">PRIVACY POLICY</div>
      <div class="text mt-4">
        <nuxt-content :document="privacy[0]"/>
      </div>
    </div>
    <FollowUs/>
  </div>
</template>

<script>
export default {
  components: {
    FollowUs: () => import('~/components/follow-us'),
  },
  async asyncData({ $content }) {
    const privacy = await $content('content').where({title: 'privacy' }).fetch()
    return { privacy }
  },

  head() {
    return {
      title: 'Privacy',
    }
  },
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
