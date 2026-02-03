<script setup>
    import {LayoutGroup, motion} from 'motion-v';
    import Form from './Form';

</script>

<template>
   <div class="container">
        <LayoutGroup>
            <motion.section 
                class="login"
                layout
                >
                <h1 class="title">
                    Developer Login
                </h1>
                <p class="desc">
                    For developers only.
                </p>
                <Form/>
            </motion.section>
        </LayoutGroup>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        min-height: calc(100vh - 100px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login{
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

    .login::after{
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

        .login{
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