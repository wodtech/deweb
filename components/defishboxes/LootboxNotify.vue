<template>
  <v-dialog
    dark
    class="d-flex pa-4 align-center justify-center showed"
    @input="close"
    :value="showed"
    max-width="360px"
  >
    <v-card flat class="vendor-popup-inner rounded-xl" tile>
      <div
        class="heading-line d-flex align-center justify-space-between px-6 pt-6"
      >
        <div class="notify white--text font-weight-medium">
          Congratulations!
        </div>
        <v-btn @click="close" class="close-btn" icon outlined color="#67E8D3">
          <v-icon color="#67E8D3">mdi-window-close</v-icon>
        </v-btn>
      </div>
      <div class="d-flex flex-column align-center">
        <div class="body-2 text-center pa-6 d-flex flex-column">
          <span class="mb-3">You successfully bought box!</span>
          <span>Soon you will open it on our marketplace</span>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import LootBox from '@/components/defishboxes/LootBoxIcon.vue'

export default {
  data() {
    return {}
  },
  components: {
    LootBox,
  },
  mounted() {},
  methods: {
    close() {
      this.$emit('close')
    },
  },
  computed: {},
  props: {
    showed: {},
  },
}
</script>

<style scoped lang="scss">
.vendor-popup-inner::v-deep {
  background: linear-gradient(
    39.79deg,
    rgba(41, 77, 87, 0.7) 4.57%,
    rgba(42, 81, 90, 0.322) 89.2%
  );
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.13);
  backdrop-filter: blur(54px);
  .notify {
    font-size: 34px;
    font-family: Druk;
    font-style: normal;
    font-weight: bold;
    color: #ffffff;
    letter-spacing: 0.1px;
  }
}
</style>
