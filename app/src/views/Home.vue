<template>
    <div id="home">
        <h1>Task Dashboard</h1>
        <p>Organize your open tasks</p>
        <div class="router">
            <router-link to="/signup">Sign Up</router-link>
            <router-link to="/signin">Sign In</router-link>
        </div>
    </div>
</template>

<style scoped>
    #home {
        width: 80%;
        margin: auto;
    }

    h1 {
        text-align: center
    }

    p {
        text-align: center
    }

    .router {
        width: 300px;
        margin: auto;
        text-align: center;
    }

    .router a {
        margin: 10px;
        text-decoration: none;
        display: inline-block;
        border: 1px solid #521751;
        border-radius: 3px;
        width: 100px;
        padding: 10px;
        box-sizing: border-box;
        color: #521751;
    }

    .router a:hover,
    .router a:active {
        background-color: #521751;
        color: white;
    }
</style>
