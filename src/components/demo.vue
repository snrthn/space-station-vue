<template>
    <div class="app-test">
        <h1>测试组件</h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style lang="less">
    .app-test {
        border: 1px solid #ffaa00;
        padding: 16px;
    }
</style>