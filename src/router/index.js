import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {   path: '/404',
        component: () => import('@/views/404'),
    },
    {
        path: "/",
        name: "home",
        component: () => import('@/views/home/index'),
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/views/login/index')
    },
    {
        path: "/test",
        name: "test",
        component: () => import('@/views/question/index')
    },
    {
        path: "/sign",
        name: "sign",
        component: () => import('@/views/ums/sign/index')
    },
    {path: '*', redirect: '/404', hidden: true}
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
