<template>
  <div class="blog">
    <BlogMain/>
    <Updates/>
  </div>
</template>

<script>
export default {
  
}
</script>

<script>
export default {
  components: {
    BlogMain: () => import('~/components/blog-main'),
    Updates: () => import('~/components/updates'),
  },
  async asyncData({ $content }) {
    const blog = await $content('blog').fetch()

    return {
      blog,
    }
  },
}
</script>
