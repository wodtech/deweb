<template>
  <div class="games">
    <GamesWodGame :data="games.find(n => n.title === 'World of Defish')"/>
    <GamesTdGame :data="games.find(n => n.title === 'Tower Defish')"/>
  </div>
</template>

<script setup>

const { data: games } = await useAsyncData(
    'games',
    () => queryContent('/games').find()
);

</script>

