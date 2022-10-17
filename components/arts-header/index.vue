<template>
  <v-card dark elevation="0" tile class="arts-header d-flex flex-column --posr pt-16">
    <img class="bg" src="~/assets/images/arts-back.jpg" alt="">
    <v-container class="--posr d-flex flex-column justify-center" style="height: 100%;">
      <div class="d-flex flex-column">
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

  height: 80vh;

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
