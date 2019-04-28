import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter(to, from, next) {
                if (!store.getters.isAuthenticated) {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import(/* webpackChunkName: "signup" */ './views/SignUp.vue'),
            beforeEnter(to, from, next) {
                if (!store.getters.isAuthenticated) {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import(/* webpackChunkName: "signin" */ './views/SignIn.vue'),
            beforeEnter(to, from, next) {
                if (!store.getters.isAuthenticated) {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: () => import(/* webpackChunkName: "tasks" */ './views/Tasks.vue'),
            beforeEnter(to, from, next) {
                if (store.getters.isAuthenticated) {
                    next();
                } else {
                    next('/signin');
                }
            }
        }
    ]
});
