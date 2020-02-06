<template>
  <div class="section-services">
      <h4 class="section-title text-center">What I Can Do</h4>
      <div class="section-content">
          <div class="row">
              <div class="col-md-4">
                  <div class="card">
                    <div class="row">
                        <div class="col-2 col-2">
                            <b-icon-tools class="app-icon-lg"></b-icon-tools>
                        </div>
                        <div class="col-10 col-10">
                            <h5 class="title">Web Development</h5>
                            <p class="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quis, ullam minus. 
                            </p>
                        </div>
                    </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card">
                    <div class="row">
                        <div class="col-2">
                            <b-icon-tools class="app-icon-lg"></b-icon-tools>
                        </div>
                        <div class="col-10">
                            <h5 class="title">Web Design</h5>
                            <p class="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quis, ullam minus. 
                            </p>
                        </div>
                    </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card">
                    <div class="row">
                        <div class="col-2">
                            <b-icon-tools class="app-icon-lg"></b-icon-tools>
                        </div>
                        <div class="col-10">
                            <h5 class="title">RESTFUL APIs</h5>
                            <p class="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quis, ullam minus. 
                            </p>
                        </div>
                    </div>
                  </div>
              </div>
              <div class="col-md-4 ">
                  <div class="card">
                    <div class="row">
                        <div class="col-2">
                            <b-icon-tools class="app-icon-lg"></b-icon-tools>
                        </div>
                        <div class="col-10">
                            <h5 class="title">Mobile APPS</h5>
                            <p class="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quis, ullam minus. 
                            </p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <!-- <div class="w-100 mt-5"></div>
          <div class="row">
              <div class="col-md-4">
                  <div class="card">
                    <div class="row">
                        <div class="col-2">
                            <b-icon-tools class="app-icon-lg"></b-icon-tools>
                        </div>
                        <div class="col-10">
                            <h5 class="title">Web Development</h5>
                            <p class="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quis, ullam minus. 
                            </p>
                        </div>
                    </div>
                  </div>
              </div>
          </div> -->
      </div>
  </div>
</template>

<script>
export default {
name:'section-services'
}
</script>

<style lang="scss" scoped>
  @import '../static/styles/_mixins.scss';

.section-services{
    padding: 2rem 10rem;

    @include respond(phone){
        padding: 2rem;
    }
}

.section-content{

    @include respond(phone){

    }
}

.card{
    border:none;
}

.app-icon-lg{
    font-size: 3rem;
}

.row{
    .col-md-4{
        margin-top: 1.75rem;
    }
}
</style>