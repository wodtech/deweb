<template>
  <nuxt-link :to="{ path: 'careers/'+ card.slug.toLowerCase() }"  v-on="$listeners" class="career-info-card py-5 px-7 d-flex align-center justify-space-between">
  <div class="w-70">
    <div class="title text-h5">
      {{card.title}}
    </div>
    <div
      v-if="card.project_name!==''"
      style="opacity: 0.7"
      class="body-2"
    >
      {{card.project_name}}
    </div>
  </div>
  <div class="w-30">
    <div v-if="card.office && card.office.length">
      Office: <span class="link-color">{{card.office.join(', ')}}</span></div>
    <div v-if="card.remote && card.remote.length">
      Remote: <span class="link-color">{{card.remote.join(', ')}}</span></div>
  </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    card : {}
  }
}
</script>

<style scoped lang="scss">
.career-info-card {
  cursor: pointer;
  background: #FFFFFF;
  border-radius: 20px;
}
</style>
