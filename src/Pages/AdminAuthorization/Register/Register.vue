<script setup>
    import Form from './Form';
    import {useRouter} from 'vue-router';
    import { LayoutGroup, motion } from 'motion-v';

    const router = useRouter();

    const handleLink = () => {
        router.push('/admin_login');
    }
</script>

<template>
    <LayoutGroup>
        <div class="container">
            <motion.section 
                class="register"
                layout
                >
                <h1 class="title">
                    Admin Registration
                </h1>
                <p class="desc">
                    For administrators only. Enter the key that was given to you.
                </p>
                <Form/>
                <div class="links" >
                    Already have an account? 
                    <a @click="handleLink">Log in here</a>
                </div>
            </motion.section>
        </div>
    </LayoutGroup>
</template>

<style scoped>
    .container{
        width: 100%;
        min-height: calc(100vh - 100px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .register{
        width: 400px;
        height: fit-content;
        padding: 20px;
        border: 1px solid var(--blue-200);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: relative;
    }

    .register::after{
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

    @media(max-width: 620px){
        .container{
            min-height: calc(100vh - 80px);
        }

        .register{
            width: 320px;
        }

        .title{
            font-size: 1.5rem;
        }

        .desc{
            font-size: 1.1rem;
        }

        .links{
            font-size: 1rem;
        }

        .links > a{
            font-size: 1rem;
        }
    }
</style>