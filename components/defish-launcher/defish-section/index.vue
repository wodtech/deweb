<template>
  <div style="background: #192438" class="w-100 --posr">
    <v-container style="z-index: 0;" class="py-16 --posr d-flex flex-column align-center">
<!--      <div class="bg-container">-->
<!--        <img class="bg" :src="require('~/assets/images/fish-bg-launcher.png')"></img>-->
<!--      </div>-->
      <v-card color="transparent" class="w-70 card d-flex flex-column --posr" elevation="10"   rounded="xl" style="height: 400px" >
        <img style="position: absolute;top:0;left:0" class="w-100 h-100" src="~/assets/images/defish-launcher/border.png" alt="">
        <v-row class="w-100 h-100">
          <v-col cols="6" class="py-12 pl-16 pr-6 white--text">
            <div class="text-h4">
              LOREM <span class="pink--text">IPSUM</span><br/>
              DOLOR SIT AMET
            </div>
            <div class="body-2">
              Feel a real Storm of the Seven Seas, hunting for lorem mystical NFT Fish, crafting,
              compete and filling your pocket with $WOD doubloons.
              Welcome to World of Defish, play-to earn gaming universe running on BSC.
              <br/><br/>
              Feel a real Storm of the Seven Seas, hunting for lorem mystical NFT Fish, crafting, compete.
            </div>
          </v-col>
          <v-col cols="6" class="--posr pa-10">
            <v-img class="w-100" :src="tdImage" alt="td-preview"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tdImage: require('~/assets/images/td-preview.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-container {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;

  overflow: hidden;
  .bg {
    max-width: 700px;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
}
.card {
  // max-width: 500px;
  height: 100%;
  position: relative;
  background-clip: padding-box;
  //background-image: url("~/assets/images/defish-launcher/border.png");
  //background-repeat: no-repeat;
  //background-size: contain;
  //&:before {
  //  content: "";
  //  position: absolute;
  //  top: 0;
  //  right: 0;
  //  bottom: 0;
  //  left: 0;
  //  z-index: -1;
  //  margin: -2px; /* same as border width */
  //  border-radius: inherit; /* inherit container box's radius */
  //  background: linear-gradient(to left, rgba(255, 226, 238, 0.01), rgba(244, 50, 127, 1));
  //}
}

.launch-window {
  overflow: hidden;
  position: relative;
}

.fish-bg {
  position: absolute;
  width: 50%;
  height: auto;
  top: 0;
  right: 0;
}

</style>
