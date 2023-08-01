<template>
  <div class="blog">
    <BlogMain/>

      <Updates :blog-tabs="blogTabs" :blog="blog" />

  </div>
</template>

<script setup>


const { data: blog } = await useAsyncData(
    'blog',
    () => queryContent('/blog').only(['title', 'shot_description', 'image','tab', '_path', 'post_type']).find()
)

const { data: blogTabs } = await useAsyncData(
    'blogTabs',
    () => queryContent('/blogtabs').find()
)

</script>

