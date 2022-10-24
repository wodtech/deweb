<template>
  <v-card elevation="0" color="transparent" style="overflow: visible;" tile class="launch-window d-flex">
    <v-container class="py-16 --posr">
      <v-img contain class="fish-bg" :src="require('~/assets/images/fish-bg-launcher.png')"></v-img>
      <v-row class="--posr">
        <v-col sm="12" md="5" cols="12" class="--posr">

          <DeskApp/>

          <!-- <v-responsive width="100%" :aspect-ratio="1"></v-responsive> -->

          <v-responsive width="100%" :aspect-ratio="1.5"></v-responsive>

        </v-col>
        <v-col sm="11" md="6" cols="11" offset-md="1" offset-sm="1" offset="1" class="py-16 --posr d-flex flex-column justify-center align-start">
          <div class="--posr">

            <div class="text-h4 font-weight-bold">
              defish launcher
            </div>
            <div class="body-1 mt-6" style="opacity: 0.7">
              Defish Launcher is a player's space in a crossplatform desktop app. This is the heart of the Defish Studio, where all the games of our Multiverse are assembled. All games are tied up to one Defish ecosystem by Defish Connect mechanism.            </div>
            <v-btn nuxt to="/defish-launcher" rounded x-large color="primary" class="mt-6">
              learn more
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import DeskApp from './DeskApp.vue'
export default {
  components: {
    DeskApp,
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

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
  // background: #14172D;
  overflow: hidden;
  padding: 100px 0;
  @media screen and (max-width: 960px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 600px) {
    padding: 20px 0;
  }
}

.fish-bg {
  position: absolute;
  width: 50%;
  height: auto;
  top: 100%;
  right: 0;
  transform: translate(0, -50%);
}

</style>
