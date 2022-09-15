<template>
  <v-app style="background: #F0F0F0 !important;">
    <v-main>
      <Nuxt />
    </v-main>
    <Header></Header>
    <Footer></Footer>
  </v-app>
</template>

<script>
export default {
  components: {
    Header: () => import('~/components/common/Header.vue'),
    Footer: () => import('~/components/common/Footer.vue')
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
