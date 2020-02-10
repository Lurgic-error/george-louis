<template>
    <div class="section-projects">
        <h4 class="section-title text-center">Projects</h4>
        <div class="section-content">
            <div class="project-list row">
                <div class="project-item col-md-4">
                    <img src="../assets/img/saharaventures.jpg" alt="">
                </div>
                <div class="project-item col-md-4">
                    <img src="../assets/img/hero-img-1.jpg" alt="">
                </div>
                <div class="project-item col-md-4">
                    <img src="../assets/img/hero-img.jpg" alt="">
                </div>

                <div class="project-item col-md-4">
                    <img src="../assets/img/hero-img.jpg" alt="">
                </div>

                <div class="project-item col-md-4">
                    <img src="../assets/img/hero-img.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'section-projects',

    }
</script>

<style lang="scss" scoped>
    @import '../static/styles/_mixins.scss';

    .section-projects{
        padding: 4rem 10rem;

         @include respond(phone){
            padding: 2rem;
        }
    }
    .project-list {
        display: flex;
        justify-content: flex-start;

        @include respond(phone){
            flex-direction: column;
            align-items: center;
            justify-content: center;
            // .project-item + .project-item{
            //     margin-top: 2rem;
            //     margin-left: 0 !important;
            // }
        }


        // .project-item + .project-item {
        //     margin-top: 2rem;
        // }
    }

    .project-item {
        margin-bottom: 2rem;

        @include respond(phone){
            margin-left: 0;
        }
    }

    img{
        width: 100%;
        height: 300px;
        object-position: center;
        object-fit: cover;
    }
    
</style>