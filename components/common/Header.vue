<template>
  <div class="header d-flex">
    <v-container class="py-4">
      <img class="logo" src="~/assets/logo.png" alt=""></img>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.header {
  height: 80px;
  width: 100%;
  background: rgba(26, 38, 57, 0.4);
  backdrop-filter: blur(30px);
  position: fixed;
  top: 0;
  left: 0;


  .logo {
    height: 100%;
    width: auto;
  }
}

</style>