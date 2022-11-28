<template>
  <div class="games">
      <WodGame :data="games.find(n => n.title === 'World of Defish')"/>
      <TdGame :data="games.find(n => n.title === 'Tower Defish')"/>
  </div>
</template>

<script>
export default {
  components: {
    WodGame: () => import('./WodGame.vue'),
    TdGame: () => import('./TdGame.vue'),
  },
  // data: () => ({
  //   games: ,
  // }),
  props: {
    games: {},
  },
}
</script>

<style>

</style>
