<template>
  <div class="single-blog d-flex flex-column align-center justify-center">
    <div class="img-container">
      <img src="~/assets/images/blurred-bg.png" class="bg-img" alt="bg">
    </div>
    <v-container style="z-index: 2" class="d-flex align-center justify-center">
      <v-row class="d-flex justify-center flex-md-row flex-column-reverse ">
        <v-col class="d-flex flex-column justify-center align-center" md="6" cols="12">
          <div style="max-width: 500px" class="d-flex flex-column align-center align-md-start">
            <div class="d-flex mb-9 title text-h3  white--text">{{blog.title}}</div>
            <div class="desc mb-md-9 mb-2 subtitle-2 font-weight-light white--text">{{blog.description}}</div>
            <div class="date mb-md-9 mb-2 caption font-weight-light white--text">{{parseDate(blog.date)}}</div>
            <div class="socials d-flex align-center mb-md-9 mb-2">
              <span class="white--text share-t pr-2">SHARE: </span>
                <v-btn icon>
                  <v-icon >mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon >mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon >mdi-linkedin</v-icon>
                </v-btn>
            </div>
          </div>
        </v-col>
        <v-col class="d-flex align-center justify-center" md="6" cols="12">
          <div class="img-wrapper d-flex justify-center">
            <img class="d-flex " :src="blog.image"  alt="">
          </div>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  props: {
    blog: {}
  },
  data() {
    return {

    }
  },
  methods: {
    parseDate(date) {
      const newDate = new Date(date)
      const day = this.formatDateValue(newDate.getDay())
      const month = this.formatDateValue(newDate.getMonth() + 1);
      const year = newDate.getFullYear();
      return `${day}.${month}.${year}`
    },
    formatDateValue(val) {
      return  val < 0 ? '00' : val > 9 ? val : '0' + val;
    }
  }

}
</script>

<style lang="scss" scoped>
.single-blog {
  height: 80vh;
  width: 100%;
  position: relative;
  background-color: rgba(1, 2, 4, 1);
  @media screen and (max-width: 960px) {
    height: 100vh;
  }
  .share-t{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
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
.date {
  font-family: 'Relaway';
  color: rgba(255, 255, 255, 1);
  opacity: 0.5;
}
.socials {
  .v-btn {
    color: #6B6F71;
    &:hover{
      color: #E94485;
    }
  }
}
.img-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
}
.large-button {
  width: 166px !important;
  color: white !important;
  background-color: rgba(233, 68, 133, 1) !important;
}
.nuxt-content {
    * {
      color: pink;
    }
    h1 {
      background-color: pink !important;
      color: pink !important;
      font-weight: bold;
      font-size: 28px;
    }
  }
</style>
