<template>
  <div class="players d-flex flex-column">
    <div class="d-flex align-center justify-center">
      <span class="text-h3">OUR PLAYER TALK</span>
    </div>
    <v-card color="transparent" elevation="0" class="d-flex flex-column py-16 --posr">
      <no-ssr>
        <!-- <Flickity ref="flickity" :options="flickityOptions">
          <div v-for="el in cells" :key="el.slug" class="carousel-cell">
            <div class="slide-element">
              <img :src="el.img" alt="">
            </div>
          </div>
        </Flickity> -->
        <Flickity ref="flickity" :options="flickityOptions">
          <div v-for="el in cards" :key="el.id" class="carousel-cell">
            <div class="d-flex flex-column pa-12 card border-gradient-purple ">
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
                      :src="el.img"
                    />
                  </v-avatar>
                  <div class="mb-2 text-h6">{{el.name}}</div>
                  <div class="mb-2 subtitle-2 font-weight-bold pink--text">{{el.game}}</div>
                </div>
                <div class="commas d-flex flex-grow-1 justify-end">
                  <svg width="76" height="69" viewBox="0 0 76 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.3682 69L48.3347 69C52.1506 57.5 54.1646 47.8818 54.3766 40.1454L40.7029 40.1454L40.7029 4.54363e-06L76 7.62939e-06L76 32.3046C76 45.0591 73.4561 57.2909 68.3682 69ZM27.6653 69L7.6318 69C11.4477 57.5 13.4616 47.8818 13.6736 40.1454L-5.10685e-06 40.1454L-1.59722e-06 9.85263e-07L35.2971 4.07103e-06L35.2971 32.3046C35.2971 45.0591 32.7531 57.2909 27.6653 69Z" fill="#E0E3F7"/>
                  </svg>
                </div>
              </div>
              <div class="d-flex flex-grow-1 subtitle-1 font-weight-light">
                {{el.review}}
              </div>
            </div>
          </div>
        </Flickity>
      </no-ssr>
    </v-card>
  </div>
</template>

<script>
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
        initialIndex: 2,
        freeScroll: true,
        wrapAround: true,
        pageDots: true,
        prevNextButtons: false,
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 500px;
  height: 100%;
  position: relative;
	background: #fff;
  background-clip: padding-box;
	border: solid 2px transparent;
	border-radius: 30px;
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
    display: flex;
    width: 30%;
    margin: 0px 25px;
    justify-content: center;
    padding: 10px 0px;
    .slide-element {
      display: flex;
}
}
</style>