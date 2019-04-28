<template>
    <div>
        <div>
            <app-task v-for="(task, idx) in tasks" :key="idx" @click.native="deleteTask(idx)">{{ task.Description }}</app-task>
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
import Task from '../components/Task';

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
        },
        deleteTask(index) {
            this.$store.dispatch('deleteTask', index);
        }
    },
    mounted() {
        this.$store.dispatch('fetchTasks');
    },
    components: {
        'app-task': Task
    }
};
</script>

<style scoped>

</style>
