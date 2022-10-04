<template>
  <div class="games">
    <v-container class="--cnt">
      <div class="articles-wrapper pb-16">
        <DevInfo
          v-for="(article, i) in articles"
          :key="i"
          :content-reverse="i%2!==0"
          class="mt-9"
          :data="article"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      articles: [
        {
          title: 'authenticate in web3 easly',
          description: 'Web3 Token is an open-source package to authenticate users in a hybrid Apps using signed messages.',
          img: require("~/assets/images/test-img.png"),
          links: {
            linked: '#',
            medium: '#'
          }
        },
        {
          title: 'extend your dapp with backend',
          description: 'Chain Syncer allows you to sychronize your app with any ethereum compatible blockpain.',
          img: require("~/assets/images/test-img.png"),
          links: {
            linked: '#',
            medium: '#'
          }
        },
      ]
    }
  },
  components: {
    DevInfo: () => import('./DevInfo'),
  },
}
</script>

<style>

</style>
