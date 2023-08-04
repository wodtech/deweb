<template>
  <v-app style="background: #F0F0F0 !important;">
    <v-main>
      <slot/>
    </v-main>
    <BurgerMenuSidebar
      :value="drawer"
      @close="test"
    >
    </BurgerMenuSidebar>
    <CommonHeader :bg="headerBg" >
      <div class="show-mobile">
        <BurgerMenuBurger class="menu-btn" :value="drawer" @click.stop="drawer = !drawer"></BurgerMenuBurger>
      </div>
    </CommonHeader>

    <CommonFooter></CommonFooter>
  </v-app>
</template>

<script>

export default {

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
  methods: {
    test() {
      this.drawer=false
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
