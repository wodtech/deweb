<template>
  <div class="terms">
    <div class="header"></div>
    <div class="terms-content">
      <div class="title text-h4">PRIVACY POLICY</div>
      <div class="text mt-4">
        <ContentRenderer :value="content" />
      </div>
    </div>
    <FollowUs/>
  </div>
</template>

<script setup>
const { data: content } = await useAsyncData(
    'content',
    () => queryContent('/content').where({title: 'privacy' }).findOne()
);
</script>
<style lang="scss">
.terms{
  .header {
    background-color: #090F1B;
    height: 90px;
    width: 100%;
  }
  .terms-content {
    margin: 56px 120px;
    padding: 60px 80px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
  }

}
</style>
