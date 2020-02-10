<template>
    <div class="section-about">
        <div class="about-img">
            <img src="../assets/img/hero-img.jpg" alt="George Louis">
        </div>
        <div class="about-desc">
            <h4 class="section-title">About Me</h4>
            <p class="section-text text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi totam non saepe a consectetur voluptas
                iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos exercitationem aperiam possimus
                doloribus, delectus facilis omnis et eligendi reprehenderit pariatur rerum! Consequatur non cum facilis
                aliquid, dignissimos laboriosam molestiae laborum! Atque, enim commodi. Aliquam, veniam corrupti
                repellendus blanditiis maiores minus praesentium totam ipsa?
            </p>
            <button class="app-btn btn-cta-dark">Download CV</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'section-about',

    }
</script>

<style lang="scss" scoped>
    @import '../static/styles/_mixins.scss';

    .section-about {
        padding: 4rem;
        display: flex;

        @include respond(phone) {
            display: flex;
            padding: 2rem;
            flex-direction: column;

        }
    }

    .about-img {
        flex: 1 1 30%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        @include respond(phone) {
            flex: 1;
        }

        img {
            height: 100%;
            width: 500px;
            object-fit: cover;
            object-position: center;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            @include respond(phone) {
                width: 100%;
            }
        }

    }

    .about-desc {
        flex-basis: 1 1 60%;
        align-self: center;
        margin-left: 2rem;
        padding: 2rem;

        @include respond(phone) {
            flex: 1;
            padding: 0;
            padding-top: 2rem;
            text-align: justify;
            // text-justify: dist;
            word-spacing: 2px;
            margin-left: 0;

            .section-text {
                text-justify: auto;
            }
        }
    }
</style>