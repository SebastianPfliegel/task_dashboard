<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'app',
    components: {
        'app-header': Header
    }
};
</script>

<style>
    body, html {
        margin: 0;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
</style>
