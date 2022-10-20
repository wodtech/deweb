<template>
  <v-row>
    <v-col md="6" sm="4" cols="12" class="d-flex flex-column justify-center">
      <v-card color="grey" rounded="xl" width="100%">
        <v-img :src="require('~/assets/images/wod-preview.jpg')" :aspect-ratio="1.5"></v-img>
      </v-card>
    </v-col>
    <v-col offset-sm="1" md="5" sm="7" cols="12" offset="0" class="d-flex flex-column justify-center">
      <div class="text-h3 mb-8">
        {{ data.title }}
      </div>
      <div class="d-flex mb-4">
        <v-chip small class="mr-2" :key="n" v-for="n in data.tags" color="grey">
          {{ n }}
        </v-chip>
      </div>
      <div class="body-1 mb-4">
        {{ data.short_description }}
      </div>
      <div class="d-flex">
        <v-btn
          to="/game-wod"
          nuxt
          style="background: white;min-width: 160px"
          elevation="0"
          text
          rounded
          x-large color="black">
          learn more
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    data: {},
  },
}
</script>

<style>

</style>
