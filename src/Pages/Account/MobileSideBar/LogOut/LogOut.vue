<script setup>
    import {ref} from 'vue';
    import icons from './icons';
    import {motion, AnimatePresence} from 'motion-v';
    import Dialog from '~/Common/Components/Dialog';
    import {useToastStore} from '~/Store';
    import {useRouter} from 'vue-router';

    const open = ref(false);
    const router = useRouter();
    const store = useToastStore();
    const {showToast} = store;

    const handleOpen = () => {
        open.value = !open.value
    }

     const handleLogout = async () => {
        try{
            const response = await fetch('http://localhost:4000/logout', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                showToast(result);
                const event = new CustomEvent('auth_change');
                document.dispatchEvent(event);
                router.push('/login');
            }   
            else{
                const result = await response.text();
                console.log(result);
                showToast(result);
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
            showToast(message);
        }
    }
</script>

<template>
    <button class="logout" @click="handleOpen">
        <img :src="icons['logout']">
    </button>
    <Dialog
        :open="open" 
        :handleOpen="handleOpen"
        :handleSubmit="handleLogout"
        message="Are you sure you want to log out?"/>
</template>

<style scoped>
    .logout{
        width: 60px;
        height: 60px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .logout > img{
        width: 50px;
        object-fit: contain;
    }
</style>