<template>
  <div class="games">
    <v-container class="--cnt">
      <WodGame class="pb-16" :data="games.find(n => n.title === 'World of Defish')"/>
      <TdGame :data="games.find(n => n.title === 'Tower Defish')"/>
    </v-container>
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