<template>
    <div class="app-home">
        欢迎访问空间站

        <Demo>
            <span>我也不知道这是个啥</span>
        </Demo>

        <input v-mydir="widthVal" v-if="flag" v-model="widthVal" />

        <button @click="flag = !flag">切换</button>

        
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
                widthVal: 0,
                flag: true
            }
        },
        directives: {
            mydir: {
                bind (el, binding, vnode, oldVnode) {
                    console.log('bind', el, binding, vnode, oldVnode);
                },
                inserted: function (el, binding, vnode, oldVnode) {
                    console.log('inserted', el, binding, vnode, oldVnode);
                    el.focus();
                    el.value = window.innerWidth;

                    window.onresize = function () {
                        el.value = window.innerWidth;
                    };
                },
                update (el, binding, vnode, oldVnode) {
                    console.log('update', el, binding, vnode, oldVnode);
                },
                componentUpdated (el, binding, vnode, oldVnode) {
                    console.log('componentUpdated', el, binding, vnode, oldVnode);
                },
                unbind (el, binding, vnode, oldVnode) {
                    console.log('unbind', el, binding, vnode, oldVnode);
                }
            }
        },
        mounted () {
            
        }
    }
</script>

<style lang="less">
    .app-home {
        
    }
</style>