<template>
  <div id="app">

    <section-hero></section-hero>
    <section-about></section-about>
    <section-services></section-services>
    <section-skills></section-skills>
  <section-projects></section-projects>
  <section-contact></section-contact>
  <app-footer></app-footer>
  </div>
</template>

<script>
  import SectionHero from '@/containers/SectionHero.vue';
  import SectionAbout from '@/containers/SectionAbout.vue';
  import SectionServices from '@/containers/SectionServices.vue';
  import SectionSkills from '@/containers/SectionSkills.vue';
  import SectionProjects from '@/containers/SectionProjects.vue';
  import SectionContact from '@/containers/SectionContact.vue';
  import AppFooter from '@/components/layouts/AppFooter.vue';
  export default {
    name: 'app',
    components: {
      SectionHero,
      SectionAbout,
      SectionServices,
      SectionSkills,
      SectionProjects,
      SectionContact,
      AppFooter
    }
  }
</script>


<style lang="scss">


</style>
