<template>
  <div style="background: #192438" class="w-100 --posr">
    <div style="z-index: 0;" class="py-16 --posr d-flex flex-column align-center">
      <img class="fishes-top" src="~/assets/images/defish-launcher/fishes.png" alt="">
      <v-card color="transparent" class="w-70 card d-flex flex-column --posr" elevation="10"   rounded="xl" >
        <img style="position: absolute;top:0;left:0" class="w-100 h-100" src="~/assets/images/defish-launcher/border.png" alt="">
        <v-row class="w-100 h-100">
          <v-col cols="12" md="6" class="py-12 pl-16 pr-6 white--text">
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
          <v-col cols="12" md="6" class="--posr pa-10 d-flex justify-center">
            <v-img class="w-100" :src="tdImage" alt="td-preview"></v-img>
          </v-col>
        </v-row>
      </v-card>
      <div class="w-100 img-wrap" style="max-width: 1600px;margin: 0 auto">
        <v-img max-width="1354px" style="z-index: 1;"  :src="connect" contain></v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tdImage: require('~/assets/images/td-preview.jpg'),
      connect: require('~/assets/images/defish-launcher/defish-circle-r.png')
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
  background-image: url("~/assets/images/defish-launcher/defish-circle.png");
  background-size: contain;
  background-repeat: no-repeat;
  .bg {
    width: 100%;
    position: absolute;
    top: -60px;
    right: 5%;
    @media screen and (min-width: 1920px){
      max-width: 1400px;
    }
    @media screen and (min-width: 650px){
      right: 0;
    }
  }
}
.img-wrap {
  max-height: 1000px;
  transform: translateX(-3%);
  @media screen and (max-width: 1460px) {
    transform: translateX(-10%);
  }
}
.card {
  height: 100%;
  position: relative;
  background-clip: padding-box;
}
.fishes-top{
  position: absolute;
  top: -20px;
  right: 30%;
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
