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
            <span class="first-top-desc body-1">{{game.description}}</span>
          </div>
          <div class="bottom-text d-flex flex-column justify-end">
            <span class="first-bottom-title text-h3 mb-4">{{firstCard.titleBottom}}</span>
            <v-row class="d-flex">
              <v-col v-for="text in game.features" :key="text" cols="12">
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
            <v-btn target="_blank" :href="social_links.twitter" icon>
              <v-icon size="27px" >mdi-twitter</v-icon>
            </v-btn>

            <v-btn target="_blank" :href="social_links.medium" icon>
              <svg style="width: 27px;" width="69" height="41" viewBox="0 0 69 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.1312 20.732C39.1312 31.8853 30.4832 40.9268 19.8159 40.9268C9.14867 40.9268 0.5 31.8833 0.5 20.732C0.5 9.5808 9.14801 0.536591 19.8159 0.536591C30.4839 0.536591 39.1312 9.57875 39.1312 20.732Z" fill="#999999"/>
                <path d="M60.3208 20.732C60.3208 31.2305 55.9968 39.7445 50.6628 39.7445C45.3288 39.7445 41.0048 31.2305 41.0048 20.732C41.0048 10.2336 45.3282 1.71959 50.6621 1.71959C55.9961 1.71959 60.3201 10.2309 60.3201 20.732H60.3208Z" fill="#999999"/>
                <path d="M65.5911 37.7642C67.4673 37.7642 68.9878 30.1361 68.9878 20.732C68.9878 11.3253 67.4666 3.69988 65.5911 3.69988C63.7155 3.69988 62.195 11.326 62.195 20.732C62.195 30.1381 63.7149 37.7642 65.5911 37.7642Z" fill="#999999"/>
              </svg>
            </v-btn>

            <v-btn target="_blank" :href="social_links.discord" icon>
              <svg style="width: 27px;" width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6149 9.025C10.6149 9.6045 10.2034 10.0795 9.68229 10.0795C9.17029 10.0795 8.74971 9.6045 8.74971 9.025C8.74971 8.4455 9.16114 7.9705 9.68229 7.9705C10.2034 7.9705 10.6149 8.4455 10.6149 9.025ZM6.34514 7.9705C5.824 7.9705 5.41257 8.4455 5.41257 9.025C5.41257 9.6045 5.83314 10.0795 6.34514 10.0795C6.86629 10.0795 7.27771 9.6045 7.27771 9.025C7.28686 8.4455 6.86629 7.9705 6.34514 7.9705ZM16 1.957V19C13.6966 16.885 14.4333 17.5851 11.7577 15.0005L12.2423 16.758H1.87429C0.841143 16.758 0 15.884 0 14.801V1.957C0 0.874 0.841143 0 1.87429 0H14.1257C15.1589 0 16 0.874 16 1.957ZM13.3943 10.963C13.3943 7.904 12.0777 5.4245 12.0777 5.4245C10.7611 4.3985 9.50857 4.427 9.50857 4.427L9.38057 4.579C10.9349 5.073 11.6571 5.7855 11.6571 5.7855C9.48532 4.54868 6.93414 4.54846 4.82743 5.51C4.48914 5.6715 4.288 5.7855 4.288 5.7855C4.288 5.7855 5.04686 5.035 6.69257 4.541L6.60114 4.427C6.60114 4.427 5.34857 4.3985 4.032 5.4245C4.032 5.4245 2.71543 7.904 2.71543 10.963C2.71543 10.963 3.48343 12.3405 5.504 12.407C5.504 12.407 5.84229 11.9795 6.11657 11.6185C4.95543 11.2575 4.51657 10.4975 4.51657 10.4975C4.65107 10.5953 4.87286 10.7221 4.89143 10.735C6.43464 11.633 8.62671 11.9272 10.5966 11.0675C10.9166 10.944 11.2731 10.7635 11.648 10.507C11.648 10.507 11.1909 11.286 9.99314 11.6375C10.2674 11.9985 10.5966 12.407 10.5966 12.407C12.6171 12.3405 13.3943 10.963 13.3943 10.963Z" fill="#999999"/>
              </svg>
            </v-btn>

            <v-btn target="_blank" :href="social_links.linkedin" icon>
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
  props: {
    game:{}
  },
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
      social_links: {
        twitter: "https://twitter.com/defishgames",
        discord: "https://discord.com/invite/78EfmhUgNJ",
        medium: "https://worldofdefish.medium.com/",
        linkedin: "https://www.linkedin.com/company/world-of-defish/mycompany/",
      },
      firstCard: {
        titleTop: "game desription:",
        descTop: "Feel a real Storm of the Seven Seas, hunting for mystical NFT Fish, crafting, compete and filling your pocket with $WOD doubloons. Welcometo World of Defish, play-to earn gaming universe running on BSC.",
        titleBottom: "core features:",
        descBottom: [
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
