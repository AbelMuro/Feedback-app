<script setup>
    import Toast from './Common/Components/Toast';
    import { RouterView } from 'vue-router';

    /* 
        this is where i left off, i am currently designing the footer bar component
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
        margin: 0px;
        padding: 0px;
    }

    *{
        box-sizing: border-box;
        transition: all 0.2s linear, opacity 0s, transform 0s;
    }

    @font-face {
        font-family: 'roboto';
        src: url('../public/Roboto.ttf');
    }

    @font-face{
        font-family: 'bebas neue';
        src: url('../public/BebasNeue.ttf');
    }

    :root{
        --closest: 100;
        --closer: 75;
        --close: 50;
        --far: 25;
        --farthest: -1;


        --background-gradient: linear-gradient(213deg,rgba(8, 8, 8, 1) 0%, rgba(0, 11, 77, 1) 45%, rgba(0, 8, 53, 1) 66%, rgba(0, 2, 10, 1) 100%);
        --black-transparent: rgba(0, 0, 0, 0.5);
        --black-100: rgb(28, 28, 28);
        --white-0: white;
        --white-100: rgb(198, 198, 198);
        --white-200: rgb(216, 216, 216);
        --blue-0: #0000ff;       
        --blue-100:#0000e2;
        --blue-200: rgb(0, 0, 192);
        --blue-300: rgb(1, 1, 162);
        --blue-transparent: rgba(0, 0, 255, 0.3);
        --red-100: rgb(204, 0, 0);

        --blur-button: blur(30px);
        --blur-button-hover: blur(40px);
        --blur-button-active: blur(50px);

        --blur-border: blur(10px);


        --preset-text-0-fontfamily: 'bebas neue';
        --preset-text-0-fontweight: 800;
        --preset-text-0-fontsize: 5rem;
        --preset-text-0-lineheight: 100%;
        --preset-text-0-letterspacing: 0px;

        --preset-text-1-fontfamily: 'roboto';
        --preset-text-1-fontweight: 500;
        --preset-text-1-fontsize: 2rem;
        --preset-text-1-lineheight: 120%;
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