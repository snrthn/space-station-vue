/**
 * @files 入口文件
 * @author yanghuning
 */

import Vue from 'vue';
import router from 'router';
import store from 'store';
import App from './App';

import uploader from 'components/simple-uploader';
Vue.use(uploader);

import './styles/reset.css';
import './styles/global.css';

/**
 * 初始化 Vue 根节点
 */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: `<App/>`
})