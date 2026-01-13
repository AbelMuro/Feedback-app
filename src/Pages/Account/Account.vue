<script setup>
    import {ref, onMounted} from 'vue';
    import { RouterView } from 'vue-router';
    import AccountOptions from './AccountOptions';

    const name = ref('');
    const email = ref('');

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
        }
    }

    onMounted(() => {
        getAccountInfo();
    })

</script>

<template>
    <section class="account">
        <div class="account_settings">
            <div class="account_user">
                <img class="account_image" src="http://localhost:4000/account_image"/>
                <h2 class="account_name">
                    {{name}}
                </h2>
                <p class="account_email">
                    {{email}}
                </p>
            </div>
            <AccountOptions/>
        </div>
        <RouterView/>
    </section>
</template>

<style scoped>
    .account{
        width: 100%;
        min-height: calc(100vh - 100px);
        border-radius: 15px;
        display: grid;
        grid-template-columns: 200px 1fr;
    }

    .account_user{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
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

    .account_settings{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 25px;
        gap: 25px;
        border: 1px solid var(--blue-0);
        border-radius: 10px;
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