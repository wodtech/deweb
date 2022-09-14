<template>
  <div class="arts-slider">
    <div class="blog">
      <v-container class="d-flex flex-column py-16">
        <div class="d-flex py-6">
          <div class="text-h4">
            more our arts
          </div>
        </div>
        <v-carousel v-model="model">
          <v-carousel-item
            v-for="(color, i) in colors"
            :key="color"
          >
            <v-card rounded="xl">
              <v-img v-for="n in imgs" :src="n.url"></v-img>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {}
  },
  data: () => ({
    per_page: 12,
  })
}
</script>

<style>

</style>