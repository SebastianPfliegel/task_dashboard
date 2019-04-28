<template>
    <div>
        <div>
            <form @submit.prevent="onSubmit">
                <div>
                    <label for="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                    >
                </div>
                <div>
                    <label for="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                    >
                </div>
                <div>
                    <label for="confirm-password">Confirm password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        v-model="confirmPassword"
                    >
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        onSubmit() {
            if (this.password === this.confirmPassword) {
                this.$store.dispatch('signup', {
                    EMail: this.email,
                    Password: this.password
                });
            }
        }
    }
};
</script>

<style scoped>

</style>
