<template>
  <div class="updates py-16">
    <v-container>
      <v-tabs
        v-model="tab"
        transition="fade-transition"
        hide-slider
        background-color="transparent"
      >
        <v-tab
          v-for="item in blogTabs"
          :key="item.title"
          active-class="tab-active"
        >
        <v-btn x-large class="font-weight-light rounded-pill tab-btn">
          {{ item.title }}
        </v-btn>
        </v-tab>
      </v-tabs>
      <div class="filter-wrapper pa-4">
        <v-btn  v-for="item in blogTabs.post_types" :key="item.name" text>
          {{ item.name }}
        </v-btn>
      </div>
      <v-tabs-items v-model="tab" style="background-color: #F0F0F0 !important;">
        <v-tab-item
          v-for="(item) in blog"
          :key="item.tab"
          transition="fade-transition"
          reverse-transition="fade-transition"
        >
        <div class="cards-wrapper pa-4">
          <div v-for="(card, index) in blogsByTab" :key="card.slug" :class="gridCards(index)" >
            <v-hover v-if="index === 0" v-slot="{ hover }">
              <v-card
                :elevation="hover ? 5 : 10"
                style="transition: box-shadow 0.3s ease-in-out;"
                rounded="xl"
                class="d-flex flex-column"
                height="100%"
                width="100%"
              >
                <v-img max-height="55%" :src="card.image" class="rounded-xl"></v-img>
                <div class="d-flex flex-column flex-grow-1 align-start pa-4">
                  <div class="text-h4 ml-4 flex-grow-1">
                    {{ card.title }}
                  </div>
                  <div class="body-1 ml-4 flex-grow-1">
                    {{ card.shot_description }}
                  </div>
                  <v-btn  :to="{ name: 'blog-slug', params: {slug: card.slug} }" rounded text class="mt-3 flex-grow-1" nuxt>
                    read now
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </v-hover>
            <SmallCard v-else :title="card.title" :short-description="card.shot_description" :slug="card.slug" :image="card.image" />
          </div>
        </div>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    SmallCard: () => import('./SmallCard.vue'),
  },
  props: {
    blog: {},
    blogTabs: {}
  },
  data() {
    return {
      tab: 0,
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
    blogsByTab() {
      return this.blog.filter(el => el.tab === this.chosenTab)
    },
    chosenTab() {
      return this.blogTabs[this.tab].title
    }
  },
  methods: {
    gridCards(index) {
      if (index === 0) {
        return 'big-card'
      } else {
        return 'small-card'
      }
    }

  },
}
</script>

<style lang="scss" scoped>
.cards-wrapper {
  background-color: #F0F0F0 !important;
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 50px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
}
.big-card {
  // max-width: 575px;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}
.small-card {
  @media (min-width: 1264px) {
    max-width: 100%;
  }
  @media (max-width: 960px) {
    max-width: 100%;
  }
}
.tab-btn {
  background-color: rgba(220, 220, 220, 1) !important;
  color: rgba(0, 0, 0, 0.2);
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
