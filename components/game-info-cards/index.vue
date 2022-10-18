<template>
  <v-row class="cards-wrapper d-flex">
    <v-col class="d-flex align-center col-md-7 col-12">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 5 : 20"
          style="transition: box-shadow 0.3s ease-in-out;"
          rounded="xl"
          outlined
          height="100%"
          max-width="100%"
          class="pa-sm-14 pa-6 d-flex justify-space-between flex-column"
        >
          <div class="top-text d-flex flex-column">
            <span class="text-h3 mb-4">{{firstCard.titleTop}}</span>
            <span class="first-top-desc body-1">{{firstCard.descTop}}</span>
          </div>
          <div class="bottom-text d-flex flex-column justify-end">
            <span class="first-bottom-title text-h3 mb-4">{{firstCard.titleBottom}}</span>
            <v-row class="d-flex">
              <v-col v-for="text in firstCard.descBottom" :key="text" cols="6">
                <span class="list-el">{{ text }}</span>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-hover>
    </v-col>
    <v-col class="col-md-5 col-12">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 10 : 20"
          rounded="xl"
          outlined
          width="100%"
          style="transition: box-shadow 0.3s ease-in-out;"
          class="d-flex flex-column flex-grow-1 pa-sm-14 pa-6"
        >
          <span class="text-h3 mb-4">{{secondCard.titleTop}}</span>
          <div class="socials d-flex flex-grow-1">
            <v-btn icon>
              <v-icon size="27px" >mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon size="27px" >mdi-facebook</v-icon>
            </v-btn>

            <v-btn icon>
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3847 0.138792L0.561132 11.6263C-0.252041 12.0731 -0.14871 13.1557 0.659971 13.4822L5.43568 15.3982L18.3431 4.52073C18.5902 4.31022 18.9406 4.63242 18.7295 4.87729L7.90664 17.4861V20.9444C7.90664 21.9582 9.18706 22.3578 9.81603 21.6231L12.6689 18.3023L18.2667 20.5449C18.9047 20.8026 19.6325 20.4203 19.7493 19.763L22.984 1.2042C23.1368 0.336409 22.1619 -0.290809 21.3847 0.138792Z" fill="#999999"/>
              </svg>
            </v-btn>

            <v-btn icon>
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5954 12.35C14.5954 13.143 14.0297 13.793 13.3131 13.793C12.6091 13.793 12.0309 13.143 12.0309 12.35C12.0309 11.557 12.5966 10.907 13.3131 10.907C14.0297 10.907 14.5954 11.557 14.5954 12.35ZM8.72457 10.907C8.008 10.907 7.44229 11.557 7.44229 12.35C7.44229 13.143 8.02057 13.793 8.72457 13.793C9.44114 13.793 10.0069 13.143 10.0069 12.35C10.0194 11.557 9.44114 10.907 8.72457 10.907ZM22 2.678V26C18.8329 23.1058 19.8458 24.0638 16.1669 20.527L16.8331 22.932H2.57714C1.15657 22.932 0 21.736 0 20.254V2.678C0 1.196 1.15657 0 2.57714 0H19.4229C20.8434 0 22 1.196 22 2.678ZM18.4171 15.002C18.4171 10.816 16.6069 7.423 16.6069 7.423C14.7966 6.019 13.0743 6.058 13.0743 6.058L12.8983 6.266C15.0354 6.942 16.0286 7.917 16.0286 7.917C13.0423 6.22451 9.53445 6.22421 6.63771 7.54C6.17257 7.761 5.896 7.917 5.896 7.917C5.896 7.917 6.93943 6.89 9.20229 6.214L9.07657 6.058C9.07657 6.058 7.35429 6.019 5.544 7.423C5.544 7.423 3.73371 10.816 3.73371 15.002C3.73371 15.002 4.78971 16.887 7.568 16.978C7.568 16.978 8.03314 16.393 8.41029 15.899C6.81371 15.405 6.21029 14.365 6.21029 14.365C6.39522 14.4989 6.70018 14.6724 6.72571 14.69C8.84763 15.9188 11.8617 16.3214 14.5703 15.145C15.0103 14.976 15.5006 14.729 16.016 14.378C16.016 14.378 15.3874 15.444 13.7406 15.925C14.1177 16.419 14.5703 16.978 14.5703 16.978C17.3486 16.887 18.4171 15.002 18.4171 15.002Z" fill="#999999"/>
              </svg>
            </v-btn>

            <v-btn icon>
              <v-icon size="27px" >mdi-linkedin</v-icon>
            </v-btn>
          </div>
          <div class="d-flex flex-wrap w-100">
            <div v-for="btn in secondCard.btns" :key="btn.id" class="d-flex pt-6" >
              <v-btn max-width="100px" large class="large-button caption font-weight-light rounded-pill mr-2">
                {{btn.text}}
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 5 : 20"
          rounded="xl"
          outlined
          min-height="500px"
          width="100%"
          style="transition: box-shadow 0.3s ease-in-out;"
          class="d-flex flex-column flex-grow-1 mt-6 pa-sm-14 pa-6"
        >
          <span class="text-h3 mb-4">{{thirdCard.titleTop}}</span>
          <div class="d-flex flex-column flex-grow-1">
            <div v-for="el in thirdCard.list" :key="el" class="d-flex flex-column flex-grow-1">
              <div class="d-flex  subtitle-1">{{el.title}}</div>
              <a href class="d-flex flex-grow-1 list-el" :style="pinkClass(el.isPink)">{{el.desc}}</a>
            </div>
          </div>

        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "index",
  methods: {
    pinkClass(isPink) {
      if (isPink) {
        return 'color: rgba(233, 68, 133, 1)'
      }
      return 'color: black'
    }
  },
  data() {
    return {
      firstCard: {
        titleTop: "game desription:",
        descTop: "Feel a real Storm of the Seven Seas, hunting for mystical NFT Fish, crafting, compete and filling your pocket with $WOD doubloons. Welcometo World of Defish, play-to earn gaming universe running on BSC.",
        titleBottom: "core features:",
        descBottom: [
          "Ranking System", "Guilds System", "Crafting Mechanism", "Marketplace", "NFT", "$WOD Token",
          "Ranking System", "Guilds System", "Crafting Mechanism", "Marketplace", "NFT", "$WOD Token"
        ]
      },
      secondCard: {
        titleTop: "follow us  there:",
        btns: [
          {
            id: 1,
            link: "",
            text: "Whitepaper"
          },
          {
            id: 2,
            link: "",
            text: "Buy $WOD"
          },
          {
            id: 3,
            link: "",
            text: "Marketplace"
          },
          {
            id: 4,
            link: "",
            text: "Defish Box"
          }
        ],

      },
      thirdCard: {
        titleTop: "information:",
        list: [
          {
            title: "Game:",
            desc: "MMorts, Strategy, PvP",
            isPink: true,
          },
          {
            title: "Developer:",
            desc: "Defish Games",
            isPink: false,
          },
          {
            title: "Languages:",
            desc: "English, Russian and 7 more",
            isPink: false
          },
          {
            title: "Community:",
            desc: "Forum, Support",
            isPink: true,
          },
        ]
      },
    }
  }
}
</script>

<style scoped lang="scss">
.socials {
  .v-btn{
    &:hover {
      color: #E94485;
      svg{
        path {
          fill: #E94485;
        }
      }
    }
  }
}
.list-el{
  font-weight: 500;
  font-size: 18px;
}
</style>
