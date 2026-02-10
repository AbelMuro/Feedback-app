<script setup>
    import {ref} from 'vue';
    import {useToastStore} from '~/Store';
    import {useRouter} from 'vue-router';
    import Dialog from '~/Common/Components/Dialog';

    const open = ref(false);
    const store = useToastStore();
    const router = useRouter();
    const {showToast} = store;

    const handleOpen = () => {
        open.value = !open.value;
    }

    const handleLogout = async () => {
        try{
            const response = await fetch('https://feedback-server.netlify.app/logout', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });

            if(response.status === 200){
                const result = await response.text();
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
    <li class="account_option" @click="handleOpen">
        Log Out
    </li>
    <Dialog 
        submit="Log out"
        :open="open" 
        :handleOpen="handleOpen"
        :handleSubmit="handleLogout"
        message="Are you sure you want to log out?"/>
</template>

<style scoped>
    .account_option{
        width: 100%;
        height: 60px;
        border-top: 1px solid var(--blue-0);
        color: var(--white-0);
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
    }

    .account_option:last-child{
        border-bottom: 1px solid var(--blue-0);
    }

    .account_option:hover{
        color: var(--blue-100);
    }
</style>