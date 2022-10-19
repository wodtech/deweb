<template>
  <div class="blog">
    <v-container class="d-flex flex-column py-16">
      <div class="d-flex align-center py-6">
        <div class="text-h3">
          latest news
        </div>
        <v-spacer></v-spacer>
        <v-btn to="/blog" nuxt color="primary" rounded text>
          read all
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>

      <v-row>
        <v-col cols="12" md="5">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 5 : 20"
              style="transition: box-shadow 0.3s ease-in-out;max-height: 500px;"
              rounded="xl"
              min-height="100%"
            >
              <v-img style="max-height: 320px" :src="mainArticle.image" class="rounded-xl"></v-img>
              <div class="d-flex flex-column align-start justify-space-between pa-4 content-wrap">
                <div style="font-weight: 600" class="body-1 ml-4 flex-grow-1">
                  {{ mainArticle.title }}
                </div>
                <v-btn :to="{ name: 'blog-slug', params: {slug: mainArticle.slug} }" rounded text class="mt-3 read-btn">
                  read now
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="7" class="d-flex flex-column">

          <v-hover v-for="(n, i) in otherArticles" v-slot="{ hover }" :key="n.slug">
            <v-card
              :elevation="hover ? 5 : 20"
              rounded="xl"
              style="transition: box-shadow 0.3s ease-in-out;max-height: 250px;"
              class="d-flex flex-grow-1"
              :class="i ? 'mt-6' : ''"
            >
              <v-img width="40%" class="rounded-xl" :src="n.image"></v-img>
              <div style="width: 60%" class="d-flex flex-column align-start pa-4">
                <div style="font-weight: 600" class="body-1 ml-4 flex-grow-1">
                  {{ n.title }}
                </div>
                <v-btn :to="{ name: 'blog-slug', params: {slug: n.slug} }" rounded text class="mt-3 read-btn">
                  read now
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    data: {}
  },
  data: () => ({
  }),
  computed: {

    mainArticle() {
      return this.data[0];
    },

    otherArticles() {
      return this.data.slice(1, 3);
    },
  }
}
</script>

<style lang="scss" scoped>
.read-btn {
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
    background-color: rgba(233, 68, 133, 1) !important;
    &:disabled {
      color: white !important;
    }
  }
}
.content-wrap {
  height: 200px;
  @media screen and (max-width: 960px) {
    height: unset;
  }
}
</style>
