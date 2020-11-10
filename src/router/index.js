import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('@/views/home/index'),
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
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
    }
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
