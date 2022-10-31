<template>
  <div class="arts-page">
    <ArtsHeader/>
    <GameCards :games="games"/>
    <ArtsSlider :arts="arts"/>
  </div>
</template>

<script>
import ArtsHeader from '~/components/arts-header/index.vue';
import ArtsSlider from '~/components/arts-slider/index.vue';
import GameCards from '~/components/game-cards/index.vue';
export default {
  components: {
    ArtsHeader,
    ArtsSlider,
    GameCards
},
  async asyncData({ $content }) {
    const arts = await $content('arts').fetch()
    const games = await $content('games').fetch()

    return {
      arts,
      games,
    }
  },


  metaInfo() {
    return {
      title: 'Arts',
    }
  },
}
</script>
