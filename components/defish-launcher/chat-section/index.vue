<template>
  <v-card elevation="0" color="transparent" style="overflow: hidden;" tile class="launch-window d-flex">
    <v-container class="py-16 --posr">
      <div class="bg-container">
        <img class="bg" :src="require('~/assets/images/fish-bg-launcher.png')"></img>
      </div>
      <v-row class="--posr">
        <v-col md="6" cols="12" class="--posr d-flex align-end justify-md-end justify-center">
          <img style="max-width: 600px" class="w-100 chat-img" src="~/assets/images/defish-launcher/chat.png" alt="">
        </v-col>
        <v-col md="6" cols="12" class="--posr d-flex align-center flex-column justify-center flex-md-row">
          <div style="max-width: 425px">
            <div class="text-h3 text-uppercase">Chat with worldwide <br/> players</div>
            <div class="descr mt-3 body-2">
              Defish Launcher is a player's space in a desctop app, where all games are tied up to one Defish ecosystem by Defish Connect mechanism.
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {

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
  position: absolute;
  top: 0;
  right: 0;
  max-width: unset !important;
  background: rgba(#1C212F, 1);
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
.chat-img {
  padding-right: 30px;
  @media screen and (max-width: 960px) {
    padding-right: 0;
  }
}
</style>
