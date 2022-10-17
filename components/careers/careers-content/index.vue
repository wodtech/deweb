<template>
  <div class="careers-content">
    <div >
    <div class="title text-h2 mb-8">JOIN US</div>
    <div class="career-group-cards">
      <v-row>
        <v-col>
          <div
            class="group"
            :key="group.slug"
            v-for="(group, i) in (careersGroups)">
            <div v-if="i%2===0">
              <div class="group-title text-h4">
                <div v-html="getColoredTitle(group.title)"></div>
              </div>
              <CareerInfoCard
                :key="card.slug"
                :card="card"
                class="career-card"
                v-for="card in filterByGroup(group.title)" />
            </div>

          </div>
        </v-col>
        <v-col>
          <div
            class="group"
            :key="group.slug"
            v-for="(group, i) in careersGroups">
            <div v-if="i%2!==0">
              <div class="group-title text-h4">
                <div v-html="getColoredTitle(group.title)"></div>
              </div>
              <CareerInfoCard
                :key="card.slug"
                :card="card"
                class="career-card"
                v-for="card in filterByGroup(group.title)" />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
<!--    <div class="career-card-content mt-16">-->
<!--      <CareerInfoContent :content="chosenCard" />-->
<!--    </div>-->
    </div>
   </div>
</template>

<script>
import CareerInfoCard from "~/components/careers/careers-content/CareerInfoCard";
export default {
  components: {
    CareerInfoCard,
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

.careers-content {
  width: 100%;
  background-color: #F0F0F0;
  position: relative;
  .group-title {
    margin-bottom: 32px;
  }
  .career-card {
    margin: 20px 0;
  }
}

</style>
