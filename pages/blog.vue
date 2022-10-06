<template>
  <div class="blog">
    <BlogMain/>
    <Updates/>
  </div>
</template>

<script>
export default {
  components: {
    BlogMain: () => import('~/components/blog-main'),
    Updates: () => import('~/components/updates'),
  },
  async asyncData({ $content }) {
    const blog = await $content('blog').only(['title', 'shot_description', 'image', 'tab', 'post_type']).fetch()
    return {
      blog,
    }
  },
}
</script>
