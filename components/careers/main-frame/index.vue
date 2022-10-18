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
            <v-col style="height: 250px;overflow: visible" class="grid-wrap-block d-flex align-start">
              <div class="grid-container w-100">
                <div class="left-block">
                  <div class="r1-c1" style="margin-bottom: 6px">
                    <v-img aspect-ratio="1" max-width="100%" cover class="h-100 w-100 rounded-lg " :src="row1.coll1"></v-img>
                  </div>
                  <div class="r1-c2" style="margin-top: 4px">
                    <v-img aspect-ratio="1"  max-width="100%" cover  class="h-100 w-100 rounded-lg" :src="row1.coll2"></v-img>
                  </div>
                </div>
                <div class="center-block">
                  <div class="r2-c2">
                    <v-img aspect-ratio="1"  max-width="100%" cover  class="h-100 w-100 rounded-lg" :src="row2.coll2"></v-img>
                  </div>
                  <div class="r2-c11">
                    <v-img aspect-ratio="1"  max-width="100%" cover  class="h-100 w-100 rounded-lg" :src="row2.coll11"></v-img>
                  </div>
                  <div class="r2-c12">
                    <v-img aspect-ratio="1"  max-width="100%" cover  class="h-100 w-100 rounded-lg" :src="row2.coll12"></v-img>
                  </div>
                </div>
                <div class="right-block">
                  <div class="r3-c1" style="margin-bottom: 5px;">
                    <v-img aspect-ratio="1"  max-width="100%" cover  class="h-100 w-100 rounded-lg" :src="row3.coll1"></v-img>
                  </div>
                  <div class="r3-c2" style="margin-bottom: 5px;">
                    <v-img aspect-ratio="1"  max-width="100%" cover  class="h-100 w-100 rounded-lg" :src="row3.coll2"></v-img>
                  </div>
                  <div class="r3-c3" >
                    <v-img aspect-ratio="1"  max-width="100%" cover  class="h-100 w-100 rounded-lg" :src="row3.coll3"></v-img>
                  </div>
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
      row1: {
        coll1: require('~/assets/images/careers/r1-col1.png'),
        coll2: require('~/assets/images/careers/r1-col2.png')
      },
      row2: {
        coll2: require('~/assets/images/careers/r2-col2.png'),
        coll11: require('~/assets/images/careers/r2-col11.png'),
        coll12: require('~/assets/images/careers/r2-col12.png'),
      },
      row3: {
        coll1: require('~/assets/images/careers/r3-col1.png'),
        coll2: require('~/assets/images/careers/r3-col2.png'),
        coll3: require('~/assets/images/careers/r3-col3.png')
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-container {
  z-index: 0;
  max-width: 595px;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 25% 40% 25%;
  justify-content: end;
  @media screen and (max-width: 1265px) {
    max-width: 540px;
  }
  img{
    object-fit: contain;
  }
  .left-block{
    display: grid;
    grid-template-rows: 2fr 1fr;
  }
  .right-block {
    display: grid;
    grid-gap: 5px;
    grid-template-rows: 1fr 1fr 1fr;
    .r3-c3{
      max-height: 153px;
    }
  }
  .center-block {
    display: grid;
    grid-gap: 10px;
    grid-template-rows: 2fr 1fr;
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
.grid-wrap-block {
  justify-content: end;
  @media screen and (max-width: 1265px) {
    justify-content: center;
  }
}
.main-frame {
  height: 50vh;
  width: 100%;
  background: black;
  position: relative;
  min-height: 500px;
  @media screen and (max-width: 1265px) {
    min-height: 700px;
  }
  @media screen and (max-width: 960px) {
    min-height: 700px;
  }
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
