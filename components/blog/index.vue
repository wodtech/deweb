<template>
  <div class="blog">
    <v-container class="d-flex flex-column py-16">
      <div class="d-flex py-6">
        <div class="text-h3">
          latest news
        </div>
        <v-spacer></v-spacer>
        <v-btn rounded text>
          read all
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>

      <v-row>
        <v-col cols="5">
          <v-hover v-slot="{ hover }">
            <v-card 
              :elevation="hover ? 5 : 20" 
              style="transition: box-shadow 0.3s ease-in-out;" 
              rounded="xl" 
              min-height="100%"
            >
              <v-img :src="mainArticle.img" class="rounded-xl"></v-img>
              <div class="d-flex flex-column align-start pa-4">
                <div class="body-1 ml-4 flex-grow-1">
                  {{ mainArticle.short_title }}
                </div>
                <v-btn rounded text class="mt-3">
                  read now
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="7" class="d-flex flex-column">

          <v-hover v-slot="{ hover }" v-for="(n, i) in otherArticles" :key="n.title">
            <v-card 
              :elevation="hover ? 5 : 20"
              rounded="xl" 
              style="transition: box-shadow 0.3s ease-in-out;"
              class="d-flex flex-grow-1" 
              :class="i ? 'mt-6' : ''"
            >
              <v-img width="40%" class="rounded-xl" :src="n.img"></v-img>
              <div class="d-flex flex-column align-start pa-4">
                <div class="body-1 ml-4 flex-grow-1">
                  {{ n.short_title }}
                </div>
                <v-btn rounded text class="mt-3">
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
  data: () => ({
    data: [
      {
        title: "Small title 0",
        short_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: "https://picsum.photos/600/400",
      },
      {
        title: "Small title 1",
        short_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: "https://picsum.photos/600/400",
      },
      {
        title: "Small title 2",
        short_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: "https://picsum.photos/600/400",
      },
    ],
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

<style>

</style>