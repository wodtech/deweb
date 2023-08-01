<template>
  <div class="updates py-16">
    <v-container>
      <div class="d-flex align-center justify-around">
        <v-btn
            x-large
            v-for="(item, i) in blogTabsFiltered"
            @click="tab=i"
            :class="`font-weight-light rounded-pill tab-btn mx-2 ${i === tab ? 'picked' : ''}`"
        >
          {{ item.title }}
        </v-btn>
      </div>
      <div class="filter-wrapper pa-4">
        <v-btn
          :class="['type-filter mx-2', filterType === item ? 'chosen' : '']"
          v-for="item in chosenTab.post_types"
          :key="item"
          text
          @click="setFilter(item)"
        >
          {{ item }}
        </v-btn>
      </div>
      <v-window v-model="tab" style="background-color: #F0F0F0 !important;">
        <v-window-item
          v-for="(item, i) in blogTabsFiltered"
          :key="item._path"
          transition="fade-transition"
          reverse-transition="fade-transition"
          :value="i"
        >
          <div v-if="blogsByTab.length"  style="min-height: 50vh" class="cards-wrapper pa-4">
            <div v-for="(card, index) in blogsByTab" :key="card._path" :class="gridCards(index)" >
              <v-hover v-if="index === 0" v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 5 : 10"
                  style="transition: box-shadow 0.3s ease-in-out;"
                  rounded="xl"
                  class="d-flex flex-column"
                  height="100%"
                  width="100%"
                >
                  <v-img :src="card.image" cover class="rounded-xl main-img"></v-img>
                  <div class="d-flex flex-column flex-grow-1 align-start justify-space-between pa-4">
                    <div>
                      <div class="text-h4 ml-4">
                        {{ card.title }}
                      </div>
                      <div style="max-height: 130px;overflow: auto" class="body-1 ml-4">
                        {{ card.shot_description }}
                      </div>
                    </div>
                    <v-btn  :to="{ name: 'blog-slug', params: {slug: card._path} }" rounded text class="mt-3 read-btn" nuxt>
                      read now
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
              <UpdatesSmallCard v-else :title="card.title" :short-description="card.shot_description" :slug="card._path" :image="card.image" />
            </div>
          </div>
          <div style="height: 50vh" v-else>
            <CommonEmptyData class="pt-5" />
          </div>
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>

<script>
export default {

  props: {
    blog: {},
    blogTabs: {}
  },
  data() {
    return {
      tab: 0,
      filterType: null,
      filters: [
        {
          name: 'updates'
        },
        {
          name: 'events'
        },
        {
          name: 'tutorials'
        },
      ],
    }
  },
  computed: {
    blogTabsFiltered () {
      //make this computed cause array mixed values after every update
      const wod = this.blogTabs.find(item => item.title === 'world of defish')
      const td = this.blogTabs.find(item => item.title === 'tower defish')
      const news = this.blogTabs.find(item => item.title === 'company news')
      return [wod, td, news]
    },
    blogsByTab() {
      const blogs = this.blog.filter(el => el.tab === this.chosenTab.title)
      return this.filterType ? blogs.filter(el => el.post_type === this.filterType) : blogs
    },
    chosenTab() {
      return this.blogTabsFiltered[this.tab]
    }
  },
  methods: {
    gridCards(index) {
      if (index === 0) {
        return 'big-card'
      } else {
        return 'small-card'
      }
    },
    setFilter (item) {
      if (this.filterType === item) {
        this.filterType = null
      } else {
        this.filterType = item
      }

    }
  },
}
</script>

<style lang="scss" scoped>
//.container-blog {
//  margin: 0 auto;
//  max-width: 73%!important;
//  @media screen and (max-width:1800px) {
//    max-width: 95% !important;
//  }
//}
.v-tabs-el {
  &::v-deep {
    .v-tabs-bar__content {
      flex-wrap: wrap;
      width: 100%;
    }
    div.v-tabs-bar {
      height: auto;
    }
  }
}


.cards-wrapper {
  background-color: #F0F0F0 !important;
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 50px;
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    grid-template-columns: 1fr;
  }
}
.v-tab{
  &:before{
    display: none!important;
  }
}
.read-btn {
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
    background-color: rgba(233, 68, 133, 1) !important;
    &:disabled {
      color: white !important;
    }
  }
}
.type-filter {
  background: transparent;
  height: 36px!important;
  &.chosen {
    color: #E94485;
  }
}
.big-card {
  // max-width: 575px;
  max-height: 575px;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  .main-img{
    height: 50%;
    &.v-image {
    &::v-deep {
      .v-responsive__content {
        position: absolute!important;
      }
    }
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    .main-img{
      height: 280px;
    }
    grid-row: 1;
  }
}
.small-card {
  max-height: 270px;
  @media (min-width: 1264px) {
    max-width: 100%;
  }
  @media (max-width: 960px) {
    width: 100%;
    max-width: 100%;
    max-height: unset;
    .v-image {
      width: 100%;
      height: 400px;
      &::v-deep {
        .v-responsive__content {
          position: absolute!important;
        }
      }
    }

  }

  &.v-image {
    &::v-deep {
      .v-responsive__content {
        position: absolute!important;
      }
    }
  }
}
.tab-btn {

  margin: 5px 0;
  &.picked {
    background-color: rgba(233, 68, 133, 1);
    color: white;
  }
}
:v-deep(.v-tab) {
  &:hover::before {
    opacity: 0 !important;
  }
}
.tab-active {
  &::before {
    opacity: 0 !important;
  }
  .v-btn {
    color: white !important;
    background-color: rgba(233, 68, 133, 1) !important;
  }
}
</style>
