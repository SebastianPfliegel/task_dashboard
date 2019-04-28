<template>
    <div>
        <div v-for="task in tasks" :key="task.Id">
            <p>{{ task.Id }} - {{ task.Description }}</p>
        </div>
        <div>
            <label for="task">New task</label>
            <input
                type="text"
                id="task"
                v-model="task"
            >
            <button @click="addTask">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            task: ''
        };
    },
    computed: {
        tasks() {
            return this.$store.getters.getTasks;
        }
    },
    methods: {
        addTask() {
            if (this.task !== '') {
                this.$store.dispatch('createTask', this.task);
            }
        }
    },
    mounted() {
        this.$store.dispatch('fetchTasks');
    }
};
</script>

<style scoped>

</style>
