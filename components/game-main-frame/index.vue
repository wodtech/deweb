<template>
  <div class="main-frame d-flex">
    <div class="img-container">
      <img :src="bgImg" class="bg-img" alt="main background">
    </div>
    <v-container class="d-flex align-end main-container pb-15">
      <v-row class="d-flex bottom-wrapper">
        <v-col style="z-index: 1" class="d-flex align-center " cols="6">
          <div class="d-flex badge">
            <img :src="smallBadge" alt="small img">
          </div>
          <div class="d-flex flex-column ml-5 pa-1">
            <span class="text-big text-h5 white--text">{{ textBig }}</span>
            <span class="caption white--text sub-text">{{ textSmall }}</span>
          </div>
        </v-col>
        <v-col class="d-flex align-center justify-end" cols="6">
          <v-btn x-large class="large-button font-weight-light rounded-pill" >PLAY NOW</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImg: require("~/assets/images/bg-img.png"),
      smallBadge: require("~/assets/images/main-logo.png"),
      textBig: 'world of defish',
      textSmall: 'Feel a real Storm of the Seven Seas, hunting for mystical NFT Fish'
    }
  }
}
</script>

<style lang="scss" scoped>

.main-frame {
  height: 80vh;
  width: 100%;
  position: relative;
  .main-container {

    .bottom-wrapper {
      .badge {
        width: 92px;
        height: 92px;
        border-radius: 20px;
      }
      img {
        object-fit: contain;
        pointer-events: none;
      }
    }
    .sub-text {
      opacity: 0.7;
      max-width: 240px;
    }
    .large-button {
      width: 166px;
      color: white;
      background-color: rgba(233, 68, 133, 1);
    }
  }
  .img-container {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    .bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

}

</style>
