<template>
  <v-card class="arts-stripe d-flex flex-column py-16 --posr" color="white" tile elevation="0">
    <v-container class="bg-container">
      <img class="bg" src="~/assets/images/fish-bg-launcher.png" alt="">
    </v-container>

    <div class="d-flex flex-column align-center pb-16 px-3">
      <div class="text-h2 mb-6">
        OUR ART
      </div>
      <div class="body-1 text-center" style="max-width: 585px">
        We are the artists of our own new reality.  <br/>
        Find your inner voice and essence in our mystical NFT cards.
      </div>
    </div>

    <div class="d-flex flex-column" style="overflow: hidden;">
      <div class="d-flex flex-column  ">
        <div class="top d-flex mb-8">
          <v-card style="background: #06101c;min-width: 200px;height: 200px"   :key="n._id" v-for="n in randArts.slice(0, 20)" rounded="lg" class="mr-8">
            <v-img width="200" :src="n.image" :aspect-ratio="1">
            </v-img>
          </v-card>
        </div>
        <div class="bot d-flex" style="transform: translateX(-100px);">
          <v-card style="background: #06101c;min-width: 200px;height: 200px"   :key="n._id" v-for="n in randArts.slice(20)" rounded="lg" class="mr-8">
            <v-img width="200" :src="n.image" :aspect-ratio="1">
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


<script setup>
import { ref } from 'vue'

const { data: arts } = await useAsyncData(
    'arts',
    async () => await queryContent('/arts').find()
);
let randArts = []

randArts = arts ? ref(getRangomArts()) : []

function  getRandomInt() {
  return Math.floor(Math.random() * arts.value.length);
}

function  getRangomArts () {
  let randArr = []
  while (randArr.length<40) {
    let art = arts.value[getRandomInt(arts.value.length)]
    if (randArr.every(item=> {
      return item._id !== art._id
    })) {

      randArr.push(art)
    }
  }
  return randArr
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
