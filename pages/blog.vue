<template>
  <div class="blog">
    <BlogMain/>
    <Updates :blog-tabs="blogTabs" :blog="blog" />
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
    const blogTabs = await $content('blogTabs').fetch()
    return {
      blog, blogTabs
    }
  },
}
</script>
