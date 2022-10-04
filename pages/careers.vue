<template>
  <div class="index-page">
    <MainFrame/>
  </div>
</template>

<script>
export default {
  components: {
    MainFrame: () => import("~/components/careers/main-frame")
  },
}
</script>
