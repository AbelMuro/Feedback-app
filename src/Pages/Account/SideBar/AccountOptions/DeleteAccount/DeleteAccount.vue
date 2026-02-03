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

    const handleDelete = async () => {
        try{
            const response = await fetch('http://localhost:4000/delete_account', {
                method: 'DELETE',
                credentials: 'include'
            })
            const result = await response.text();
            console.log(result);
            showToast(result);
                 
            if(response.status === 401)
                router.push('/login');
            else if(response.status === 404)
                router.push('/register');
            else
                router.push('/');
            const event = new CustomEvent('auth_change');
            document.dispatchEvent(event)
                
        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
    }
</script>

<template>
    <li class="account_option" @click="handleOpen">
        Delete Account
    </li>
    <Dialog 
        submit="Delete"
        :open="open" 
        :handleOpen="handleOpen"
        :handleSubmit="handleDelete"
        message="Are you sure you want to delete your account?"/>
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
    }

    .account_option:last-child{
        border-bottom: 1px solid var(--blue-0);
    }

    .account_option:hover{
        color: var(--blue-100);
    }
</style>