<template>
  <div  class="main-frame">
    <div class="img-container">
      <img src="~/assets/images/blurred-bg.png" class="bg-img" alt="bg">
    </div>
    <div class="img-contain">
      <img class="w-100" src="~/assets/images/for-developers/main-img.png" alt="main-img">
    </div>
    <v-card
      height="100%"
      color="transparent"
      elevation="0"
      class="d-flex flex-column align-center justify-center py-16 --posr w-100"
    >
      <no-ssr class="d-flex flex-grow-1 justify-center">
        <v-container class="d-flex align-center justify-center">
          <v-row class="d-flex flex-column flex-lg-row">
            <v-col class="d-flex flex-column justify-center ">
              <div class="main-title d-flex  mb-9 mt-sm-3  mt-16  text-uppercase  white--text">
                for developers <br/> with open-source
              </div>
              <div class="desc mb-9 mt-sm-6 subtitle-2 font-weight-light white--text">
                We understand that to make the most legendary games
                we need to attract as more developers as can be.
                That’s why we aim to make our infrastructure open-source.
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
  data() {
    return {
      imgSrc: require("~/assets/images/test-img.png"),
    }
  }
}
</script>

<style lang="scss" scoped>

.main-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: black;
  position: relative;
  .main-title {
    font-size: 70px;
    line-height: 104.13%;
  }
  .main-left {
    .description {
      max-width: 400px;
    }
  }
}
.img-container {
  width: 100%;
  height: 100%;
  position: absolute;
  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.img-contain {
  top: 100px;
  right: 20px;
  width: 60%;
  height: 70%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
  position: absolute;
  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
