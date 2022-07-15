/**
 * @files 系统权限控制核心模块
 * @author yanghuning 2022-07-09
 */

import router from 'router';

import { asyncRoutes } from 'router';

router.addRoutes(asyncRoutes);

router.beforeEach(function (to, from, next) {
    
    // 设置页面标题
    document.title = to.meta.title;

    let isHas = router.options.routes.concat(asyncRoutes).map(item => item.path).includes(to.path);

    if (isHas) {
        next();
    } else {
        next('/err404');
    }

})