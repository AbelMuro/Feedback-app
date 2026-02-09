<script setup>
    import {ref, onMounted} from 'vue';
    import LogOut from './LogOut';
    import icons from './icons';
    import AccountDialog from './AccountDialog';
    import DeleteDialog from './DeleteDialog';
    import {useRouter} from 'vue-router';
    import {useToastStore} from '~/Store';
    import {useMediaQuery} from '~/Common/Hooks';

    const [mobile] = useMediaQuery('(max-width: 500px)');
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
            const response = await fetch('https://feedback-server.netlify.app /get_account', {
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
            <span v-if="!mobile">Details</span>
        </button>
            <button class="footer_link" @click="() => handleLink('/account/update_password')">
            <img :src="icons['password']">
            <span v-if="!mobile">Password</span>
        </button>
        <button class="footer_link" @click="() => handleLink('/account/display_all_feedback')">
            <img :src="icons['feedback']"/>
            <span v-if="!mobile">Feedback</span>
        </button>
        <LogOut/>
        <DeleteDialog/>
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
        background-color: transparent;
        border: none;
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        color: var(--white-0);
        font-family: var(--preset-text-5-fontfamily);
        font-size: var(--preset-text-5-fontsize);
        font-weight: var(--preset-text-5-fontweight);
        line-height: var(--preset-text-5-lineheight);
        letter-spacing: var(--preset-text-5-letter-spacing);
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

    .footer_link:nth-of-type(3) > img{
        width: 40px;
    }

    @media(max-width: 500px){
        .footer{
            gap: 0px;
        }
    }

</style>