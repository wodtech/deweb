<template>
  <v-row>
    <v-col order="2" order-sm="1" md="5" sm="7" cols="12" class="d-flex justify-center flex-column">
      <div class="text-h3 mb-8">
        {{ data.name }}
      </div>
      <div class="d-flex mb-4">
        <v-chip small class="mr-2" :key="n" v-for="n in data.tags" text-color="secondary">
          {{ n }}
        </v-chip>
      </div>
      <div class="body-1 mb-4">
        But I must explain to you how all this mistaken idea
        of denouncing pleasure and praising pain was born
        and I will give you 
      </div>
      <div class="d-flex">
        <v-btn elevation="0" class="mr-4" rounded x-large color="primary">
          play now
        </v-btn>

        <v-btn elevation="0" rounded x-large color="black" outlined>
          learn more
        </v-btn>
      </div>
    </v-col>
    <v-col order="1" order-sm="2" offset-sm="1" offset="0" md="6" sm="4" cols="12">
      <v-card color="grey" rounded="xl" width="100%">
        <v-responsive :aspect-ratio="1.5"></v-responsive>
      </v-card>
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