<template>
  <div class="subs">
    <v-container class="py-16">
      <v-card 
        rounded="xl" 
        dark 
        color="#14172D" 
        elevation="20" 
        class="d-flex flex-column align-center pa-10"
      >
        <div class="text-h4 mb-4">
          subscribe for updates
        </div>
        <div class="body-2 mb-6">
          Enter your Email to start watching
        </div>
        <div class="inp --posr">
          <v-text-field 
            style="width: 300px;"
            rounded
            outlined 
            color="white" 
            label="Enter your email"
            hide-details=""
          ></v-text-field>

          <v-btn color="primary" class="btn" absolute fab>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.inp {
  .btn {
    right: -1px;
    top: -1px;
    height: calc(100% + 2px);
  }

  .v-text-field {
    background: rgba(#fff, 0.1);

    :deep() {
      label {
        font-family: 'Relaway';
      }
    }
  }
}

</style>