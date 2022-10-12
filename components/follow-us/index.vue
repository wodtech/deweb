<template>
<div class="follow-us">
  <v-container class="py-16">
    <v-card
    outlined
    class="pa-16 card-follow"
    >
      <svg style="z-index: 0" class="bg-svg left" width="399" height="398" viewBox="0 0 399 398" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M139.827 11.2801C273.501 -41.4664 448.845 98.3754 385.278 273.165C410.145 22.4305 101.345 -15.2861 69.5389 157.048C34.401 347.438 284.699 361.079 287.334 235.591C276.896 122.064 158.873 159.713 178.013 199.052C190.339 224.385 220.778 206.617 231.743 196.194C262.731 227.858 243.353 253.949 229.79 263.036L241.365 278.82C137.844 309.765 103.744 237.891 99.6339 198.086L81.9304 203.733C101.773 61.3305 209.654 73.3998 261.115 97.2348L271.026 87.5811C409.824 151.077 360.176 308.441 291.871 351C295.871 355.351 303.153 365.06 300.284 369.091C38.0599 504.676 -135.015 119.73 139.827 11.2801Z" fill="#D9D9D9" fill-opacity="0.1"/>
      </svg>

      <svg style="z-index: 0" class="bg-svg right d-none d-sm-flex" width="394" height="398" viewBox="0 0 394 398" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.268685 186.73C-0.490779 43.0282 193.357 -69.7743 333.264 52.7738C108.552 -61.203 -38.4298 212.98 110.69 305.034C275.433 406.733 378.788 178.363 262.772 130.464C153.17 99.0821 145.524 222.729 189.124 219.133C217.202 216.818 211.663 182.01 205.918 168.015C246.655 150.597 263.957 178.108 267.516 194.041L286.42 188.967C277.777 296.668 198.433 302.427 159.841 291.843L158.694 310.39C33.1417 240.326 83.4588 144.137 124.311 104.801L118.902 92.0667C228.35 -14.3173 357.055 88.947 371.991 168.027C377.495 165.875 389.182 162.603 391.901 166.737C423.325 460.263 1.8302 482.191 0.268685 186.73Z" fill="#D9D9D9" fill-opacity="0.1"/>
      </svg>
      <v-row style="z-index: 2" class="content-w">
        <v-col class="game-block d-flex align-center justify-end flex-column" md="4" sm="12">
          <div style="z-index: 2">
            <img  :src="firstImg" alt="">
          </div>
          <v-btn :href="btnTextFirst.link" x-large class="follow-btn font-weight-light rounded-pill">
            <span>{{btnTextFirst.text}}</span>
          </v-btn>
        </v-col>
        <v-col class="game-block d-flex align-center justify-end flex-column" md="4" sm="12">
          <div>
            <img :src="secondImg" alt="">
          </div>
          <v-btn :href="btnTextSecond.link" disabled x-large class="follow-btn font-weight-light rounded-pill">
            <span>{{btnTextSecond.text}}</span>
          </v-btn>
        </v-col>
        <v-col class="d-flex justify-center align-center flex-column" md="4" sm="12">
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
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8763 0.0946312L0.390353 7.92704C-0.175333 8.23167 -0.10345 8.9698 0.45911 9.19241L3.78134 10.4988L12.7604 3.08231C12.9323 2.93879 13.1761 3.15847 13.0292 3.32543L5.50027 11.9223V14.2803C5.50027 14.9715 6.391 15.2439 6.82854 14.7431L8.81313 12.4789L12.7073 14.0079C13.1511 14.1836 13.6574 13.9229 13.7387 13.4748L15.9889 0.821048C16.0952 0.22937 15.417 -0.198279 14.8763 0.0946312Z" fill="white"/>
                  </svg>
                </v-btn>

                <v-btn icon>
                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6149 9.025C10.6149 9.6045 10.2034 10.0795 9.68229 10.0795C9.17029 10.0795 8.74971 9.6045 8.74971 9.025C8.74971 8.4455 9.16114 7.9705 9.68229 7.9705C10.2034 7.9705 10.6149 8.4455 10.6149 9.025ZM6.34514 7.9705C5.824 7.9705 5.41257 8.4455 5.41257 9.025C5.41257 9.6045 5.83314 10.0795 6.34514 10.0795C6.86629 10.0795 7.27771 9.6045 7.27771 9.025C7.28686 8.4455 6.86629 7.9705 6.34514 7.9705ZM16 1.957V19C13.6966 16.885 14.4333 17.5851 11.7577 15.0005L12.2423 16.758H1.87429C0.841143 16.758 0 15.884 0 14.801V1.957C0 0.874 0.841143 0 1.87429 0H14.1257C15.1589 0 16 0.874 16 1.957ZM13.3943 10.963C13.3943 7.904 12.0777 5.4245 12.0777 5.4245C10.7611 4.3985 9.50857 4.427 9.50857 4.427L9.38057 4.579C10.9349 5.073 11.6571 5.7855 11.6571 5.7855C9.48532 4.54868 6.93414 4.54846 4.82743 5.51C4.48914 5.6715 4.288 5.7855 4.288 5.7855C4.288 5.7855 5.04686 5.035 6.69257 4.541L6.60114 4.427C6.60114 4.427 5.34857 4.3985 4.032 5.4245C4.032 5.4245 2.71543 7.904 2.71543 10.963C2.71543 10.963 3.48343 12.3405 5.504 12.407C5.504 12.407 5.84229 11.9795 6.11657 11.6185C4.95543 11.2575 4.51657 10.4975 4.51657 10.4975C4.65107 10.5953 4.87286 10.7221 4.89143 10.735C6.43464 11.633 8.62671 11.9272 10.5966 11.0675C10.9166 10.944 11.2731 10.7635 11.648 10.507C11.648 10.507 11.1909 11.286 9.99314 11.6375C10.2674 11.9985 10.5966 12.407 10.5966 12.407C12.6171 12.3405 13.3943 10.963 13.3943 10.963Z" fill="white"/>
                  </svg>
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
  </v-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      text: 'follow us  there:',
      firstImg: require('~/assets/images/wodlogo.svg'),
      secondImg: require('~/assets/images/tdlogo.svg'),
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
.card-follow {
  background: #161d32 !important;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border-radius: 10px;
}
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
    color: white !important;
    background-color: rgba(255, 255, 255, 0.2) !important;
}
.bg-grad {
  width: 100%;
  height: 105%;
  position: absolute;
  top: 0;
  left: 0;
}

.bg-svg {

  position: absolute;
  top: 50%;

  &.left {
    left: 0;
    transform: translateY(-50%) translateX(-20%);
  }

  &.right {
    left: 100%;
    transform: translateX(-100%) translateY(-50%) translateX(20%);
  }
}
.content-w {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .game-block {
    min-height: 212px;
    border-right: 2px solid rgba(217, 217, 217, 0.15)
  }
  @media screen and (max-width: 950px) {
    flex-direction: column;
    .game-block {
      border: none;
    }
  }
}
</style>
