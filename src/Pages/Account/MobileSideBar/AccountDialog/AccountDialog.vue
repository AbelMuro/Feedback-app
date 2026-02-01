<script setup>
    import icons from './icons';
    import AccountImage from './AccountImage';
    import {ref, onMounted, onBeforeUnmount} from 'vue';
    import { AnimatePresence, motion } from 'motion-v';
    import { storeToRefs } from 'pinia';
    import {useMediaQuery} from '~/Common/Hooks';
    import {useToastStore, useAccountStore} from '~/Store';

    const [mobile] = useMediaQuery('(max-width: 500px)');
    const toastStore = useToastStore();
    const accountStore = useAccountStore();
    const {showToast} = toastStore;
    const {updateAccount} = accountStore;
    const {name, email} = storeToRefs(accountStore);
    const open = ref(false);

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
                updateAccount(result.email, result.name);
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
            showToast(message);
        }
    }

    onMounted(() => {
        getAccountInfo();
        document.addEventListener('update_account', getAccountInfo)
    });

    onBeforeUnmount(() => {
        document.removeEventListener('update_account', getAccountInfo);
    });

</script>

<template>
    <div class="user_container">
        <button class="user" @click="handleOpen">
            <img :src="icons['user']"/>
            <span v-if="!mobile">Account</span>
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
                    <AccountImage/>
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
        background-color: transparent;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
        cursor: pointer;
        color: var(--white-0);
        font-family: var(--preset-text-5-fontfamily);
        font-size: var(--preset-text-5-fontsize);
        font-weight: var(--preset-text-5-fontweight);
        line-height: var(--preset-text-5-lineheight);
        letter-spacing: var(--preset-text-5-letter-spacing);
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
        left: 0px;
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

</style>