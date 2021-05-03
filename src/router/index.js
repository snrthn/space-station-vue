/**
 * @files 路由表相关
 * @author yanghuning 2021-04-21
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            components: require('views/Home')
        }
    ]
});

export default router;