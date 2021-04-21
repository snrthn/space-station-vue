<template>
    <div class="app-home">
        <div class="sub-tit">这就是我的子组件</div>
        <img class="start-img" :src="startImg" alt="发射场">
        <div class="sub-tit">下面是播放器示例</div>
        <audio :src="require('assets/media/20210325.mp3')" controls/>
        <Demo/>
    </div>
</template>

<script>
    import Demo from 'components/demo';
    export default {
        components: {
            Demo
        },
        data () {
            return {
                startImg: require('assets/images/start.jpg')
            }
        },
        mounted () {
            console.log(this.$store.state.name)
        }
    }
</script>

<style lang="less">
    .app-home {
        font-size: 18px;

        .sub-tit {
            line-height: 50px;
            color: #3388ff;
        }

        .start-img {
            width: 320px;
        }
    }
</style>