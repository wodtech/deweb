<template>
<div class="follow-us">
  <v-container class="py-16">
    <v-card
    outlined
    class="pa-10 card-follow"
    >


      <svg style="z-index: 0" class="bg-svg left" width="257" height="304" viewBox="0 0 257 304" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M36.8258 -82.7204C102.547 -108.653 178.34 -88.0335 230.861 -39.5957C256.802 -15.6712 216.626 -6.68111 185.221 -22.7758C99.1941 -66.8635 -14.8025 -38.0559 -33.462 63.0479C-68.6 253.437 181.698 267.078 184.333 141.59C173.895 28.0634 55.8718 65.7124 75.0118 105.051C81.3588 118.096 92.5086 119.713 103.329 116.788C119.159 112.51 139.929 111.222 144.119 127.076C148.289 142.853 141.172 155.787 133.173 163.76C129.969 166.954 129.02 172.078 131.696 175.727C134.947 180.159 132.792 186.483 127.447 187.769C38.7479 209.108 5.11026 151.126 -2.19578 112.105C-2.96546 107.994 -7.10927 105.279 -11.0938 106.55C-15.7171 108.025 -20.2737 104.104 -19.4173 99.3278C3.18493 -26.7463 99.6788 -20.7444 151.774 0.479197C155.642 2.05488 160.09 1.30929 163.082 -1.60472C166.061 -4.50665 170.613 -5.26091 174.335 -3.40433C296.048 57.3136 262.155 193.933 202.77 246.546C195.992 252.55 197.692 263.592 197.933 272.644C197.995 274.943 196.129 275.694 194.074 276.726C-66.3476 407.536 -236.893 25.2867 36.8258 -82.7204Z" fill="#D9D9D9" fill-opacity="0.1"/>
      </svg>


      <svg style="z-index: 0" class="bg-svg right d-none d-sm-flex" width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M0.00839603 92.1162C-0.0869856 74.0674 4.53241 56.7674 12.7051 41.1713C29.0847 9.91377 37.0667 53.1204 33.165 88.1932C29.7146 119.209 41.1172 150.14 71.9064 169.147C179.174 235.365 246.471 86.6678 170.93 55.4797C99.5658 35.0465 94.5875 115.556 122.976 113.215C129.999 112.635 133.792 108.934 135.588 104.078C140.337 91.2406 145.018 73.0988 157.92 77.6674C165.315 80.2856 169.901 86.2348 172.322 91.7575C173.505 94.4555 176.392 96.2393 179.237 95.4757C182.694 94.5479 186.024 97.3472 185.544 100.894C177.581 159.76 134.458 166.504 109.053 161.737C106.376 161.235 103.752 163.11 103.583 165.828C103.388 168.982 99.9344 170.823 97.2373 169.177C26.0486 125.732 52.4436 68.5821 77.6083 41.9683C79.4766 39.9924 80.0729 37.1168 79.0097 34.6139C77.9509 32.1215 78.5665 29.1807 80.5709 27.3597C146.121 -32.1946 221.048 20.5889 238.978 69.0374C241.024 74.5667 248.126 76.1388 253.677 78.1264C255.087 78.6313 255.103 79.9407 255.245 81.4314C273.232 270.332 1.02097 283.711 0.00839603 92.1162Z" fill="#D9D9D9" fill-opacity="0.1"/>
      </svg>



      <v-row style="z-index: 2" class="content-w">
        <v-col class="game-block d-flex align-center justify-end flex-column" md="4" sm="12">
          <div style="z-index: 2">
            <img style="width: 197px;" :src="firstImg" alt="">
          </div>
          <v-btn :href="btnTextFirst.link" x-large class="follow-btn font-weight-light rounded-pill">
            <span>{{btnTextFirst.text}}</span>
          </v-btn>
        </v-col>
        <v-col class="game-block d-flex align-center justify-end flex-column" md="4" sm="12">
          <div>
            <img style="width: 215px;" :src="secondImg" alt="">
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
              <div class="d-flex socials">
                <v-btn target="_blank" :href="social_links.twitter" icon>
                  <v-icon >mdi-twitter</v-icon>
                </v-btn>
                <v-btn target="_blank" :href="social_links.medium" icon>
                  <svg style="width: 24px;" width="69" height="41" viewBox="0 0 69 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.1312 20.732C39.1312 31.8853 30.4832 40.9268 19.8159 40.9268C9.14867 40.9268 0.5 31.8833 0.5 20.732C0.5 9.5808 9.14801 0.536591 19.8159 0.536591C30.4839 0.536591 39.1312 9.57875 39.1312 20.732Z" fill="white"/>
                    <path d="M60.3208 20.732C60.3208 31.2305 55.9968 39.7445 50.6628 39.7445C45.3288 39.7445 41.0048 31.2305 41.0048 20.732C41.0048 10.2336 45.3282 1.71959 50.6621 1.71959C55.9961 1.71959 60.3201 10.2309 60.3201 20.732H60.3208Z" fill="white"/>
                    <path d="M65.5911 37.7642C67.4673 37.7642 68.9878 30.1361 68.9878 20.732C68.9878 11.3253 67.4666 3.69988 65.5911 3.69988C63.7155 3.69988 62.195 11.326 62.195 20.732C62.195 30.1381 63.7149 37.7642 65.5911 37.7642Z" fill="white"/>
                  </svg>
                </v-btn>
                <v-btn target="_blank" :href="social_links.discord" icon>
                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6149 9.025C10.6149 9.6045 10.2034 10.0795 9.68229 10.0795C9.17029 10.0795 8.74971 9.6045 8.74971 9.025C8.74971 8.4455 9.16114 7.9705 9.68229 7.9705C10.2034 7.9705 10.6149 8.4455 10.6149 9.025ZM6.34514 7.9705C5.824 7.9705 5.41257 8.4455 5.41257 9.025C5.41257 9.6045 5.83314 10.0795 6.34514 10.0795C6.86629 10.0795 7.27771 9.6045 7.27771 9.025C7.28686 8.4455 6.86629 7.9705 6.34514 7.9705ZM16 1.957V19C13.6966 16.885 14.4333 17.5851 11.7577 15.0005L12.2423 16.758H1.87429C0.841143 16.758 0 15.884 0 14.801V1.957C0 0.874 0.841143 0 1.87429 0H14.1257C15.1589 0 16 0.874 16 1.957ZM13.3943 10.963C13.3943 7.904 12.0777 5.4245 12.0777 5.4245C10.7611 4.3985 9.50857 4.427 9.50857 4.427L9.38057 4.579C10.9349 5.073 11.6571 5.7855 11.6571 5.7855C9.48532 4.54868 6.93414 4.54846 4.82743 5.51C4.48914 5.6715 4.288 5.7855 4.288 5.7855C4.288 5.7855 5.04686 5.035 6.69257 4.541L6.60114 4.427C6.60114 4.427 5.34857 4.3985 4.032 5.4245C4.032 5.4245 2.71543 7.904 2.71543 10.963C2.71543 10.963 3.48343 12.3405 5.504 12.407C5.504 12.407 5.84229 11.9795 6.11657 11.6185C4.95543 11.2575 4.51657 10.4975 4.51657 10.4975C4.65107 10.5953 4.87286 10.7221 4.89143 10.735C6.43464 11.633 8.62671 11.9272 10.5966 11.0675C10.9166 10.944 11.2731 10.7635 11.648 10.507C11.648 10.507 11.1909 11.286 9.99314 11.6375C10.2674 11.9985 10.5966 12.407 10.5966 12.407C12.6171 12.3405 13.3943 10.963 13.3943 10.963Z" fill="white"/>
                  </svg>
                </v-btn>
                <v-btn target="_blank" :href="social_links.linkedin" icon>
                  <v-icon >mdi-linkedin</v-icon>
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
      social_links: {
        twitter: "https://twitter.com/defishgames",
        discord: "https://discord.com/invite/78EfmhUgNJ",
        medium: "https://worldofdefish.medium.com/",
        linkedin: "https://www.linkedin.com/company/world-of-defish/mycompany/",
      },
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
  color: white!important;
  min-width: 166px !important;
  background-color: rgba(233, 68, 133, 1) !important;
  &:disabled {
    color: white !important;
  }
}
.card-follow {
  background: rgb(32,54,69) !important;
  background: linear-gradient(90deg, rgba(32,54,69,1) 24%, rgba(22,29,50,1) 49%, rgba(31,52,68,1) 67%) !important;
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
    min-height: 183px;
    border-right: 2px solid rgba(217, 217, 217, 0.15)
  }
  @media screen and (max-width: 950px) {
    flex-direction: column;
    .game-block {
      border: none;
    }
  }
}
.socials {
  .v-btn{
    color: white!important;
    &:hover {
      color: #E94485!important;
      svg{
        path {
          fill: #E94485;
        }
      }
    }
  }
}
</style>
