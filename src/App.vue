<template>
    <div class="app-main">
        <div>{{ msg }}</div>
        <hr/>
        <Home/>
    </div>
</template>

<script>
    import Home from 'views/Home';
    export default {
        components: {
            Home
        },
        data () {
            return {
                msg: '这是我的第一个Vue程序！Hello World！'
            }
        }
    }
</script>

<style>
    .app-main {
        color: #424242;
        font-size: 24px;
    }
</style>