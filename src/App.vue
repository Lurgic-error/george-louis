<template>
  <div id="app">

    <section-hero></section-hero>
    <section-about></section-about>
    <section-services></section-services>
  </div>
</template>

<script>
import SectionHero from '@/containers/SectionHero.vue';
import SectionAbout from '@/containers/SectionAbout.vue';
import SectionServices from '@/containers/SectionServices.vue';

export default {
  name:'app',
  components:{
    SectionHero,
    SectionAbout,
    SectionServices
  }
}
</script>


<style lang="scss">


</style>
