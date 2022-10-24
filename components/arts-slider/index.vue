<template>
  <div class="arts-slider">
    <div class="blog">
      <v-container class="d-flex flex-column py-16">
        <div class="d-flex py-6">
          <div class="text-h3">
            more our arts
          </div>
        </div>
        <div
        >
          <v-row>
            <v-col
              style="position: relative;"
              v-for="n in sections"
              :key="n.slug"
              cols="12"
              sm="6"
              md="4"
              xl="2"
            >
              <v-card class="w-100 card-item d-flex align-center" rounded="xl">
                <img class="card-img"  :src="n.image">
                <v-responsive :aspect-ratio="1.5" />
              </v-card>
            </v-col>
          </v-row>
        </div>

        <div class="d-flex align-self-center pt-10">
          <v-btn
            v-if="page < pages"
            @click="showMore"
            :loading="loading"
            x-large
            rounded
            class="play-btn font-weight-light rounded-pill mr-2" >SHOW MORE</v-btn>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arts: {}
  },

  data: () => ({
    page: 1,
    loading: false
  }),
  methods: {
    showMore() {
      this.loading = true
      setTimeout(()=>{
        this.page++
        this.loading = false
      },500)

    }
  },
  computed: {

    sections() {
      return this.arts.slice(0, this.prePage * this.page);
    },

    prePage() {

      const per_page = [
        {
          breakpoint: 0,
          per_page: 2,
        },
        {
          breakpoint: 600,
          per_page: 4,
        },
        {
          breakpoint: 960,
          per_page: 12,
        },
        {
          breakpoint: 1264,
          per_page: 12,
        },
        {
          breakpoint: 1904,
          per_page: 24,
        },
      ]

      const result = per_page.find((item) => {
        return item.breakpoint >= this.$vuetify.breakpoint.width
      });

      return (result || per_page[per_page.length - 1]).per_page;
    },

    pages() {
      return Math.round(this.arts.length / this.prePage);
    },
  }
}
</script>

<style lang="scss" scoped>
.card-item{
  background: #06101c;
  z-index: 0;
  overflow: hidden;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(2);
    z-index: 3;
  }
}
.card-img {
  width: 100%;
  position: absolute;
}
</style>
