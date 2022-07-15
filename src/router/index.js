/**
 * @files 路由表相关
 * @author yanghuning 2021-04-21
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 固定路由
const constantRoutes = [
    {
        path: '/login',
        name: 'Login',
        components: require('views/Login'),
        meta: {
            title: '用户登录'
        }
    },
    {
        path: '/notauth',
        name: 'Notauth',
        components: require('views/Notauth'),
        meta: {
            title: '没有权限'
        }
    },
    {
        path: '/err404',
        name: 'Err404',
        components: require('views/Err404'),
        meta: {
            title: '页面不存在'
        }
    }
];

// 异步路由
export const asyncRoutes = [
    {        
        path: '/',
        name: 'home',
        components: require('views/Home'),
        meta: {
            title: '系统首页',
            hidden: false
        }
    }
];

let router = new Router({
    routes: constantRoutes
});

export default router;