<template>
  <div class="terms">
    <div class="header"></div>
    <div class="terms-content">
      <div class="title text-h4">TERMS OF USE</div>
      <div class="text mt-4">
        {{content}}
      </div>
    </div>
    <FollowUs/>
  </div>
</template>

<script>
import terms from 'raw-loader!./../static/data/terms.txt'
export default {
  components: {
    FollowUs: () => import('~/components/follow-us'),
  },
  data () {
    return {
      content: terms
    }
  },
  created() {
    console.log(terms)
  }
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #090F1B;
  height: 90px;
  width: 100%;
}
.terms-content {
  margin: 56px 120px;
  padding: 60px 80px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
}
</style>
