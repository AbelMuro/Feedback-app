<script setup>
    import { onMounted } from 'vue';
    import Form from './Form';
    import { useRouter, useRoute } from 'vue-router';
    import {motion, LayoutGroup} from 'motion-v';

    const router = useRouter();
    const route = useRoute();

    const handleLink = () => {
        router.push('/');
    }

    onMounted(() => {
        const token = route.params.token;

        if(!token)
            router.push('/')
    })

</script>


<template>
    <div class="container">
        <LayoutGroup>
            <motion.section 
                class="container"
                layout
                >
                <h1 class="title">
                    Reset Password
                </h1>
                <p class="desc">
                    Enter a password that has at least 1 letter, 1 number, 1 symbol and 8 characters
                </p>
                <Form/>
                <div class="links">
                    Go back to 
                    <a @click="handleLink">Login</a>
                </div>
            </motion.section>
        </LayoutGroup>
    </div>

</template>

<style scoped>
    .container{
        width: 100%;
        min-height: calc(100vh - 100px);
    }

    .reset{
        width: 400px;
        height: fit-content;
        padding: 20px;
        position: relative;
        border: 1px solid var(--blue-200);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .reset::after{
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