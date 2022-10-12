<template>
  <v-hover v-slot="{ hover }" >
    <v-card 
      :elevation="hover ? 5 : 10"
      rounded="xl" 
      style="transition: box-shadow 0.3s ease-in-out;"
      class="d-flex flex-column flex-md-row"
      height="100%"
      width="100%"
    >
      <v-img aspect-ratio="1" class="rounded-xl" max-width="40%" cover style="flex: 0 0 40%" :src="image"></v-img>
      <div class="d-flex flex-grow-1  flex-column align-start pa-4">
        <span class="body-1 ml-4 flex-grow-1">
          {{title}}
        </span>
        <span class="body-1 ml-4 flex-grow-1">
          {{ shortDescription }}
        </span>
        <v-btn :to="{ name: 'blog-slug', params: {slug: slug} }" rounded text class="mt-3" nuxt>
          read now
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    shortDescription: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
}
</script>