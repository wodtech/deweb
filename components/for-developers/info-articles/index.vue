<template>
  <div class="dev-posts --posr">
      <div class="articles-wrapper">
        <ForDevelopersInfoArticlesDevInfo
          v-for="(article, i) in articles"
          style="z-index: 2"
          :bg="article.bg"
          :key="i"
          :content-reverse="i%2!==0"
          :data="article"
        >
          <img style="position: absolute" :src="article.bgFishes" >
         </ForDevelopersInfoArticlesDevInfo>
      </div>
  </div>
</template>

<script setup>
import imgAuth from "~/assets/images/for-developers/auth.png"
import bgFishesFirst from "~/assets/images/for-developers/bg1.png"

import imgChain from "~/assets/images/for-developers/chain.png"
import bgFishesSecond from "~/assets/images/for-developers/bg2.png"
 const articles = [
   {
     title: 'authenticate in web3 easly',
     description: 'Web3 Token is an open-source package to authenticate users in a hybrid Apps using signed messages.',
     img: imgAuth,
     bg: 'white',
     bgFishes: bgFishesFirst,
     links: {
       github: 'https://github.com/bytesbay/web3-token',
       medium: ' https://medium.com/@bytesbay/you-dont-need-jwt-anymore-974aa6196976'
     }
   },
   {
     title: 'extend your dapp with backend',
     description: 'Chain Syncer allows you to sychronize your app with any ethereum compatible blockchain.',
     img: imgChain,
     bgFishes: bgFishesSecond,
     bg: '#F0F0F0',
     links: {
       github: 'https://github.com/bytesbay/chain-syncer',
     }
   },
 ]
</script>

<style lang="scss" scoped>
.dev-posts {
  width: 100%;
}
</style>
