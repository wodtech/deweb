<template>
  <div class="team">
    <v-row>
      <v-col md="6" cols="12" class="d-flex flex-column align-start justify-center">
        <img src="~/assets/images/careers/quotes.svg">
        <div class="text-h4">Success doesn't come to you…you go to it.</div>
        <div class="caption">By Marva Collins...</div>
      </v-col>
      <v-col md="6" cols="12">
        <img class="w-100" src="~/assets/images/careers/team.png" alt="">
      </v-col>
    </v-row>
    <v-row class="d-flex team-b">
      <v-col md="6" cols="12" class="d-flex flex-column team-about">
       <div class="team-imgs">
         <img  src="~/assets/images/careers/team1.png" alt="">
         <img style="margin-top: 90%"  src="~/assets/images/careers/team3.png" alt="">
         <img  class="team-card" src="~/assets/images/careers/team2.png" alt="">
       </div>

      </v-col>
      <v-col md="6" cols="12" class="d-flex flex-column team-about">
        <div class="text-h3">TEAM</div>
        <div class="mt-10 description" style="max-width: 518px">
          Placerat in egestas erat imperdiet sed. Ut enim blandit volutpat maecenas volutpat blandit. Sem nulla pharetra diam sit amet nisl. Vulputate eu scelerisque felis imperdiet proin. Congue mauris rhoncus aenean vel. Vestibulum morbi blandit cursus risus at ultrices.
          <br/><br/>
          Fusce ut placerat orci nulla pellentesque dignissim enim. Porttitor leo a diam sollicitudin tempor id eu nisl. Elit scelerisque mauris pellentesque pulvinar. Purus semper eget duis at tellus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Feugiat scelerisque varius morbi enim. Sed lectus vestibulum mattis ullamcorper. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim.
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
}
</script>

<style lang="scss" scoped>

.team {
  margin-top: 80px;
  .team-imgs {
    max-width: 500px;
    display: grid;
    grid-template-columns: 55% 1fr;
    grid-template-rows: 40% 1fr;
    align-content: start;
    justify-content: start;
    align-items: start;
    @media screen and (max-width: 960px) {
      grid-template-columns: 55% 1fr;
      grid-template-rows: 40% 1fr;
      img{
        width: 100%;
        &:nth-child(2n) {
         margin-left: 10px;
        }
      }
    }
  }
  .team-b {
    @media screen and (max-width: 960px) {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      .team-about {
        align-items: center;
      }
    }
    .team-about {
      .description {
        font-style: normal;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
}

</style>
