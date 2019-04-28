import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        tasks: null
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token;
        },
        setTasks: (state, tasks) => {
            state.tasks = tasks;
        },
        addTask: (state, task) => {
            state.tasks.push(task);
        },
        removeTask: (state, task) => {
            state.tasks.splice(task, 1);
        },
        clearAuth: (state) => {
            state.token = null;
        }
    },
    actions: {
        login: ({ commit }, credentials) => {
            axios
                .post('/user/login', credentials)
                .then(res => {
                    commit('setToken', res.data);
                    router.replace('/tasks');
                })
                .catch(err => {
                    
                });
        },
        logout: ({ commit }) => {
            commit('clearAuth');
            router.replace('/');
        },
        signup: ({ state }, credentials) => {
            axios
                .post('/user/signup', credentials)
                .then(res => {
                    router.replace('/signin');
                })
                .catch(err => {

                });
        },
        fetchTasks: ({ commit, getters }) => {
            axios
                .get('/tasks', {
                    headers: {
                        'Authorization': 'Bearer ' + getters.getToken
                    }
                })
                .then(res => {
                    commit('setTasks', res.data);
                })
                .catch(err => {

                });
        },
        createTask: ({ commit, getters }, task) => {
            axios
                .post('/tasks', { Task: task }, {
                    headers: {
                        'Authorization': 'Bearer ' + getters.getToken
                    }
                })
                .then(res => {
                    commit('addTask', res.data);
                })
                .catch(err => {

                });
        },
        deleteTask: ({ commit, getters }, index) => {
            const taskId = getters.getTasks[index].Id;
            axios
                .delete('/tasks/' + taskId, {
                    headers: {
                        'Authorization': 'Bearer ' + getters.getToken
                    }
                })
                .then(res => {
                    commit('removeTask', index);
                })
                .catch(err => {

                });
        }
    },
    getters: {
        getToken: (state) => {
            return state.token;
        },
        getTasks: (state) => {
            return state.tasks;
        },
        isAuthenticated: (state) => {
            return state.token !== null;
        }
    }
});
