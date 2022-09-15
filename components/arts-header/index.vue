<template>
  <div class="arts-header d-flex flex-column --posr">
    <img class="bg" src="~/assets/images/arts-back.jpg" alt="">
    <v-container>
      <div class="d-flex flex-column">
        <div class="text-h3">
          game arts
        </div>
        <div class="body-1">
          Our game arts are the heart, bones and brain
          of the visual elements you see while playing our games. Without our visual game artists, the game
          would be just an ideas in a designer's head. 
        </div>
      </div>
    </v-container>
  </div>
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