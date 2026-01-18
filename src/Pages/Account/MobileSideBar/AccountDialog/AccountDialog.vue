<script setup>
    import icons from './icons';
    import {ref, onMounted} from 'vue';
    import { AnimatePresence, motion } from 'motion-v';

    const open = ref(false);
    const name = ref('');
    const email = ref('');

    const handleOpen = () => {
        open.value = !open.value;
    }

    const getAccountInfo = async () => {
        try{
            const response = await fetch('http://localhost:4000/get_account', {
                method: 'GET',
                credentials: 'include'
            });

            if(response.status === 200){
                const result = await response.json();
                console.log(result);
                name.value = result.name;
                email.value = result.email;
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
    }

    onMounted(() => {
        getAccountInfo();
    });

</script>

<template>
    <div class="user_container">
        <button class="user" @click="handleOpen">
            <img :src="icons['user']"/>
        </button>
        <AnimatePresence>
            <motion.dialog 
                v-if="open" 
                :open="true" 
                class="user_dialog" 
                :initial="{scale: 0}"
                :animate="{scale: 1}"
                :exit="{scale: 0}"
                :transition="{scale: 0}">
                    <img class="user_image" src="http://localhost:4000/account_image"/>
                    <h2 class="user_name">
                        {{name}}
                    </h2>
                    <p class="user_email">
                        {{email}}
                    </p>
            </motion.dialog>
        </AnimatePresence>
    </div>
</template>

<style scoped>
    .user_container{
        position: relative;
    }

    .user{
        width: 60px;
        height: 60px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .user > img{
        width: 40px;
        object-fit: contain;
    }

    .user_dialog{
        width: fit-content;
        height: fit-content;
        padding: 25px;
        border-radius: 15px;
        position: absolute;
        bottom: 80px;
        left: -30px;
        background-color: var(--blue-100);
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .user_dialog::before{
        content: '';
        width: fit-content;
        height: fit-content;
        padding: 25px;
        border-radius: 15px;
        background-color: var(--blue-100);
        position: absolute;
        inset: 0;
        margin: auto;
        filter: blur(25px);
        z-index: var(--farthest);
    }

    .user_name{
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        margin: 0px;
        color: var(--white-0);
    }

    .user_email{
        font-family: var(--preset-text-4-fontfamily);
        font-size: var(--preset-text-4-fontsize);
        line-height: var(--preset-text-4-lineheight);
        letter-spacing: var(--preset-text-4-letterspacing);
        margin: 0px;
        color: var(--white-100);
    }

    .user_image{
        width: 60px;
        height: 60px;
        justify-self: center;
        align-self: center;
        border-radius: 100%;
        grid-column: 1/2;
        grid-row: 1/2;
        justify-self: center;
    }
</style>