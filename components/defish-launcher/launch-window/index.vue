<template>
  <v-card elevation="0" color="transparent" style="overflow: hidden;" tile class="launch-window d-flex">
    <v-container style="padding:120px 0 " class=" --posr d-flex align-center">
      <div class="bg-container">
        <img class="bg" :src="require('~/assets/images/fish-bg-launcher.png')"/>
      </div>
      <v-row class="--posr">
        <v-col cols="12" class="--posr d-flex align-center flex-column flex-md-row">
          <div class="launcher-card d-flex align-end">
            <div class="img-w">
              <img class="app" src="~/assets/images/desktop.png"/>
            </div>
            <v-responsive width="100%" :aspect-ratio="1.5"></v-responsive>
          </div>
          <div class="launcher-info-wrapper">
            <div class="launcher-info rounded-xl  rounded py-13 pr-sm-9 pr-3 --posr d-flex flex-column justify-center align-sm-end align-center">
              <div class="launch-content">
                <div class="text-h3">ALL GAMES. <br/> ONE PLACE</div>
                <div class="descr mt-3 body-2">
                  Defish Launcher is a player's space in a desctop app, where all games are tied up to one Defish ecosystem by Defish Connect mechanism.
                </div>
              </div>
            </div>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped>
.bg-container {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  overflow: hidden;

  .bg {
    max-width: 1000px;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
}
.launch-content {
  max-width: 440px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
}
.card {
  position: absolute;
  top: 0;
  right: 0;
  max-width: unset !important;
  background: rgba(#1C212F, 1);
}

.svg {
  position: absolute;
  top: 0;
  left: 0;

  svg {
    transform: translate(10%, -40%);
  }
}

.launch-window {
  overflow: hidden;
  position: relative;
  min-height: 100vh;
}

.fish-bg {
  position: absolute;
  width: 50%;
  height: auto;
  top: 0;
  right: 0;
}
.launcher-card {
  position: relative;
  width: 50%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
}
.launcher-info-wrapper {
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .launcher-info{
    background: white;
    padding-left: 140px;
    @media screen and (max-width: 960px) {
      padding-left: 44px
    }
    @media screen and (max-width: 600px) {
      padding-left: 12px;
      width: 100%;
    }
  }
}

.img-w {
  z-index: 1;
  position: absolute;
  top: 50%;
  right: 5%;
  width: 120%;
  max-width: 752px;
  min-width: 650px;
  transform: translate(25%, -50%);

  @media (max-width: 960px) {
    min-width:0;
    width: 100%;
    left: 0;
    transform: translate(0, -50%) translateX(5%) translateY(-10%);
  }
  @media screen and (max-width: 600px){
    transform: translate(0, -50%) translateX(3%) translateY(-10%);
  }
  .app {
    transform: perspective(2000px) rotateX(25deg) rotateY(30deg) rotateZ(-15deg);
    width: 100%;
  }
}
</style>
