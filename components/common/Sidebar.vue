<template>
  <v-navigation-drawer
    v-on="$listeners"
    v-bind="$attrs"
    :stateless="false"
    absolute
    bottom
    temporary
  >
    <v-list
      
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        color="black"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item  >
          <v-btn  to="for-developers" nuxt rounded class="d-md-flex d-none" text>
            for developers
          </v-btn>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    group: null,
  }),
  watch: {
    group () {
      this.$emit('disableDrawer')
    },
  },
}
</script>

<style scoped>

</style>
