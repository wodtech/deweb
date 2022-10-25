<template>
  <v-card dark elevation="0" tile class="arts-header d-flex flex-column justify-center --posr pt-16">
    <img class="bg" src="~/assets/images/arts.png" alt="">
    <v-container class="--posr d-flex flex-column justify-center" style="height: 100%;">
      <div class="d-flex flex-column" style="z-index: 1">
        <div class="text-h1 pb-6">
          game arts
        </div>
        <div class="body-1" style="max-width: 500px;">
          Our game arts are the heart, bones and brain
          of the visual elements you see while playing our games. Without our visual game artists, the game
          would be just an ideas in a designer's head.
        </div>
      </div>
      <v-sheet height="40%" color="transparent"></v-sheet>
    </v-container>
  </v-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.arts-header {
  min-height: 80vh;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 0;
    position: absolute;
    background: linear-gradient(68deg, #14172d 27%, rgba(20, 23, 45, 0.9307073171) 41%, rgba(20, 23, 45, 0.667401995) 54%, rgba(20, 23, 45, 0) 63%);
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>
