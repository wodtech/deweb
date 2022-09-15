<template>
  <div class="game-cards">
    <v-container class="d-flex py-16">
      <v-row>
        <v-col v-for="n in games" :key="n.slug" cols="12" md="6">
          <v-card elevation="10" rounded="xl">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              :alt="n.title"
            ></v-img>
            <div class="d-flex align-center">
              <v-card rounded="xl">
                <v-img :src="n.icon"></v-img>
              </v-card>
              <div class="d-flex flex-column">
                <div class="text-h5">
                  {{ n.title }}
                </div>
                <div class="body-2">
                  {{ n.subtitle }}
                </div>
              </div>
              <v-spacer></v-spacer>
              <v-btn color="primary" x-large rounded>
                learn more
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    games: {},
  },
}
</script>

<style>

</style>