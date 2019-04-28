<template>
    <header>
        <div>
            <router-link to="/">TaskDashboard</router-link>
        </div>
        <nav>
            <ul>
                <li v-if="!isAuth">
                    <router-link to="/signup">Sign Up</router-link>
                </li>
                <li v-if="!isAuth">
                    <router-link to="/signin">Sign In</router-link>
                </li>
                <li v-if="isAuth">
                    <router-link to="/tasks">Tasks</router-link>
                </li>
                <li v-if="isAuth">
                    <button @click="onLogout">Logout</button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    computed: {
        isAuth() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        onLogout() {
            this.$store.dispatch('logout');
        }
    }
};
</script>


<style scoped>

</style>
