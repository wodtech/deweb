<template>
  <div class="index-page">
    <MainFrame/>
    <ScreenshotsVideos/>
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
    ScreenshotsVideos: () => import ('~/components/screenshots-videos'),
    LaunchWindow: () => import('~/components/launch-window'),
    Blog: () => import('~/components/blog'),
    Games: () => import('~/components/games'),
    Subs: () => import('~/components/subs'),
  },
}
</script>
