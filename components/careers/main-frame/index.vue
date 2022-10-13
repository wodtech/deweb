<template>
  <div class="main-frame">
    <div class="img-container">
      <img src="~/assets/images/careers/main-bg.png" class="bg-img" alt="bg">
    </div>
    <v-card height="100%" color="transparent" elevation="0" class="d-flex flex-column align-center justify-center py-16 --posr">
      <no-ssr class="d-flex flex-grow-1 justify-center">
        <v-container class="d-flex align-center justify-center">
          <v-row class="d-flex flex-column flex-lg-row">
            <v-col class="d-flex flex-column justify-center">
              <div class="main-title d-flex mb-9 text-uppercase  white--text">
                Our mission
              </div>
              <div class="desc mb-9 subtitle-2 font-weight-light white--text">
                We are biulding AAA future for new gaming ecenomies with blockchain anthem.
                  Be a part of new gaming history - this whats drive us the most.
              </div>
            </v-col>
            <v-col style="height: 250px;overflow: visible" class="d-flex align-start justify-center">
              <div class="grid-container w-100">
                <div class="left-block">
                  <img class="r1-c1 w-100" src="~/assets/images/careers/r1-col1.png" alt="">
                  <img class="r1-c2 w-100" src="~/assets/images/careers/r1-col2.png" alt="">
                </div>
                <div class="center-block">
                  <img class="r2-c2 w-100" src="~/assets/images/careers/r2-col2.png" alt="">
                  <img class="r2-c11 w-100" src="~/assets/images/careers/r2-col11.png" alt="">
                  <img class="r2-c12 w-100" src="~/assets/images/careers/r2-col12.png" alt="">
                </div>

                <div class="right-block">
                  <img class="r3-c1" src="~/assets/images/careers/r3-col1.png" alt="">
                  <img class="r3-c2" src="~/assets/images/careers/r3-col2.png" alt="">
                  <img class="r3-c3" src="~/assets/images/careers/r3-col3.png" alt="">

                </div>
              </div>
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
      imgSrc: require("~/assets/images/test-img.png")
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-container {
  max-width: 600px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 27% 45% 27% ;

  img{

  }
  .left-block{

  }
  .right-block {

  }
  .center-block {
    grid-column: 3 / 2;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    .r2-c11 {
      grid-column: 1;
      grid-row: 2;
    }
    .r2-c12 {
      grid-column: 2;
      grid-row: 2;
    }
    .r2-c2 {
      grid-column: 1 / 3;
      grid-row: 1;
    }
  }


}
.main-frame {
  height: 50vh;
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
</style>
