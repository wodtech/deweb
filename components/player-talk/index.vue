<template>
  <div class="players d-flex flex-column">
    <div class="d-flex align-center justify-center">
      <span class="text-h3">OUR PLAYER TALK</span>
    </div>
    <v-card color="transparent" elevation="0" class="d-flex flex-column py-16 --posr">
      <no-ssr>
        <Flickity v-if="show_slider" ref="flickity" :options="flickityOptions">
          <div v-for="(chunk, i) in chunks" :key="i + '-' + cardsPerChunk" class="carousel-cell py-10">
            <div class="slider-container">
              <v-row class="slider-wrapper-inner d-flex justify-center">
                <v-col style="max-width: 500px" md="6" sm="6" cols="12" lg="4" v-for="el in chunk" :key="el.id">
                  <v-card elevation="10" class="d-flex flex-column pa-12 card border-gradient-purple" rounded="xl">
                    <div class="d-flex">
                      <div class="d-flex flex-column">
                        <v-avatar
                          rounded="circle"
                          target="_blank"
                          size="80"
                          class="d-flex align-center justify-center mb-4"
                        >
                          <img
                            draggable="false"
                            v-if="el.img"
                            :src="el.img"
                          />
                          <div
                            v-else
                            class="mock-avatar"
                          ></div>
                        </v-avatar>
                        <div class="mb-2 text-h6">{{el.name}}</div>
                        <div class="mb-2 body-2 font-weight-bold pink--text">{{el.game}}</div>
                      </div>
                      <div class="commas d-flex flex-grow-1 justify-end">
                        <svg width="76" height="69" viewBox="0 0 76 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M68.3682 69L48.3347 69C52.1506 57.5 54.1646 47.8818 54.3766 40.1454L40.7029 40.1454L40.7029 4.54363e-06L76 7.62939e-06L76 32.3046C76 45.0591 73.4561 57.2909 68.3682 69ZM27.6653 69L7.6318 69C11.4477 57.5 13.4616 47.8818 13.6736 40.1454L-5.10685e-06 40.1454L-1.59722e-06 9.85263e-07L35.2971 4.07103e-06L35.2971 32.3046C35.2971 45.0591 32.7531 57.2909 27.6653 69Z" fill="#E0E3F7"/>
                        </svg>
                      </div>
                    </div>
                    <div class="desc d-flex flex-grow-1 font-weight-light">
                      {{el.review}}
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </Flickity>
      </no-ssr>
    </v-card>
  </div>
</template>

<script>
import { chunk } from 'lodash'
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          img: require('~/assets/images/players/1.png'),
          name: "@anyhoo",
          game: "World of Defish",
          review: "I have always been looking for a complex game that has what World of Defish offers, a constant pleasure to play a game by choosing the right strategy. WOD changed my perspective of play to earn games."
         },
        {
          id: 2,
          img: require('~/assets/images/players/2.png'),
          name: "@azinger",
          game: "World of Defish",
          review : "Without a doubt, one of the best current Cryptocurrency games.\n" +
            "A fishing game with infinite entertainment possibilities, you put it to work and while you earn its currency (WOD), you participate in Events, future competitions, searches, native Staking."
        },
        {
          id: 3,
          img: require('~/assets/images/players/3.png'),
          name: "@felipepln",
          game: "World of Defish",
          review : "World of Defish is the most beautiful and addicting crypto game ! I am part of the WOD family since the IDO and I just can't stop playing. I keep upgrading my equipment with the farmed WOD and I crafted a lot of cool equipment. I am very excited with the future of the Defish metaverse."
        },
        {
          id: 4,
          img: require('~/assets/images/players/4.png'),
          name: "@Steel",
          game: "World of Defish",
          review: "WOD is a superb gaming experience that is unique and very addictive. The Ukrainian team behind it, have been very hands on, always pushing forward despite all hardships facing Ukraine, Crypto and P2E games in general.",
        },
        {
          id: 5,
          name: "@crypto_kaptan",
          game: "World of Defish",
          review: "I am a Seedify investor and i have invested World of Defish on both public and private sales rounds. After a while I noticed Spintop Gamepedia article that says game is playable and here I am for about 8 months.",
        },
        {
          id: 6,
          name: "@Vikingkrat",
          game: "World of Defish",
          review: "Defish is the first NFT game i have played and invested in. I have over the last 9 month gain Friendships and lot of happy moments. I love all about the game and looking forward to the develop of both this game and other games. Least but not last.",
        },
      ],
      flickityOptions: {
        // initialIndex: 1,
        // freeScroll: true,
        // wrapAround: true,
        pageDots: true,
        prevNextButtons: false,
      },

      show_slider: true,
    }
  },


  watch: {

    'cardsPerChunk'() {
      this.show_slider = false;
      setTimeout(() => {
        this.show_slider = true;
      }, 10);
    }
  },

  computed: {

    cardsPerChunk() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1
        case 'sm': return 2
        case 'md': return 2
        case 'lg': return 3
        case 'xl': return 3
      }
    },

    // separate cards by breakpoints
    chunks() {
      return chunk(this.cards, this.cardsPerChunk)
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-container {
  padding: 0 150px;
  @media screen and (max-width: 960px) {
    padding: 0 25px;
  }
}
.mock-avatar{
  background: #cecece;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.card {
  // max-width: 500px;
  height: 100%;
  position: relative;
	background: #fff;
  background-clip: padding-box;
	border: solid 2px transparent;
  .desc {
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
  }
  &:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		margin: -2px; /* same as border width */
		border-radius: inherit; /* inherit container box's radius */
		background: linear-gradient(to left, rgba(255, 226, 238, 0.01), rgba(244, 50, 127, 1));
	}
}
:deep(.carousel-cell) {
  width: 100%;
}
</style>
