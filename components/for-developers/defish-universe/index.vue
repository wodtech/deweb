<template>
  <div class="defish-universe">
    <v-container class="--cnt">
      <div class="text-h3 white--text text-center">{{content.title}}</div>
      <div class="body-1 description white--text text-center">{{content.description}}</div>
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
  background-color: #192539;
  .description {
    opacity: 0.7;
  }
}
</style>
