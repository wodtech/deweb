<template>
  <div class="desk-app">
    <!-- <v-img width="400" contain class="meduza" src="@/assets/meduza.png"></v-img> -->
    <v-card class="back two" ref="one" elevation="10" rounded="lg"></v-card>
    <v-card class="back one" ref="two" elevation="10" rounded="lg"></v-card>
    <img class="app" src="~/assets/images/desktop.png"/>
  </div>
</template>

<script>
export default {
  mounted() {
    
  },
  destroyed() {
    
  }
}
</script>

<style lang="scss" scoped>

.desk-app {
  position: absolute;
  top: 50%;
  right: 50%;
  width: 120%;
  transform: translate(50%, -50%);

  // @media (max-width: 1264px) {
  //   width: 100%;
  // }

  @media (max-width: 960px) {
    // transform: translate(40%, -80%);
    // width: 200%;
    width: 80%;
    min-width: 500px;
    transform: translate(50%, -50%) translateX(5%) translateY(-10%);
  }

  .meduza {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 50%);
  }

  .app {
    transform: perspective(2000px) rotateX(25deg) rotateY(30deg) rotateZ(-15deg);
    width: 100%;
  }

  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(#76FFE8, 0.03);
    backdrop-filter: blur(30px);

    &.one {
      transform: perspective(2000px) rotateX(25deg) rotateY(30deg) rotateZ(-15deg) translateZ(-40px);
    }

    &.two {
      transform: perspective(2000px) rotateX(25deg) rotateY(30deg) rotateZ(-15deg) translateZ(-80px);
      background: rgba(#76FFE8, 0.01);
    }
  }
}

</style>