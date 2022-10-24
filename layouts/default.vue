<template>
  <v-app style="background: #F0F0F0 !important;">

    <v-main>
      <Nuxt/>
    </v-main>
    <Sidebar
      :value="drawer"
      @close="drawer=false"
    >
    </Sidebar>
    <Header :bg="headerBg" >
      <div class="show-mobile">
        <burger class="menu-btn" :value="drawer" @click.stop="drawer = !drawer"></burger>
      </div>
    </Header>

    <Footer></Footer>
  </v-app>
</template>

<script>
export default {
  components: {
    Header: () => import('~/components/common/Header.vue'),
    Footer: () => import('~/components/common/Footer.vue'),
    Burger: () => import('~/components/burger-menu/burger'),
    Sidebar: () => import('~/components/burger-menu/sidebar')
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
  computed: {
    headerBg() {
      return this.$route.path.match(/careers\/\w+/) ? '#090F1B' : '#00000000'
    }
  }
}
</script>

<style scoped lang="scss">
.show-mobile {
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
  }
}
</style>
