<template>
<div class="follow-us">
  <v-container style="postition: relative"  class="py-16">
    <v-card 
    class="pa-16 card-follow"
    >
      <v-row>
        <v-col style="border-right: 2px solid rgba(217, 217, 217, 0.15)" class="d-flex align-center justify-center flex-column" cols="4">
          <div>
            <img :src="firstImg" alt="">
          </div>
          <v-btn :href="btnTextFirst.link" x-large class="follow-btn font-weight-light rounded-pill">
            <span>{{btnTextFirst.text}}</span>
          </v-btn>
        </v-col>
        <v-col style="border-right: 2px solid rgba(217, 217, 217, 0.15)" class="d-flex align-center justify-center flex-column" cols="4">
          <div>
            <img :src="secondImg" alt="">
          </div>
          <v-btn :href="btnTextSecond.link" disabled x-large class="follow-btn font-weight-light rounded-pill">
            <span>{{btnTextSecond.text}}</span>
          </v-btn>
        </v-col>
        <v-col class="d-flex justify-center align-center flex-column" cols="4">
          <v-row class="d-flex flex-column">
            <v-col class="d-flex align-end" cols>
              <span  class="text-h4 white--text">{{text}}</span>
            </v-col>
            <v-col cols>
              <div class="d-flex">
                <v-btn icon>
                  <v-icon color="white">mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="white">mdi-facebook</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon color="white">mdi-telegram</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon color="white">mdi-discord</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon color="white">mdi-linkedin</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <!-- <div class="img-container">
      <svg class="first-bg-pic" width="317" height="367" viewBox="0 0 317 367" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.268685 155.73C-0.490779 12.0282 193.357 -100.774 333.264 21.7738C108.552 -92.203 -38.4298 181.98 110.69 274.034C275.433 375.733 378.788 147.363 262.772 99.4636C153.17 68.0821 145.524 191.729 189.124 188.133C217.202 185.818 211.663 151.01 205.918 137.015C246.655 119.597 263.957 147.108 267.516 163.041L286.42 157.967C277.777 265.668 198.433 271.427 159.841 260.843L158.694 279.39C33.1417 209.326 83.4588 113.137 124.311 73.801L118.902 61.0667C228.35 -45.3173 357.055 57.947 371.991 137.027C377.495 134.875 389.182 131.603 391.901 135.737C423.325 429.263 1.8302 451.191 0.268685 155.73Z" fill="#D9D9D9" fill-opacity="0.1"/>
      </svg>
      <svg class="second-bg-pic" width="296" height="376" viewBox="0 0 296 376" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.8258 -10.7204C170.5 -63.4669 345.844 76.375 282.277 251.164C307.144 0.430032 -1.65627 -37.2866 -33.462 135.048C-68.6 325.437 181.698 339.078 184.333 213.59C173.895 100.063 55.8718 137.712 75.0118 177.051C87.3378 202.385 117.777 184.616 128.742 174.194C159.73 205.858 140.352 231.948 126.789 241.036L138.364 256.819C34.843 287.765 0.742736 215.891 -3.36712 176.086L-21.0706 181.733C-1.22802 39.33 106.653 51.3993 158.114 75.2343L168.025 65.5806C306.823 129.076 257.175 286.44 188.87 329C192.87 333.35 200.152 343.059 197.283 347.091C-64.9411 482.676 -238.016 97.7297 36.8258 -10.7204Z" fill="#D9D9D9" fill-opacity="0.1"/>
      </svg>
    </div> -->
  </v-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      text: 'follow us  there:',
      firstImg: require('~/assets/images/defish-logo.png'),
      secondImg: require('~/assets/images/defish-logo.png'),
      btnTextFirst: {
        text: 'play now',
        link: '#'
      },
      btnTextSecond: {
        text: 'coming soon',
        link: '#'
      } 
    }
  },

}
</script>

<style lang="scss" scoped>
.follow-btn {
  color: white;
  min-width: 166px !important;
  background-color: rgba(233, 68, 133, 1) !important;
  &:disabled {
    color: white !important;
  }
}
.img-container {
  width: 100%;
  height: 100%;
  position: relative;
  .first-bg-pic {
    position: absolute;
    left: 0%; top: 50%; 
    transform: translate(-50%, -50%);
  }
  .second-bg-pic {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0%; top: 50%; 
    transform: translate(-50%, -50%);
  }
}
.card-follow {
  background-color: rgba(20, 23, 45, 1);
}
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
    color: white !important;
    background-color: rgba(255, 255, 255, 0.2) !important;
}
</style>
