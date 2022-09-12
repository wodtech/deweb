<template>
  <div class="games">
    <v-container class="--cnt">
      <WodGame class="pb-16" :data="games[0]"/>
      <TdGame :data="games[1]"/>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    games: [
      {
        name: 'World of Defish',
        tags: ['RPG', 'MMO', 'Fantasy'],
      },
      {
        name: 'Tower Defish',
        tags: ['Tower Defense', 'Strategy', 'Fantasy'],
      },
    ],
  }),
  components: {
    WodGame: () => import('./WodGame.vue'),
    TdGame: () => import('./TdGame.vue'),
  },
}
</script>

<style>

</style>