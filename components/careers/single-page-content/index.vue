<template>
<div class="content">
  <div class="title">{{career.title}}</div>
  <div class="locations">
    <div v-if="career.office && career.office.length">
     <span class="link-color">{{career.office.join('. ')}}</span></div>
  </div>
  <div>
    <div class="title">DESCRIPTION</div>
    <div class="content">
      {{career.description}}
    </div>
  </div>
  <div>
    <div class="link-color">REQUIRMENTS</div>
    <div class="important">
      <div>Important</div>
    </div>
    <div class="not-necessary">
      <div>Not necessary</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    career: {}
  }
}
</script>

<style scoped>

</style>
