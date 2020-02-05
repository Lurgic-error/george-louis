<template>
    <div class="app-nav">
        <b-navbar toggleable="lg" type="dark" variant="info" class="">
            <b-navbar-brand href="#">George Louis</b-navbar-brand>

            <b-navbar-toggle target="app-nav"></b-navbar-toggle>

            <b-collapse id="app-nav" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/">
                        Home
                    </b-nav-item>
                    <b-nav-item href="/about">
                        About
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>

            <router-view />

    </div>
</template>

<script>
    export default {
        name: 'app-nav',
    }
</script>

<style lang="scss" scoped>

</style>