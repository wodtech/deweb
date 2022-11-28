<template>
<div class="d-flex flex-column align-start">
  <div class="text-h3">{{content.title}}</div>
  <div class="text-h5">{{content.project_name}}</div>
  <div v-if="content.office && content.office.length ">
    Office: <span class="link-color">{{content.office.join(', ')}}</span>
  </div>
  <div v-if="content.remote && content.remote.length">
    Remote: <span class="link-color">{{content.remote.join(', ')}}</span>
  </div>
  <div>{{content.description}}</div>
</div>
</template>

<script>
export default {
  props: {
    content: {}
  }
}
</script>

<style scoped>

</style>
