<template>
    <div class="app-home">
        <div class="title">欢迎使用Vue.js</div>
        <div class="content">Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的<span class="weight">渐进式框架</span>。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与<span class="light">现代化的工具链</span>以及各种<span class="light">支持类库</span>结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</div>
        <div class="demo">
            <div>
                <div class="sub-tit">图片示例</div>
                <img class="start-img" :src="require('assets/images/start.jpg')" alt="发射场">
            </div>
            <div>
                <div class="sub-tit">图片示例</div>
                <img class="logo" :src="require('assets/images/logo.png')" alt="发射场">
            </div>
            <div>
                <div class="sub-tit">音频示例</div>
                <audio :src="require('assets/media/20210325.mp3')" controls/>
            </div>
        </div>
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
            return {}
        },
        mounted () {
            console.log(this.$store.state.name)
        }
    }
</script>

<style lang="less">
    .app-home {
        padding: 8px;
        font-size: 18px;

        .title {
            font-size: 24px;
            font-weight: bold;
            line-height: 50px;
            color: #424242;
        }

        .content {
            font-size: 16px;
            line-height: 28px;
            text-align: justify;
        }

        .weight {
            font-weight: bold;
        }

        .light {
            font-weight: bold;
            color:#42b983
        }

        .sub-tit {
            line-height: 50px;
            color: #3388ff;
        }

        .start-img {
            width: 320px;
        }

        .logo {
            width: 200px;
        }

        .demo {
            margin-bottom: 8px;
            display: flex;

            > div {
                margin-right: 16px;
            }
        }
    }
</style>