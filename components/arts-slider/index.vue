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
          v-for="(section, i) in sections"
          :key="i + '-' + sections.length"
          v-if="page === (i + 1)"
        >
          <v-row>
            <v-col
              v-for="n in section"
              :key="n.slug"
              cols="12"
              sm="6"
              md="4"
              xl="2"
            >
              <v-card rounded="xl">
                <v-img :src="n.image" :aspect-ratio="1.5"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <div class="d-flex align-self-center pt-10">
          <v-pagination
            v-model="page"
            :length="pages"
            circle
            color="primary"
          ></v-pagination>
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
    page: 1
  }),

  computed: {

    sections() {

      const new_array = [];

      for (let i = 0; i < this.arts.length; i += this.prePage) {
        new_array.push(this.arts.slice(i, i + this.prePage));
      }

      return new_array;
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
      return this.sections.length;
    },
  }
}
</script>

<style>

</style>