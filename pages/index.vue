<template>
  <div class="index-page">
    <MainFrame/>
    <Games/>
    <LaunchWindow/>
    <Blog/>
    <Subs/>
  </div>
</template>

<script>
export default {
  components: {
    MainFrame: () => import('~/components/main-frame'),
    LaunchWindow: () => import('~/components/launch-window'),
    Blog: () => import('~/components/blog'),
    Games: () => import('~/components/games'),
    Subs: () => import('~/components/subs'),
  },
}
</script>
