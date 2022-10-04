<template>
  <div class="main-frame">
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
            <v-col class="d-flex align-center justify-center">
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="100%"
                max-width="100%"
                contain
                :src="imgSrc"
              ></v-img>
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

.main-frame {
  padding-top: 120px;
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

</style>
