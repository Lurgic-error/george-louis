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
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }

  }

  .hero-content {
    flex-basis: 60%;
    padding: 2rem 4rem;
    color: white;

    @include respond(phone) {
      flex: 1;
      padding: 0;
      // margin: 2rem;
    }
  }

  .hero-title {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: .75rem;
    text-transform: capitalize;
    color: #6b8e4e;

    @include respond(phone) {
      font-size: 2rem;
      line-height: 1.2;
    }
  }


  .section-title {
    font-size: 2rem;
    font-weight: 600;
    text-transform: capitalize;

    @include respond(phone){
      font-size: 1.2rem;
    }
  }

  .text,
  .section-text {
    text-shadow: 1px 1px 3px rgb(0, 0, 0, 0.952);
    font-size: 1.6rem;
    @include respond(phone) {
      font-size: 1.2rem;
      text-align: left;
      text-justify: auto;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.952);
      line-height: 1.2;
    }
  }
</style>