<template>
  <MainFrame></MainFrame>
</template>

<script>
export default {
  components: {
    MainFrame: () => import('~/components/index/MainFrame.vue')
  },
}
</script>
