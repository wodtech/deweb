<template>
  <div class="team">
    <v-row>
      <v-col md="6" cols="12" class="d-flex flex-column align-start justify-center">
        <img src="~/assets/images/careers/quotes.svg">
        <div class="text-h4">Success doesn't come <br/> to you…you go to it.</div>
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
        <div class="text-h2">TEAM</div>
        <div class="mt-10 description" style="max-width: 518px">
          Who can create a truly quality product and move technological progress forward? We are sure that these are the people who are in love with the work they do. This is the principle we follow within the Defish team. Each of us has gone from a self-taught nerd to a professional with a capital letter. As true fans of games, we have a deep understanding of the needs of players and their desires. So, we joined together to give the best gaming experience using blockchain technologies.
          <br/><br/>
          There is no other way but to win. For this we constantly strengthen and increase our team with new talents.
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
