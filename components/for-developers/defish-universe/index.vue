<template>
  <div class="defish-universe d-flex align-center --posr">
    <img class="img-l" src="~/assets/images/for-developers/fish-left.png" alt="">
    <img class="img-r" src="~/assets/images/for-developers/fish-right.png" alt="">
    <v-container class="--cnt d-flex flex-column align-center">
      <div class="text-h3 white--text text-center">{{content.title}}</div>
      <div class="body-1 description white--text text-center">{{content.description}}</div>
      <img class="mt-10 defish-img" src="~/assets/images/for-developers/defish-universe.png" >
    </v-container>
  </div>
</template>

<script>
export default {
    data(){
      return {
        content: {
          title: 'contribute to defish universe',
          description: 'With unified CraphQL API we understand that to make the lost legendary games\n' +
            'we need to attract as more developers as can be.',
          img: null
        }
      }
    },
}
</script>

<style lang="scss" scoped>
.defish-universe{
  height: 100vh;
  background: rgb(25,37,57);
  background: radial-gradient(circle, rgba(25,37,57,1) 0%, rgba(37,65,79,1) 52%);
  .img-l{
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .img-r{
    position: absolute;
    right: 0;
    top: 0;
  }
  .description {
    opacity: 0.7;
  }
  .defish-img {
    width: 70%;
    @media screen and (max-width: 600px){
      width: 100%;
    }
  }
}
</style>
