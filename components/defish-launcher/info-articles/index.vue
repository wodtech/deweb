<template>
  <div class="games --posr">
    <v-container class="--cnt">
      <v-row no-gutters>
        <v-col  md="6" cols="12" class="d-flex align-center justify-center">
          <div style="max-width: 440px" class="h-100 d-flex flex-column justify-center">
            <div class="text-h3">
              The best gaming experience
            </div>
            <div class="description body-2 mt-3">
              Through truly special cross-gaming platforms players will open the door to the world of unlimited GameFi capabilities.
              <br/><br/>
              By taking all the best of classic gaming, we integrate it into Web3 to create a new phenomenon of Metagame.
            </div>
          </div>
        </v-col>
        <v-col  md="6" cols="12" style="min-height: 500px" class="d-flex align-center justify-center mt-5 mt-md-0">
          <iframe
            class="video-frame"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.games {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: white;
  .video-frame{
    width: 80%;
    height: 80%;
    min-height: 400px;
    @media screen and (max-width: 1920px) {
      width: 100%;
    }
    @media screen and (max-width: 960px) {
      min-height: 300px;
    }
    @media screen and (max-width: 600px) {
      height: 60%;
      min-height: 150px;
    }
  }
}
</style>
