<template>
  <div class="dev-posts --posr">
      <div class="articles-wrapper">
        <DevInfo
          v-for="(article, i) in articles"
          style="z-index: 2"
          :bg="article.bg"
          :key="i"
          :content-reverse="i%2!==0"
          :data="article"
        >
          <img style="position: absolute" :src="article.bgFishes" >
         </DevInfo>
      </div>
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
          img: require("~/assets/images/for-developers/auth.png"),
          bg: 'white',
          bgFishes: require("~/assets/images/for-developers/bg1.png"),
          links: {
            github: 'https://github.com/bytesbay/web3-token',
            medium: 'https://worldofdefish.com/defishboxes/'
          }
        },
        {
          title: 'extend your dapp with backend',
          description: 'Chain Syncer allows you to sychronize your app with any ethereum compatible blockpain.',
          img: require("~/assets/images/for-developers/chain.png"),
          bgFishes: require("~/assets/images/for-developers/bg2.png"),
          bg: '#F0F0F0',
          links: {
            github: 'https://github.com/bytesbay/chain-syncer',
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
.dev-posts {
  width: 100%;
}
</style>
