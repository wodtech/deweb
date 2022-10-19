<template>
  <v-card dark elevation="0" tile class="main-frame d-flex">
    <div class="img-container">
      <video autoplay muted loop class="w-100" id="myVideo">
        <source src="~/assets/video/main.mp4" class="bg-img" type="video/mp4">
      </video>
    </div>
    <v-container class="py-16 --posr">
      <v-row style="height: 100%;">
        <v-col cols="12" sm="8" md="7" lg="6" class="d-flex flex-column align-start justify-center">
          <div class="mb-4 titles">
            <div class="text-h1 mb-4">
              web3 gaming
            </div>
            <div class="main text-h1">
              studio
            </div>
          </div>
          <div class="body-1 mb-14">
            Building a new gaming experience in a world of chances. Entertain yourself in a gaming economy that you deserve.
          </div>

          <v-btn width="170" rounded x-large color="primary">
            play now
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.main-frame {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  .img-container {
    width: 100%;
    height: 100%;
    position: absolute;
    #myVideo{
      min-width: 1920px;
      width: 100%;
      height: 100%;
      object-fit: contain;
      overflow: hidden;
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
    &:before{
      position: absolute;
      content: '';
      width: 60%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 37%, rgba(16,18,43,0.9475140397956058) 50%, rgba(13,14,42,0.8018557764902836) 62%, rgba(20,23,45,0) 97%);
      @media screen and (max-width: 600px) {
        width: 100%;
        background: rgb(2,0,36);
      }
    }
    .bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .main-title {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }

  .titles {
    .main {
      font-size: 9rem !important;
      line-height: 9rem;
    }
    .sub {

    }
  }

}

</style>
