<template>
  <div class="screenshots-frame">
    <v-container class="d-flex flex-column">
      <div class="d-flex py-6">
        <div class="text-h4">
          screenshots and videos
        </div>
        <v-spacer></v-spacer>
        <v-btn class="pink--text"  rounded text>
          see more
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
      <v-card height="500" color="transparent" elevation="0" class="d-flex flex-column py-16 --posr">
        <no-ssr>
          <Flickity ref="flickity" :options="flickityOptions">
            <div v-for="el in cells" :key="el.id" class="carousel-cell">
              <div class="slide-element">
                <img :src="el.img" alt="">
              </div>
            </div>
          </Flickity>
        </no-ssr>
      </v-card>
      <v-row class="cards-wrapper d-flex">
        <v-col class="d-flex align-center" cols="7">
          <v-hover v-slot="{ hover }">
            <v-card 
              :elevation="hover ? 5 : 20" 
              style="transition: box-shadow 0.3s ease-in-out;" 
              rounded="xl"
              outlined
              height="100%"
              max-width="100%"
              class="pa-14 d-flex justify-space-between flex-column"
            >
              <div class="top-text d-flex flex-column">
                <span class="text-h3 mb-4">{{firstCard.titleTop}}</span>
                <span class="first-top-desc body-1">{{firstCard.descTop}}</span>
              </div>
              <div class="bottom-text d-flex flex-column justify-end">
                <span class="first-bottom-title text-h3 mb-4">{{firstCard.titleBottom}}</span>
                <v-row class="d-flex">
                  <v-col v-for="text in firstCard.descBottom" :key="text" cols="6">
                    <span class="subtitle-2">{{ text }}</span>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="max-width: 500" cols="5">
          <v-hover v-slot="{ hover }">
            <v-card 
              :elevation="hover ? 10 : 20"
              rounded="xl"
              outlined
              width="100%"
              style="transition: box-shadow 0.3s ease-in-out;"
              class="d-flex flex-column flex-grow-1 pa-14" 
            >
            <span class="text-h3 mb-4">{{secondCard.titleTop}}</span>
            <div class="d-flex flex-grow-1">
              <v-btn icon>
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-facebook</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-telegram</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-discord</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </div>
            <div class="d-flex flex-grow-1">
              <v-btn v-for="btn in secondCard.btns" :key="btn.id" large class="large-button font-weight-light rounded-pill mr-2">
                {{btn.text}}
              </v-btn>
            </div>
            </v-card>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-card 
              :elevation="hover ? 5 : 20"
              rounded="xl"
              outlined
              height="460"
              width="100%"
              style="transition: box-shadow 0.3s ease-in-out;"
              class="d-flex flex-column flex-grow-1 mt-6 pa-14" 
            >
            <span class="text-h3 mb-4">{{thirdCard.titleTop}}</span>
            <div class="d-flex flex-column flex-grow-1">
              <div v-for="el in thirdCard.list" :key="el" class="d-flex flex-column flex-grow-1">
                <div class="d-flex  subtitle-1">{{el.title}}</div>
                <a href class="d-flex flex-grow-1 subtitle-2" :style="pinkClass(el.isPink)">{{el.desc}}</a>
              </div>
            </div>
            
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <div class="img-container">
      <img :src="secondBg" class="bg-img" alt="main background">
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
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
      secondBg: require("~/assets/images/second-bg.png"),
      cells: [
        {
          id: 1,
          img: "https://picsum.photos/400/200",
        },
        {
          id: 2,
          img: "https://picsum.photos/400/200",
        },
        {
          id: 3,
          img: "https://picsum.photos/400/200",
        },
        {
          id: 4,
          img: "https://picsum.photos/400/200",
        },
        {
          id: 5,
          img: "https://picsum.photos/400/200",
        },
      ],
      flickityOptions: {
        initialIndex: 2,
        contain: true,
        freeScroll: true,
        wrapAround: true,
        pageDots: true,
        prevNextButtons: false,
      },
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },
    pinkClass(isPink) {
    if (isPink) {
      return 'color: rgba(233, 68, 133, 1)'
    }
    return 'color: black'
  }
  },
  
}
</script>

<style lang="scss">
  .flickity-page-dots {
    .dot {
      bottom: -22px;
      width: 9px;
      height: 9px;
      opacity: 1;
      text-align: center;
      vertical-align: middle;
      position: relative;
      background-color: rgba(232, 69, 133, 0.5);
    }
    .dot.is-selected {
        background-color: rgba(232, 69, 133, 1);
        &::after {
        content: "";
        position: absolute;
        width: 35px;
        height: 35px;
        border: 2px solid rgba(232, 69, 133, 1);
        left: 50%; top: 50%; 
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }
    }
  }
  .carousel-cell {
    width: 30%;  
    margin-right: 15px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
  }
  
</style>
<style lang="scss" scoped>
.slide-element {
  width: 380px;
  height: 214px;
  margin-right: 20px;
  img {
    border-radius: 30px;
  }
}
.screenshots-frame {
  width: 100%;
  .card-wrapper {
    height: 100%;
  }
}
.img-container {
    width: 100%;
    height: 100%;
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: -5;
    .bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
}
.card-title {

}
</style>