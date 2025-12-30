<script setup>
    import SubmitFeedback from './Pages/SubmitFeedback';
    import Toast from './Common/Components/Toast';
    import Login from './Pages/Authorization/Login';

    /* 
        this is where i left off, i want to implement authorization to ensure 
        that the system of creating feedback and receiving responses will make more sense
    */


</script>

<template>
    <Login/>
    <Toast/>
</template>

<style>
    body{
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
        --white-0: white;
        --white-100: rgb(198, 198, 198);
        --white-200: rgb(216, 216, 216);
        --blue-0: rgb(0, 0, 255);        
        --blue-100:#0000e2;
        --blue-200: rgb(0, 0, 192);
        --red-100: rgb(204, 0, 0);
    }

</style>