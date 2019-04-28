import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

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
        }
    },
    actions: {
        login: ({ commit }, credentials) => {
            axios
                .post('/user/login', credentials)
                .then(res => {
                    commit('setToken', res.data);
                })
                .catch(err => {
                    
                });
        },
        signup: ({ state }, credentials) => {
            axios
                .post('/user/signup', credentials)
                .then(res => {

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
        }
    },
    getters: {
        getToken: (state) => {
            return state.token;
        },
        getTasks: (state) => {
            return state.tasks;
        }
    }
});
