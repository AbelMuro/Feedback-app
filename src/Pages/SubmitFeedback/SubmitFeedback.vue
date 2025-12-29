<script setup>
    import Form from './Form';
</script>

<template>
    <section class="container">
        <h1 class="title">
            Submit feedback here
        </h1>
        <p class="desc">
            You will receive an email when your feedback has been addressed.
        </p>
        <Form/>
    </section>

</template>

<style scoped>
    .container{
        width: 400px;
        height: 670px;
        border-radius: 10px;
        position: absolute;
        inset: 0;
        margin: auto;
        border: 3px solid var(--blue-100);
        padding: 25px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .title{
        margin: 0px;
        font-size: 1.7rem;
        font-family: 'roboto';
        text-align: center;
        line-height: 140%;
        letter-spacing: 0px;
        font-weight: 500;
        color: var(--white-100);
    }

    .desc{
        font-size: 1.2rem;
        font-family: 'roboto';
        line-height: 140%;
        letter-spacing: 0px;
        margin: 0px;
        font-weight: 300;
        color: var(--white-200);
    }

</style>