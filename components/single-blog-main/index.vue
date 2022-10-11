<template>
  <div class="single-blog d-flex flex-column align-center justify-center">
    <v-container class="d-flex align-center justify-center">
      <v-row class="d-flex flex-column justify-center flex-md-row">
        <v-col class="d-flex flex-column justify-center align-center" cols="6">
          <div style="max-width: 500px" class="d-flex flex-column">
            <div class="d-flex mb-9 title text-h3  white--text">{{blog.title}}</div>
            <div class="desc mb-9 subtitle-2 font-weight-light white--text">{{blog.description}}</div>
            <div class="date mb-9  white--text">{{parseDate(blog.date)}}</div>
            <div class="d-flex mb-9">
                <v-btn icon>
                  <v-icon color="primary">mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="primary">mdi-facebook</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon color="primary">mdi-telegram</v-icon>
                </v-btn>
            </div>
            <v-btn x-large class="font-weight-light rounded-pill large-button">read more</v-btn>
          </div>
        </v-col>
        <v-col class="d-flex align-center justify-center" cols="6">
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
      const day = newDate.getDay()
      const month = newDate.getMonth() + 1; // getMonth() returns month from 0 to 11
      const year = newDate.getFullYear();
      return `${day}.${month}.${year}`
    }
  }

}
</script>

<style lang="scss" scoped>
.single-blog {
  height: 100vh;
  width: 100%;
  background-color: rgba(1, 2, 4, 1);
}
.date {
  font-family: 'Relaway';
  color: rgba(255, 255, 255, 1);
  opacity: 0.5;
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