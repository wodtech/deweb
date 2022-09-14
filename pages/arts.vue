<template>
  <div class="arts-page">
    <ArtsSlider/>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const games = await $content('games').fetch()

    return {
      games,
    }
  },
  components: {
    ArtsSlider: () => import('~/components/arts-slider'),
  },
}
</script>
