import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import(/* webpackChunkName: "signup" */ './views/SignUp.vue')
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import(/* webpackChunkName: "signin" */ './views/SignIn.vue')
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: () => import(/* webpackChunkName: "tasks" */ './views/Tasks.vue')
        }
    ]
});
