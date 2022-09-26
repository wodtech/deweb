<template>
  <div class="updates py-16">
    <v-container>
      <v-tabs
        v-model="tab"
      >
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
        {{ item.tab }}
        </v-tab>
      </v-tabs>
      <div class="filter-wrapper pa-4">
        <v-btn  v-for="item in filters" :key="item.name" text>
          {{item.name}}
        </v-btn>
      </div>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="(item) in items"
          :key="item.tab"
        >
        <div class="cards-wrapper">
          <div v-for="(card, index) in item.content" :key="card.id" :class="gridCards(index)" >
            <v-hover v-if="index === 0" v-slot="{ hover }">
              <v-card 
                :elevation="hover ? 5 : 20" 
                style="transition: box-shadow 0.3s ease-in-out;" 
                rounded="xl"
                class="d-flex flex-column"
                height="100%"
                width="100%"
              >
                <v-img height="50%" :src="card.img" class="rounded-xl"></v-img>
                <div class="d-flex flex-column align-start pa-4">
                  <div class="text-h4 ml-4 flex-grow-1">
                    {{card.article}}
                  </div>
                  <div class="body-1 ml-4 flex-grow-1">
                    {{ card.desc }}
                  </div>
                  <v-btn :href="card.link" rounded text class="mt-3 flex-grow-1">
                    read now
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </v-hover>
            <v-hover v-else v-slot="{ hover }" >
              <v-card 
                :elevation="hover ? 5 : 20"
                rounded="xl" 
                style="transition: box-shadow 0.3s ease-in-out;"
                class="d-flex"
                height="100%"
                :class="i ? 'mt-6' : ''"
              >
                <v-img aspect-ratio="1" class="rounded-xl" style="flex: 0 0 50%" :src="card.img"></v-img>
                <div class="d-flex flex-column align-start pa-4">
                  <div class="body-1 ml-4 flex-grow-1">
                    {{card.article}}
                  </div>
                  <div class="body-1 ml-4 flex-grow-1">
                    {{ card.desc }}
                  </div>
                  <v-btn :href="card.link" rounded text class="mt-3">
                    read now
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </v-hover>
          </div>
        </div>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
  <!-- <v-row class="cards-wrapper">
            <v-col v-for="(card, index) in item.content" :key="card.id" offset="0"  cols="6">
              <v-hover v-if="index === 0" v-slot="{ hover }">
                <v-card 
                  :elevation="hover ? 5 : 20" 
                  style="transition: box-shadow 0.3s ease-in-out;" 
                  rounded="xl" 
                  min-height="100%"
                >
                  <v-img :src="card.img" class="rounded-xl"></v-img>
                  <div class="d-flex flex-column align-start pa-4">
                    <div>
                      {{card.title}}
                    </div>
                    <div class="body-1 ml-4 flex-grow-1">
                      {{ card.desc }}
                    </div>
                    <v-btn :href="card.link" rounded text class="mt-3">
                      read now
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
              <v-hover v-else v-slot="{ hover }" >
                <v-card 
                  :elevation="hover ? 5 : 20"
                  rounded="xl" 
                  style="transition: box-shadow 0.3s ease-in-out;"
                  class="d-flex" 
                  :class="i ? 'mt-6' : ''"
                >
                  <v-img width="40%" class="rounded-xl" :src="card.img"></v-img>
                  <div class="d-flex flex-column align-start pa-4">
                    <div>
                      {{card.title}}
                    </div>
                    <div class="body-1 ml-4 flex-grow-1">
                      {{ card.desc }}
                    </div>
                    <v-btn :href="card.link" rounded text class="mt-3">
                      read now
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row> -->
</template>

<script>
export default {
  data() {
    return {
      tab: null,
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
      items: [
        {
          tab: 'world of defish',
          content: [
            {
              id: 1,
              img: "https://picsum.photos/600/400",
              article: 'HOW TO START?',
              desc: 'We created a New world with fishes and something that we and something that we created a New world with fishes and something',
              btnLink: '#'
            },
            {
              id: 2,
              img: "https://picsum.photos/600/400",
              article: 'HOW TO START?',
              desc: 'We created a New world with fishes and something that we and something that we created a New world with fishes and something',
              btnLink: '#'
            },
            {
              id: 3,
              img: "https://picsum.photos/600/400",
              article: 'HOW TO START?',
              desc: 'We created a New world with fishes and something that we and something that we created a New world with fishes and something',
              btnLink: '#'
            },
            {
              id: 4,
              img: "https://picsum.photos/600/400",
              article: 'HOW TO START?',
              desc: 'We created a New world with fishes and something that we and something that we created a New world with fishes and something',
              btnLink: '#'
            },
            {
              id: 5,
              img: "https://picsum.photos/600/400",
              article: 'HOW TO START?',
              desc: 'We created a New world with fishes and something that we and something that we created a New world with fishes and something',
              btnLink: '#'
            },
            {
              id: 6,
              img: "https://picsum.photos/600/400",
              article: 'HOW TO START?',
              desc: 'We created a New world with fishes and something that we and something that we created a New world with fishes and something',
              btnLink: '#'
            }
          ]
        },
        {
          tab: 'tower defish',
          content: [
            {
              id: 1,
              img: "https://picsum.photos/600/400",
              article: 'HOW TO START?',
              desc: 'We created a New world with fishes and something that we and something that we created a New world with fishes and something',
              btnLink: '#'
            }
          ]
        },
        {
          tab: 'company news',
          content: [
            {
              id: 1,
              img: "https://picsum.photos/600/400",
              article: 'HOW TO START?',
              desc: 'We created a New world with fishes and something that we and something that we created a New world with fishes and something',
              btnLink: '#'
            }
          ]
        },
      ]
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
  max-width: 400px;
  @media (min-width: 1264px) {
    max-width: 100%;
  }
  @media (max-width: 960px) {
    max-width: 100%;
  }
}

</style>