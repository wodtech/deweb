<template>
<div class="content">
  <div class="text-h4 font-weight-bold">{{career.title}}</div>
  <div class="locations mt-2">
    <div v-if="career.office && career.office.length">
     <span class="office-el body-2 pr-3" v-for="(office, i) in career.office" >{{office}}
       <span v-if="i!==career.office.length-1" class="separ"></span>
     </span>
    </div>
  </div>
  <div class="mt-5">
    <div class="content-title font-weight-bold">DESCRIPTION</div>
    <div class="content subtitle-2">
      {{career.description}}
    </div>
  </div>
  <div class="mt-7">
    <div class="link-color content-title font-weight-bold">REQUIRMENTS:</div>
    <div class="important">
      <div class="body-2 font-weight-bold">Important</div>
      <ul>
        <li class="body-2" :key="skill" v-for="skill  in career.required_skills">{{skill}}</li>
      </ul>
    </div>
    <div class="not-necessary">
      <div class="body-2 font-weight-bold">Not necessary</div>
      <ul>
        <li class="body-2" :key="skill" v-for="skill  in career.not_necessary_skills">{{skill}}</li>
      </ul>
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

<style scoped lang="scss">
.office-el {
 .separ{
   position: relative;
   padding-right: 10px;
   &::after {
     content: ' ';
     border-radius: 100%;
     background-color: #E94485;
     display: block;
     height: 6px;
     width: 6px;
     position: absolute;
     z-index: 1;
     right: 0;
     top: 7px;
   }
 }
}
.content-title {
  font-weight: 700;
  font-size: 21px;
}
</style>
