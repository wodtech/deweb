<template>
  <div class="main-frame">
    <v-container class="--cnt">
    <div class="title text-h3">JOIN US</div>
    <div class="career-group-cards">
      <v-row>
        <v-col>
          <div
            class="group"
            :key="group.slug"
            v-for="(group, i) in (careersGroups)">
            <div v-if="i%2!==0">
              <div class="group-title text-h4">
                <div v-html="getColoredTitle(group.title)"></div>
              </div>
              <CareerInfoCard
                @click="chosenCard=card"
                :key="card.slug"
                :card="card"
                class="my-2"
                v-for="card in filterByGroup(group.title)" />
            </div>

          </div>
        </v-col>
        <v-col>
          <div
            class="group"
            :key="group.slug"
            v-for="(group, i) in careersGroups">
            <div v-if="i%2===0">
              <div class="group-title text-h4">
                <div v-html="getColoredTitle(group.title)"></div>
              </div>
              <CareerInfoCard
                @click="chosenCard=card"
                :key="card.slug"
                :card="card"
                class="my-2"
                v-for="card in filterByGroup(group.title)" />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="career-card-content mt-16">
      <CareerInfoContent :content="chosenCard" />
    </div>
    </v-container>
   </div>
</template>

<script>
import CareerInfoCard from "~/components/careers/careers-content/CareerInfoCard";
import CareerInfoContent from "~/components/careers/careers-content/CareerInfoContent";
export default {
  components: {
    CareerInfoCard,
    CareerInfoContent
  },
  props: {
    careers: {},
    careersGroups: {}
  },
  data() {
    return {
      chosenCard: this.careers[0]
    }
  },
  methods: {
    filterByGroup(group) {
      return this.careers.filter(career => career.group === group)
    },
    getColoredTitle(title) {
      const str = title.split('&')
      let htmlData ='<span>' + `${str[0]}` + '</span>'
      if (str.length>1) {
        htmlData += '<span class="link-color">' + `& ${str[1]}` + '</span>'
      }
      return htmlData
    }
  }
}
</script>

<style lang="scss" scoped>

.main-frame {
  min-height: 100vh;
  width: 100%;
  background-color: #F0F0F0;
  position: relative;
}

</style>
