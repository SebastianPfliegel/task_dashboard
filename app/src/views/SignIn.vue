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
            password: ''
        };
    },
    methods: {
        onSubmit: () => {
            
        }
    }
};
</script>

<style scoped>

</style>
