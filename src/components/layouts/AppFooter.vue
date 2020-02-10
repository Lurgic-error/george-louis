<template>
    <div class="app-footer">
        <div class="app-designer">
            <h6 class="designer-name">Designed  by  George Louis</h6>
        </div>
        <div class="app-copyright">
            2020
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-footer",

    }
</script>


<style lang="scss" scoped>
    .app-footer {
        background-color: darkgray;
        padding: 1rem;
        padding-bottom: .5rem;
    }

    .app-designer{
        display: flex;
        justify-content: center;
    }

    .designer-name{
        font-size: 1.2rem;
    }

    .app-copyright{
        display: flex;
        justify-content: center;
        margin-top: .75rem;
    }
</style>