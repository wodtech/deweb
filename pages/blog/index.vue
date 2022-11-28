<template>
  <div class="blog">
    <BlogMain/>
    <Updates :blog-tabs="blogTabs" :blog="blog" />
  </div>
</template>

<script>
export default {
  components: {
    BlogMain: () => import('~/components/blog-main'),
    Updates: () => import('~/components/updates'),
  },
  async asyncData({ $content }) {
    const blog = await $content('blog').only(['title', 'shot_description', 'image', 'tab', 'slug', 'post_type']).fetch()
    const blogTabs = await $content('blogTabs').fetch()


    return {
      blog, blogTabs
    }
  },

  head() {
    return {
      title: 'Blog',
    }
  },
}
</script>

