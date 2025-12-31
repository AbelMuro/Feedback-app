<script setup>
    import Form from './Form';
    import { LayoutGroup, motion } from 'motion-v';


</script>

<template>
    <LayoutGroup>
        <motion.section 
            class="container"
            layout
            >
            <h1 class="title">
                Register
            </h1>
            <p class="desc">
                Create an account. Password must have a letter, number, symbol and 8 characters.
            </p>
            <Form/>
        </motion.section>
    </LayoutGroup>
</template>

<style scoped>
    .container{
        width: 400px;
        height: fit-content;
        padding: 20px;
        position: fixed;
        inset: 0;
        margin: auto;
        border: 1px solid var(--blue-200);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .title{
        margin: 0px;
        font-family: var(--preset-text-1-fontfamily);
        font-size: var(--preset-text-1-fontsize);
        font-weight: var(--preset-text-1-fontweight);
        line-height: var(--preset-text-1-lineheight);
        letter-spacing: var(--preset-text-1-letterspacing);
        color: var(--white-0);
        text-align: center;
    }

    .desc{
        margin: 0px;
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        color: var(--white-100);
        text-align: center;
    }
</style>