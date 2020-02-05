<template>
  <div id="app">

    <section-hero></section-hero>
    <section-about></section-about>

  </div>
</template>

<script>
import SectionHero from '@/containers/SectionHero.vue';
import SectionAbout from '@/containers/SectionAbout.vue';

export default {
  name:'app',
  components:{
    SectionHero,
    SectionAbout
  }
}
</script>


<style lang="scss">


</style>
