<script setup>
    import {ref, useTemplateRef, onMounted} from 'vue';
    import {motion, AnimatePresence} from 'motion-v';
    import icons from './icons'

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
    <AnimatePresence>
        <motion.aside 
            class="sidebar" 
            :initial="{width: '40px'}" 
            :animate="open ? {width: '200px'} : {width: '40px'}"
            :transition="{duration: 0.4}"
            >
            <motion.button 
                class="open_sidebar"
                :initial="{opacity: 1}" 
                :exit="{opacity: 0}"
                v-if="!open" 
                @click="handleOpen">
                    <img :src="icons['rightArrow']"/>
            </motion.button>
            <motion.button 
                class="close_sidebar" 
                :initial="{opacity: 1}"
                :exit="{opacity: 0}"
                v-if="open" 
                @click="handleOpen">
                    <img :src="icons['close']">
            </motion.button>
            <motion.div 
                class="account_user" 
                :initial="{opacity: 0}"
                :animate="{opacity: 1, delay: 0.6}"
                :exit="{opacity: 0}"
                v-if="open">
                    <img class="account_image" src="http://localhost:4000/account_image"/>
                    <h2 class="account_name">
                        {{name}}
                    </h2>
                    <p class="account_email">
                        {{email}}
                    </p>
            </motion.div>
        </motion.aside>
    </AnimatePresence>

</template>

<style scoped>
     .sidebar{
        height: calc(100vh - 80px);
        border-top-right-radius: 10px;
        border: 1px solid var(--blue-0);
        position: relative; 
     }

     .open_sidebar{
        width: 40px;
        height: 40px;
        background-color: transparent;
        padding: 0px;
        border: none;
        position: absolute;
        inset: 0;
        margin: auto;
        cursor: pointer;
    }

    .open_sidebar > img{
        width: 30px;
        object-fit: contain;
    }    

    .close_sidebar{
        width: 40px;
        height: 40px;
        background-color: transparent;
        padding: 0px;
        border: none;
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: pointer
    }

    .close_sidebar > img{
        width: 30px;
        object-fit: contain;
    }

    .account_user{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        padding: 10px;
    }

    .account_name{
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        margin: 0px;
        color: var(--white-0);
    }

    .account_email{
        font-family: var(--preset-text-4-fontfamily);
        font-size: var(--preset-text-4-fontsize);
        line-height: var(--preset-text-4-lineheight);
        letter-spacing: var(--preset-text-4-letterspacing);
        margin: 0px;
        color: var(--white-100);
    }

    .account_image{
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