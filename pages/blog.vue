<template>
  <BlogMain/>
</template>

<script>
export default {
  
}
</script>

<script>
export default {
  components: {
    BlogMain: () => import('~/components/blog-main'),
  },
  async asyncData({ $content }) {
    const blog = await $content('blog').fetch()

    return {
      blog,
    }
  },
}
</script>
