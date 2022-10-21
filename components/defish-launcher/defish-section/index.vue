<template>
  <div style="background: #192438" class="w-100 --posr">
    <div style="z-index: 0;" class="py-16 --posr d-flex flex-column align-center">
      <img class="fishes-top" src="~/assets/images/defish-launcher/fishes.png" alt="">
      <v-card color="transparent" class="w-70 card d-flex flex-column --posr" elevation="10"   rounded="xl" >
        <v-row class="w-100 h-100">
          <v-col cols="12" md="6" class="py-12 pl-16 pr-6 white--text d-flex flex-column  justify-center">
            <div class="text-h4">
              DEFISH <span class="pink--text">CONNECT</span><br/>
              TECHNOLOGY
            </div>
            <div class="body-2 mt-3">
              The Backbone of our technology where everything is happening behind the scene, automatically and smoothly. Defish Connect links up all games of our metauniverse together. This allows you to accumulate overall game progress, NFT inventory, rewards and receive bonuses.
              <br/><br/>
              Earn once - use anywhere.
            </div>
          </v-col>
          <v-col cols="12" md="6" class="--posr pa-10 d-flex justify-center">
            <v-img class="w-100 td-img" :src="tdImage" alt="td-preview"></v-img>
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
.td-img{
  @media screen and (max-width: 600px) {
    margin-left: 13px;
  }
}
.img-wrap {
  max-height: 1000px;
  transform: translateX(-3%);
  @media screen and (max-width: 1460px) {
    transform: translateX(-10%);
  }
  .v-image{
    @media screen and (max-width: 600px) {
      margin-top: 50px;
      transform: scale(1.3);
    }
  }
}
.card {
  height: 100%;
  position: relative;
  background-image: radial-gradient(circle at 100% 100%, transparent 21px, #f33282 21px, #f33282 24px, transparent 24px), linear-gradient(to right, #f33282, #505872), radial-gradient(circle at 0% 100%, transparent 21px, #505872 21px, #505872 24px, transparent 24px), linear-gradient(to bottom, #505872, #3c4357), radial-gradient(circle at 0% 0%, transparent 21px, #3c4357 21px, #3c4357 24px, transparent 24px), linear-gradient(to left, #3c4357, #f4327d), radial-gradient(circle at 100% 0%, transparent 21px, #f4327d 21px, #f4327d 24px, transparent 24px), linear-gradient(to top, #f4327d, #f33282);
  background-size: 24px 24px, calc(100% - 48px) 3px, 24px 24px, 3px calc(100% - 48px);
  background-position: top left,top center,top right,center right, bottom right,bottom center,bottom left,center left;
  background-repeat: no-repeat;
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
