<script setup>
    import {ref} from 'vue';
    import {motion, AnimatePresence} from 'motion-v';
    import icons from './icons';
    import globalIcons from '~/../public/icons';

    const open = ref(false);

    const handleOpen = () => {
        open.value = !open.value;
    }
</script>

<template>
    <header class="mobile">
        <button class="mobile_button" @click="handleOpen">
            <img class="mobile_icon" :src="icons['hamburger']">
        </button>
    </header>
    <AnimatePresence>
        <motion.div 
            v-if="open" 
            class="overlay"
            :initial="{opacity: 0}"
            :animate="{opacity: 1, transition: {when: 'beforeChildren'}}"
            :exit="{opacity: 0, transition: {when: 'afterChildren'}}"
            >
            <motion.nav 
                v-if="open" 
                class="mobile_nav"
                :initial="{clipPath: 'circle(0px at 30px 30px)'}"
                :animate="{clipPath: 'circle(100%)'}"
                :exit="{clipPath: 'circle(0px at 30px 30px)'}"
                :transition="{duration: 0.5}"
                >
                <img class="logo" :src="globalIcons['logo']"/>
                <button class="close" @click="handleOpen">
                    <img :src="icons['close']"/>
                </button>
                <ul class="mobile_nav_list">
                    <li>
                        Home
                    </li>
                    <li>
                        About us
                    </li>
                    <li>
                        Contact us
                    </li>
                    <li>
                        Jobs
                    </li>
                </ul>
                <div class="buttons">
                    <button class="register">
                        Sign Up
                    </button>
                    <button class="login">
                        Login
                    </button>
                </div>

            </motion.nav>
        </motion.div>
    </AnimatePresence>
</template>

<style scoped>
    .mobile{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .close{
        width: 50px;
        height: 50px;
        background-color: transparent;
        border: none;
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }

    .close > img{
        width: 30px;
        object-fit: contain;
    }

    .logo{
        width: 100px;
        object-fit: contain;
        align-self: center;
    }

    .mobile_button{
        width: 60px;
        height: 50px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .mobile_icon{
        width: 50px;
        object-fit: contain;
    }

    .overlay{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: var(--black-transparent);
        z-index: var(--closest);
    }

    .mobile_nav{
        width: 250px;
        height: 100vh;
        padding: 20px;
        background-color: var(--blue-300);
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: relative;
    }

    .mobile_nav_list{
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .mobile_nav_list > li{
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        color: var(--white-0);
        cursor: pointer;
    }

    .mobile_nav_list > li:hover{
        color: var(--white-100);
    }

    .mobile_nav_list > li:active{
        color: var(--white-200);
    }

    .buttons{
        width: 85%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: absolute;
        bottom: 20px;
    }

    .register{
        width: 100%;
        height: 60px;
        border-radius: 15px;
        background-color: transparent;
        border: 1px solid var(--white-0);
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        color: var(--white-0);
        cursor: pointer;
    }

    .register:hover{
        color: var(--white-100);
        border: 1px solid var(--white-100);
    }

    .register:active{
        color: var(--white-200);
        border: 1px solid var(--white-200);
    }

    .login{
        width: 100%;
        height: 60px;
        border-radius: 15px;
        background-color: var(--blue-0);
        border: none;
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        line-height: var(--preset-text-2-lineheight);
        font-weight: var(--preset-text-2-fontweight);
        color: var(--white-0);
        cursor: pointer;
    }

    .login:hover{
        background-color: var(--blue-100);
    }

    .login:active{
        background-color: var(--blue-200);
    }

</style>