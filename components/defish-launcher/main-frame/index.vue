<template>
  <div  class="main-frame">
    <img class="w-100 bottom-shadow" src="~/assets/images/defish-launcher/bg-shadow.png" alt="">
    <div style="background: #0B0E29" class="img-container">

    </div>
    <div style="max-width: 1550px;" class="img-contain">
      <img class="bg-smol w-100" src="~/assets/images/defish-launcher/main-bg.png" alt="main-img">
    </div>
    <img class="bg" src="~/assets/images/defish-launcher/unitBg.png" alt="">

    <v-card
      height="100%"
      color="transparent"
      elevation="0"
      width="100%"
      class="d-flex flex-column align-center justify-center py-16 --posr"
    >
      <no-ssr class="d-flex flex-grow-1 justify-center">
        <v-container class="d-flex align-center justify-center">
          <v-row class="d-flex flex-column flex-lg-row">
            <v-col  md="6" cols="12" class="d-flex flex-column justify-center align-start  ">
              <div class="main-title d-flex mb-9 text-uppercase  white--text">
                DEFISH <br/> LAUNCHER
              </div>
              <div class="desc mb-9 subtitle-2 font-weight-light white--text">
                The heart of Defish, where all games of our Multiverse are located.
              </div>
            </v-col>
            <v-col  md="6" cols="12" class="d-flex align-center justify-center">
            </v-col>
          </v-row>
        </v-container>
      </no-ssr>
    </v-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require("~/assets/images/test-img.png"),
    }
  }
}
</script>

<style lang="scss" scoped>

.main-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: black;
  position: relative;
  overflow: hidden;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .bottom-shadow{
    position: absolute;
    bottom: 0;
    height: 200px;
    z-index: 1;
    @media screen and (max-width: 600px) {
      height: 100px;
    }
  }
  .main-title {
    font-size: 95px;
    line-height: 104.13%;
  }
  .main-left {
    .description {
      max-width: 400px;
    }
  }
}
.img-container {
  width: 100%;
  height: 100%;
  position: absolute;
  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.img-contain {
  bottom: -9px;
  right: 0;
  width: 100%;
  position: absolute;
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    left: -70px;
    width: 120%;
  }
  .bg-smol {
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.bg2 {
  position: absolute;
  left: 0;
  bottom: -35px;
  @media screen and (max-width: 600px) {
    display: none;
  }
}
</style>
