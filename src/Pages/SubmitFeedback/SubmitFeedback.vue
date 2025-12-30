<script setup>
    import {motion, LayoutGroup} from 'motion-v';
    import Form from './Form';
</script>

<template>
    <LayoutGroup>
        <motion.section layout class="container">
            <motion.h1 layout class="title">
                Submit feedback here
            </motion.h1>
            <motion.p layout class="desc">
                You will receive an email when your feedback has been addressed.
            </motion.p>
            <Form/>
        </motion.section>
    </LayoutGroup>
</template>

<style scoped>

    .container{
        width: 400px;
        height: fit-content;
        border-radius: 10px;
        position: fixed;
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