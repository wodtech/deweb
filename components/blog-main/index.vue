<template>
  <div class="blog --posr">
    <div class="img-container">
      <img src="~/assets/images/blog.png" class="bg-img" alt="bg">
    </div>
    <v-card height="100%" color="transparent" elevation="0" class="d-flex flex-column align-center justify-center py-16 --posr">
      <no-ssr class="d-flex flex-grow-1 justify-center w-100 text-white">
        <v-container class="d-flex align-center justify-center">
          <v-row class="d-flex flex-column flex-lg-row">
            <v-col class="d-flex flex-column justify-center">
              <div class="d-flex mb-2 title text-h1  white--text">BLOG</div>
              <div class="d-flex mb-2 title text-h4  white--text">DEFISH GAMES</div>
              <div class="desc subtitle-2 font-weight-light white--text">
                WEB 3 gaming that you deserve.
              </div>
            </v-col>
            <v-col class="d-flex align-center justify-center">

            </v-col>
          </v-row>
        </v-container>
       </no-ssr>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    data: {}
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 2,
        contain: true,
        freeScroll: true,
        wrapAround: true,
        pageDots: true,
        prevNextButtons: false,
      }
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
// .flickity-viewport {
//   height: 100% !important;
// }
</style>
<style lang="scss" scoped>
.large-button {
  width: 166px !important;
  color: white !important;
  background-color: rgba(233, 68, 133, 1) !important;
}
.img-wrapper {
  width: 100%;
  height: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}
.img-container {
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
:deep(.flickity-page-dots) {
  bottom: 30px !important;
}
:deep(.carousel-cell) {
  width: 100%;
  height: 100%;
}
:deep(.flickity-viewport) {
  height: 100% !important;
}
:deep(.flickity-slider) {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flickity-container {
  width: 100%;
  height: 100%;
  .flickity-viewport {
    width: 100%;
    height: 100%;
  }
}
.blog {
  height: 100vh;
  min-height: 1000px;
  @media screen and (max-width: 960px){
    height: 1000px;
  }
  width: 100%;
  background-color: rgba(1, 2, 4, 1);
}
.date {
  font-family: 'Relaway';
  color: rgba(255, 255, 255, 1);
  opacity: 0.5;

}
</style>
