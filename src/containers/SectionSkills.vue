<template>
    <div class="section section-skills">

        <div class="section-content col-md-6">
            <div class="skills-list">
                <h4 class="section-title">Skills</h4>
                <div class="skill-item">
                    <p class="skill-name">Python</p>
                    <b-progress :value="value" class="skill-progress"></b-progress>
                </div>
                <div class="skill-item">
                    <p class="skill-name">JavaScript</p>
                    <b-progress :value="value" class="skill-progress"></b-progress>
                </div>
                <div class="skill-item">
                    <p class="skill-name">HTML</p>
                    <b-progress :value="value" class="skill-progress"></b-progress>
                </div>
                <div class="skill-item">
                    <p class="skill-name">CSS</p>
                    <b-progress :value="value" class="skill-progress"></b-progress>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'section-skills',
        data() {
            return {
                value: 90
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../static/styles/_mixins.scss';

    .section-skills {
        padding: 2rem 10rem;

        @include respond(phone) {
            padding: 2rem;
        }
    }

    .section-content {
        margin: 1.25rem 0 0 0;

        padding: 2rem;

        @include respond(phone) {
            padding: 0;
        }
    }

    .skills-list {

        .skill-item+.skill-item {
            margin-top: .75rem;
        }
    }

    .skill-name {
        font-size: 1.2rem;
        margin-bottom: .75rem;

    }
</style>