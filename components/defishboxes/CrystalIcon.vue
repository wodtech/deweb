<template>
  <div class="rarity-icon d-flex justify-start">
    <div class="d-flex justify-start align-center">
      <v-responsive
        v-if="rarity"
        :width="size + 'em'"
        :aspect-ratio="1.5"
        max-width="40px"
        style="transform: translateY(-10%); overflow: visible"
      >
        <v-img
          :src="rarities[rarity].image"
          width="130%"
          :aspect-ratio="0.5"
          contain
          class="image"
        ></v-img>
      </v-responsive>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rarities: {
        Common: {
          name: 'Common',
          image: require('~/assets/images/icons/icon-1.png'),
          text_color: 'secondary--text',
        },
        Uncommon: {
          name: 'Uncommon',
          image: require('~/assets/images/icons/icon-2.png'),
          text_color: 'white--text',
        },
        Rare: {
          name: 'Rare',
          image: require('~/assets/images/icons/icon-3.png'),
          text_color: 'blue--text',
        },
        Epic: {
          name: 'Epic',
          image: require('~/assets/images/icons/icon-4.png'),
          text_color: 'purple--text',
        },
        Legendary: {
          name: 'Legendary',
          image: require('~/assets/images/icons/icon-5.png'),
          text_color: 'orange--text',
        },
        Artifact: {
          name: 'Artifact',
          image: require('~/assets/images/icons/icon-6.png'),
          text_color: 'red--text',
        },
      },
    }
  },
  computed: {},
  mounted() {},
  props: {
    rarity: {},
    size: {
      default: 2,
    },
    showText: {
      default: false,
      type: Boolean,
    },
    textClass: {
      default: 'body-2',
    },
    height: {
      default: 40,
    },
  },
}
</script>

<style scoped lang="scss">
.rarity-icon {
  .image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: unset;
  }
}
</style>
