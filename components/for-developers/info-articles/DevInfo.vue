<template>
  <v-row :class="['dev-info d-flex pa-8', contentReverse ? 'flex-row-reverse' : 'flex-row' ]" >
    <v-col md="6" sm="4" cols="12" class="d-flex flex-column justify-center">
      <v-card color="grey" rounded="xl" width="100%">
        <v-img :src="data.img" :aspect-ratio="1.5"></v-img>
      </v-card>
    </v-col>
    <v-col offset-sm="1" md="5" sm="7" cols="12" offset="0" class="d-flex flex-column justify-center">
      <div class="text-h3 mb-8">
        {{ data.title }}
      </div>
      <div class="body-1 mb-4">
        {{ data.description }}
      </div>
      <div class="d-flex">
        <v-btn v-if="data.links.github" :href="data.links.github" target="_blank" elevation="0" class="mr-4" rounded x-large>
          GITHUB
        </v-btn>

        <v-btn v-if="data.links.medium" :href="data.links.medium" target="_blank" elevation="0" rounded x-large>
          MEDIUM
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    data: {},
    contentReverse: {
      type: Boolean
    }
  },
}
</script>

<style>
.dev-info {
  background: #FFFFFF;
  border-radius: 20px;
}
</style>
