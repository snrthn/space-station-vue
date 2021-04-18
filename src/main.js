/**
 * @files 入口文件
 * @author yanghuning
 */

import Vue from 'vue';
import App from './App';

import './styles/reset.css';
import './styles/global.css';


/**
 * 初始化 Vue 根节点
 */
new Vue({
    el: '#app',
    components: { App },
    template: `<App/>`
})