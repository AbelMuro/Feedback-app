<script setup>
    import Toast from './Common/Components/Toast';
    import { RouterView } from 'vue-router';

    /* 
        this is where i left off, i am FINALLY finished with the authorization

        now i can start desiging the home page of the app
    */

</script>

<template>
    <RouterView/>
    <Toast/>
</template>

<style>
    body{
        width: 100%;
        min-height: 100vh;
        background: var(--background-gradient);
    }

    *{
        box-sizing: border-box;
        transition: all 0.2s linear, opacity 0s, transform 0s;
    }

    @font-face {
        font-family: 'roboto';
        src: url('../public/Roboto.ttf');
    }

    :root{
        --background-gradient: linear-gradient(213deg,rgba(8, 8, 8, 1) 0%, rgba(1, 32, 99, 1) 49%, rgba(0, 6, 69, 1) 99%);
        --black-100: rgb(28, 28, 28);
        --white-0: white;
        --white-100: rgb(198, 198, 198);
        --white-200: rgb(216, 216, 216);
        --blue-0: rgb(0, 0, 255);       
        --blue-100:#0000e2;
        --blue-200: rgb(0, 0, 192);
        --red-100: rgb(204, 0, 0);

        --preset-text-1-fontfamily: 'roboto';
        --preset-text-1-fontweight: 500;
        --preset-text-1-fontsize: 2rem;
        --preset-text-1-lineheight: 140%;
        --preset-text-1-letterspacing: 0px;
        
        --preset-text-2-fontfamily: 'roboto';
        --preset-text-2-fontweight: 300;
        --preset-text-2-fontsize: 1.2rem;
        --preset-text-2-lineheight: 140%;
        --preset-text-2-letterspacing: 0px;

        --preset-text-3-fontfamily: 'roboto';
        --preset-text-3-fontweight: 300;
        --preset-text-3-fontsize: 1rem;
        --preset-text-3-lineheight: 140%;
        --preset-text-3-letterspacing: 0px;
    }

</style>