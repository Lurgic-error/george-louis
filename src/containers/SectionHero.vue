<template>
  <div class="section-hero">
    <div class="hero-content">
      <h4 class="hero-title">Making Software since 199* and still going </h4>
      <p class="text">Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Culpa ea corporis non quasi architecto necessitatibus tempora incidunt dignissimos sapiente
        at,
        provident dicta fugiat ! Dolorem eligendi libero,
        officiis dolorum officia nesciunt. </p><button class="app-btn btn-cta">Hire Me</button>
    </div>
  </div>
</template>
<script>
  // @ is an alias to /src

  export default {

    name: 'section-hero',
    components: {}
  }
</script>
<style lang="scss" scoped>
  @import '../static/styles/_mixins.scss';

  .section-hero {
    height: 100%;
    background-image: url('../assets/img/hero-img-1.jpg');
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.952);

    @include respond(phone) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }

  .hero-content {
    flex-basis: 60%;
    padding: 2rem 4rem;
    color: white;

    @include respond(phone) {
      flex: 1;
    }
  }

  .hero-title {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: .75rem;
    text-transform: capitalize;
    color: #6b8e4e;

    @include respond(phone) {
      font-size: 2.4rem;
    }
  }


  .section-title {
    font-size: 2rem;
    font-weight: 600;
    text-transform: capitalize
  }

  .text,
  .section-text {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.952);
    @include respond(phone) {
      text-align: left;
      text-justify: auto;
    }
  }
</style>