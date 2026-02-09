<script setup>
    import {ref} from 'vue';
    import icons from './icons';
    import Dialog from '~/Common/Components/Dialog';
    import {useToastStore} from '~/Store';
    import {useRouter} from 'vue-router';
    import {useMediaQuery} from '~/Common/Hooks';

    const [mobile] = useMediaQuery('(max-width: 500px)');
    const open = ref(false);
    const router = useRouter();
    const store = useToastStore();
    const {showToast} = store;

    const handleOpen = () => {
        open.value = !open.value
    }

     const handleLogout = async () => {
        try{
            const response = await fetch('https://feedback-server.netlify.app /logout', {
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
        <span v-if="!mobile">Log Out</span>
    </button>
    <Dialog
        submit="Logout"
        :open="open" 
        :handleOpen="handleOpen"
        :handleSubmit="handleLogout"
        message="Are you sure you want to log out?"/>
</template>

<style scoped>
    .logout{
        width: 60px;
        padding: 0px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
        color: var(--white-0);
        font-family: var(--preset-text-5-fontfamily);
        font-size: var(--preset-text-5-fontsize);
        font-weight: var(--preset-text-5-fontweight);
        line-height: var(--preset-text-5-lineheight);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .logout > img{
        width: 45px;
        object-fit: contain;
    }
</style>