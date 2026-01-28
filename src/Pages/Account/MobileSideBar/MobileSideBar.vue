<script setup>
    import {ref, onMounted} from 'vue';
    import LogOut from './LogOut';
    import icons from './icons';
    import AccountDialog from './AccountDialog';
    import {useRouter} from 'vue-router';
    import {useToastStore} from '~/Store';

    const store = useToastStore();
    const {showToast} = store;
    const router = useRouter();
    const name = ref('');
    const email = ref('');

    const handleLink = (link) => {
        router.push(link)
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
            showToast(message);
        }
    }

    onMounted(() => {
        getAccountInfo();
    });

</script>

<template>
    <footer class="footer">
        <AccountDialog/>
        <button class="footer_link" @click="() => handleLink('/account/update_details')">
            <img :src="icons['settings']">
        </button>
            <button class="footer_link" @click="() => handleLink('/account/update_password')">
            <img :src="icons['password']">
        </button>
        <button class="footer_link" @click="() => handleLink('/account/display_all_feedback')">
            <img :src="icons['feedback']"/>
        </button>
        <LogOut/>
    </footer>
</template>

<style scoped>
    .footer{
        width: 100vw;
        height: 80px;
        background-color: var(--blue-transparent);
        grid-column: 1/2;
        grid-row: 2/3;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
     }

    .footer_link{
        width: 60px;
        height: 60px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .footer_link > img{
        object-fit: contain;
    }

    .footer_link:nth-of-type(1) > img{
        width: 40px;
    }

    .footer_link:nth-of-type(2) > img{
        width: 40px;
    }

</style>