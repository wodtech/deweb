<template>
 <div class="td-game-section d-flex align-center --posr">
   <div class="bg-container">
     <img class="bg" src="~/assets/images/fishes-opacity.png">
   </div>
   <v-container class="--cnt">
     <v-row>
       <v-col order="2" order-sm="1" md="5" sm="7" cols="12" class="d-flex justify-center flex-column">
         <div class="text-h3 mb-8">
           {{ data.title }}
         </div>
         <div class="d-flex mb-4">
           <v-chip small class="mr-2" :key="n" v-for="n in data.tags" text-color="secondary">
             {{ n }}
           </v-chip>
         </div>
         <div class="description mb-4">
           {{ data.short_description }}
         </div>
         <div class="d-flex">
           <v-btn
             href="https://game.worldofdefish.com/"
             target="_blank"
             x-large
             rounded
             elevation="0"
             style="pointer-events: none;opacity: 0.7"
             class="play-btn font-weight-light rounded-pil mr-2"
           >SOON
           </v-btn>
           <v-btn
             to="/game-td"
             nuxt
             style="background: white;min-width: 160px"
             text
             elevation="0"
             rounded
             x-large
             color="black" >
             LEARN MORE
           </v-btn>
         </div>
       </v-col>
       <v-col order="1" order-sm="2" offset-sm="1" offset="0" md="6" sm="4" cols="12">
         <v-card color="grey" rounded="xl" width="100%">
           <v-img :src="tdImage" alt="tower-defish-image" :aspect-ratio="1.5"></v-img>
         </v-card>
       </v-col>
     </v-row>
   </v-container>
 </div>
</template>

<script setup>
import tdImageSrc from 'assets/images/td-preview.jpg'

const tdImage = tdImageSrc
const props =  defineProps(['data'])
const {data} = props
</script>
<style lang="scss" scoped>
.td-game-section {
  height: 100vh;
  width: 100%;
  .bg-container {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .bg {
      max-width: 700px;
      width: 100%;
      position: absolute;
      top: 10%;
      left: 10%;
    }
  }
  .description {
    font-size: 18px;
  }
}
</style>

