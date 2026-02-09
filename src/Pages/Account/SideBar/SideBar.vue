<script setup>
    import {onMounted, onBeforeUnmount} from 'vue';
    import AccountOptions from './AccountOptions';
    import {storeToRefs} from 'pinia';
    import {useToastStore, useAccountStore} from '~/Store';
    import AccountImage from './AccountImage';

    const toastStore = useToastStore();
    const accountStore = useAccountStore();
    const {showToast} = toastStore;
    const {updateAccount} = accountStore;
    const {email, name} = storeToRefs(accountStore);

    const getAccountInfo = async () => {
        try{
            const response = await fetch('https://feedback-server.netlify.app /get_account', {
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
        document.addEventListener('update_account', getAccountInfo);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('update_account', getAccountInfo);
    });
</script>

<template>
    <aside class="sidebar" ref="sidebar">
        <div class="account_user">
            <AccountImage/>
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
</style>