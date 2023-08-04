<template>
  <div class="single-blog">
    <SingleBlogMain :blog="blog" class="text-white"/>
    <v-container class="d-flex flex-column py-16">
      <ContentRenderer class="single-blog--content" :value="blog" />
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
          <v-col v-for="card in nextBlogs" :key="card._path"  md="6" cols="12">
            <SmallCard
              :title="card.title"
              :short-description="card.shot_description"
              :slug="card._path"
              :image="card.image" />
          </v-col>
        </v-row>
      </template>
    </v-container>
  </div>

</template>

<script setup>
import SmallCard from '~/components/updates/SmallCard.vue'


const router = useRouter()
const slug = router.currentRoute.value.params.slug
const path = router.currentRoute.value.fullPath

console.log(router.currentRoute.value.params)
//
console.log(path)
const { data: blog } = await useAsyncData(
    'blog',
    () => queryContent('/blog').where({'_path': slug }).findOne()
);
console.log(blog)
const { data: nextBlogs } = await useAsyncData(
    'nextBlogs',
    () => queryContent('/blog').where({'_path': { $ne: slug}}).limit(2).find()
);

console.log(nextBlogs)

const parseDate = (date) => {
  const newDate = new Date(date)
  const day = newDate.getDay()
  const month = newDate.getMonth() + 1; // getMonth() returns month from 0 to 11
  const year = newDate.getFullYear();
  return `${day}.${month}.${year}`
}

// async asyncData({ $content, params }) {
//   const blog = await $content('blog', params.slug).fetch()
//   const nextBlogs = await $content('blog').where({slug: { $ne: params.slug}}).limit(2).fetch()
//   return { blog, nextBlogs }
// },


</script>

<style lang="scss" >
  .single-blog {
    min-height:650px;
    &--content {
      h1 {
        font-family: 'Bebas';
        text-transform: uppercase;
        color: #E94485;
        font-style: normal;
        font-size: 48px;
        line-height: 50px !important;
        margin-bottom: 20px;
      }
      h2 > a {
        pointer-events: none;
        color: #050D0D;
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
  }

</style>
