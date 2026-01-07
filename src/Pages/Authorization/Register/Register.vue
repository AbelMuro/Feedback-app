<script setup>
    import Form from './Form';
    import {useRouter} from 'vue-router';
    import { LayoutGroup, motion } from 'motion-v';

    const router = useRouter();

    const handleLink = () => {
        router.push('/');
    }

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
            <div class="links" @click="handleLink">
                Already have an account? 
                <a>Log in here</a>
            </div>
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

    .container::after{
        content: '';
        width: 97.5%;
        height: 98%;
        position: absolute;
        top: -3px;
        left: -3px;
        z-index: var(--farthest);
        border: 9px solid var(--blue-200);
        border-radius: 15px;
        filter: var(--blur-border);
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

    .links{
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        color: var(--white-200);
        text-align: center;
    }

    .links > a{
        color: var(--blue-0);
        text-decoration: underline;
        cursor: pointer;
    }

    .links > a:hover{
        color: var(--blue-100);
    }

    .links > a.active{
        color: var(--blue-200);
    }
</style>