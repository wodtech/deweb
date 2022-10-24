<template>
  <div class="game-cards">
    <v-container class="py-16">
      <v-row>
        <v-col v-for="n in games" :key="n.slug" cols="12" md="6">
          <v-card elevation="10" width="100%" rounded="xl">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              :alt="n.title"
              width="100%"
              class="rounded-xl"
            ></v-img>
            <div class="card-content d-flex align-center justify-center pa-6">
              <div class="d-flex align-center">
                <v-card width="100px" class="mr-5" rounded="xl">
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
              </div>
              <v-spacer></v-spacer>
              <v-btn
                to="/game-td"
                nuxt
                color="primary"
                x-large
                rounded>
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

<style lang="scss" scoped>
.card-content {
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
}
</style>
