<script setup>
    import {onMounted, onBeforeUnmount, ref} from 'vue';
    import AccountOptions from './AccountOptions';
    import {storeToRefs} from 'pinia';
    import {useToastStore, useAccountStore} from '~/Store';
    import icons from '~/Common/icons';

    const imageSRC = ref('');
    const toastStore = useToastStore();
    const accountStore = useAccountStore();
    const {showToast} = toastStore;
    const {updateAccount} = accountStore;
    const {email, name} = storeToRefs(accountStore);

    const getAccountImage = async () => {
        try{    
            const response = await fetch(`http://localhost:4000/account_image?cache=${Date.now()}`, {
                method: 'GET',
                credentials: 'include',
            });

            if(response.status === 200){
                const result = await response.blob();
                imageSRC.value = result;
            }
            else{
                const result = await response.text();
                console.log(result);
                imageSRC.value = icons['emptyAvatar'];
            }
        }
        catch(error) {
            const message = error.message;
            console.log(message);
            imageSRC.value = icons['emptyAvatar'];
        }
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
        getAccountImage();
        document.addEventListener('update_account', getAccountInfo);
        document.addEventListener('update_account', getAccountImage);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('update_account', getAccountInfo);
        document.removeEventListener('update_account', getAccountImage);
    });
</script>

<template>
    <aside class="sidebar" ref="sidebar">
        <div class="account_user">
            <img 
                class="account_image" 
                :src="imageSRC"
                />
            <h2 class="account_name">
                {{name}}
            </h2>
            <p class="account_email">
                {{email}}
            </p>
        </div>
        <AccountOptions/>
    </aside>
</template>

<style scoped>
    .sidebar{
        width: 230px;
        display: flex;
        flex-direction: column;
        padding-top: 25px;
        gap: 25px;
        border: 1px solid var(--blue-0);
        border-top-right-radius: 10px;
        position: relative;
        overflow: hidden;
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