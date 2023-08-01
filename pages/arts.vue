<template>
  <div class="arts-page">
    <ArtsHeader/>
    <GameCards :games="games"/>
    <ArtsSlider :arts="arts"/>
  </div>
</template>

<script setup>

 import {useAsyncData} from "nuxt/app";

 const { data: arts } = await useAsyncData(
     'arts',
     () => queryContent('/arts').find()
 )
 const { data: games } = await useAsyncData(
     'games',
     () => queryContent('/games').find()
 )

</script>
