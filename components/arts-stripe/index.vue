<template>
  <v-card class="arts-stripe d-flex flex-column py-16 --posr" color="white" tile elevation="0">
    <v-container class="bg-container">
      <img class="bg" src="~/assets/images/fish-bg-launcher.png" alt="">
    </v-container>

    <div class="d-flex flex-column align-center pb-16">
      <div class="text-h2 mb-6">
        OUR ARTS
      </div>
      <div class="body-1 text-center" style="max-width: 585px">
        But I must explain to you how all this mistaken idea of denouncing pleasure
        and praising pain was born and I will give you
      </div>
    </div>

    <div class="d-flex flex-column" style="overflow: hidden;">
      <div class="d-flex flex-column slider">
        <div class="top d-flex mb-8">
          <v-card elevation="10" :key="n" v-for="n in 20" rounded="lg" class="mr-8">
            <v-img width="200" src="https://picsum.photos/600/400" :aspect-ratio="1">

            </v-img>
          </v-card>
        </div>
        <div class="bot d-flex" style="transform: translateX(-100px);">
          <v-card elevation="10" :key="n" v-for="n in 20" rounded="lg" class="mr-8">
            <v-img width="200" src="https://picsum.photos/600/400" :aspect-ratio="1">

            </v-img>
          </v-card>
        </div>
      </div>
      <div class="d-flex justify-center pt-16">
        <v-btn nuxt to="/arts" rounded x-large color="primary">
          see all arts
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.bg-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  overflow: hidden;

  .bg {
    position: absolute;
    top: 0;
  }
}

</style>
