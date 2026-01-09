<script setup>
    import { RouterView } from 'vue-router';
    import AccountOptions from './AccountOptions';
</script>

<template>
    <section class="account">
        <div class="account_settings">
            <div class="account_user">
                <img class="account_image"/>
                <h2 class="account_name">
                    John Doe
                </h2>
                <p class="account_email">
                    @johndoe
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