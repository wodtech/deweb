<template>
  <div class="single-blog">
    <SingleBlogMain :blog="blog" />
    <v-container class="d-flex flex-column py-16">
      <nuxt-content :document="blog"/>
      <template v-if="nextBlogs.length">
        <div class="d-flex align-center py-6">
          <div class="text-h3">
            related posts
          </div>
          <v-spacer></v-spacer>
          <v-btn to="/blog" nuxt color="primary" rounded text>
            read all
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <v-row class="d-flex">
          <v-col v-for="card in nextBlogs" :key="card.slug"  md="6" cols="12">
            <SmallCard
              :title="card.title"
              :short-description="card.shot_description"
              :slug="card.slug"
              :image="card.image" />
          </v-col>
        </v-row>
      </template>
    </v-container>
  </div>

</template>

<script>
export default {
  components: {
    SingleBlogMain: () => import('~/components/single-blog-main'),
    SmallCard: () => import('~/components/updates/SmallCard.vue')
  },
  async asyncData({ $content, params }) {
      const blog = await $content('blog', params.slug).fetch()
      const nextBlogs = await $content('blog').where({slug: { $ne: params.slug}}).limit(2).fetch()
      return { blog, nextBlogs }
  },
  data() {
    return {

    }
  },
  methods: {
    parseDate(date) {
      const newDate = new Date(date)
      const day = newDate.getDay()
      const month = newDate.getMonth() + 1; // getMonth() returns month from 0 to 11
      const year = newDate.getFullYear();
      return `${day}.${month}.${year}`
    }
  }
}
</script>

<style lang="scss" >
  .nuxt-content {
    h1 {
      font-family: 'Bebas';
      text-transform: uppercase;
      color: #E94485;
      font-style: normal;
      font-size: 48px;
      line-height: 50px !important;
      margin-bottom: 20px;
    }
    p {
      font-family: 'Relaway';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }
    img {
      width: 540px;
      height: 340px;
      object-fit: cover;
      border-radius: 30px;
      @media screen and (max-width: 600px){
        width: 100%;
        height: unset;
      }
    }
  }

</style>
