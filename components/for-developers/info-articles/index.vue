<template>
  <div class="games --posr">
<!--    <div class="bg-container">-->
<!--      <img class="bg" src="~/assets/images/careers/fishes-bg.png" alt="">-->
<!--    </div>-->
    <v-container class="--cnt">

      <div class="articles-wrapper pb-16">
        <DevInfo
          v-for="(article, i) in articles"
          style="z-index: 2"
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

<style lang="scss" scoped>
.games {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("~/assets/images/for-developers/fishes-bg.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
