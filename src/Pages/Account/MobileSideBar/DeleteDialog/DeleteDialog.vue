<script setup>
    import {ref} from 'vue';
    import {useToastStore} from '~/Store';
    import {useRouter} from 'vue-router';
    import Dialog from '~/Common/Components/Dialog';
    import icons from './icons';
    import {useMediaQuery} from '~/Common/Hooks';

    const [mobile] = useMediaQuery('(max-width: 500px)');
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
        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
    }
</script>

<template>
    <li class="account_option" @click="handleOpen">
        <img :src="icons['deleteAccount']"/>
        <span v-if="!mobile">Delete</span>
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

    .account_option > img{
        width: 40px;
        object-fit: contain;
    }

</style>