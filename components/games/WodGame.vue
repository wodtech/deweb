<template>
<div class="wod-game-section d-flex align-center --posr">
  <div class="bg-container">
    <img class="bg-left" :src="require('~/assets/images/fishes-left.png')">
    <img class="bg-right" :src="require('~/assets/images/fishes-horisontal.png')">
  </div>
  <v-container class="--cnt inside">
    <v-row>
      <v-col md="6" sm="4" cols="12" class="d-flex flex-column justify-center">
        <v-card color="grey" rounded="xl" width="100%">
          <v-img :src="require('~/assets/images/wod-preview.jpg')" :aspect-ratio="1.5"></v-img>
        </v-card>
      </v-col>
      <v-col offset-sm="1" md="5" sm="7" cols="12" offset="0" class="d-flex flex-column justify-center">
        <div class="text-h3 mb-8">
          {{ data.title }}
        </div>
        <div class="d-flex mb-4">
          <v-chip small class="mr-2" :key="n" v-for="n in data.tags" color="grey">
            {{ n }}
          </v-chip>
        </div>
        <div class="body-1 mb-4">
          {{ data.short_description }}
        </div>
        <div class="d-flex">
          <v-btn
            href="https://game.worldofdefish.com/"
            target="_blank"
            x-large
            rounded
            class="play-btn font-weight-light rounded-pill mr-2" >PLAY NOW</v-btn>
          <v-btn
            to="/game-wod"
            nuxt
            style="background: white;min-width: 160px"
            elevation="0"
            text
            rounded
            x-large color="black">
            learn more
          </v-btn>
          <!-- asd -->
        </div>
      </v-col>
    </v-row>
  </v-container>

</div>
</template>

<script>
export default {
  props: {
    data: {},
  },
}
</script>

<style lang="scss" scoped>
.wod-game-section {
  width: 100%;
  height: 100vh;
  background: white;
  .bg-container {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .bg {
      &-left {
        position: absolute;
        left: 0;
        top: 0;
      }
      &-right {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }

}
</style>
