<template>
  <div class="players d-flex flex-column py-16">
    <v-container class="py-0">
      <div class="d-flex py-3 align-center">
        <div class="text-h3 my-0">
          screenshots and videos
        </div>
        <v-spacer></v-spacer>
        <v-btn class="pink--text" rounded text>
          see more
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-container>
    <v-card color="transparent" elevation="0" class="d-flex flex-column --posr">
      <no-ssr>
        <!-- <Flickity ref="flickity" :options="flickityOptions">
          <div v-for="el in cells" :key="el.slug" class="carousel-cell">
            <div class="slide-element">
              <img :src="el.img" alt="">
            </div>
          </div>
        </Flickity> -->
        <Flickity v-if="show_slider" ref="flickity" :options="flickityOptions">
          <div v-for="(chunk, i) in chunks" :key="i + '-' + cardsPerChunk" class="carousel-cell py-5">
            <v-container>
              <v-row class="slider-wrapper-inner">
                <v-col md="4" sm="6" cols="12" v-for="el in chunk" :key="el.id">
                  <v-card elevation="10" class="d-flex flex-column" rounded="xl">
                    <v-img :src="el.img" :aspect-ratio="1.5"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
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
          img: require('~/assets/images/player1.png'),
          name: "jhon jhons",
          game: "World De Fish",
          review: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. ",
        },
        {
          id: 2,
          img: require('~/assets/images/player2.png'),
          name: "jhon jhons",
          game: "World De Fish",
          review: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. ",
        },
        {
          id: 3,
          img: require('~/assets/images/player3.png'),
          name: "jhon jhons",
          game: "World De Fish",
          review: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. ",
        },
        {
          id: 4,
          img: require('~/assets/images/player2.png'),
          name: "jhon jhons",
          game: "World De Fish",
          review: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. ",
        },
        {
          id: 5,
          img: require('~/assets/images/player3.png'),
          name: "jhon jhons",
          game: "World De Fish",
          review: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. ",
        }
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
      console.log(this.$vuetify.breakpoint.name);
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1
        case 'sm': return 2
        case 'md': return 3
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
:deep(.carousel-cell) {
  width: 100%;
}
</style>