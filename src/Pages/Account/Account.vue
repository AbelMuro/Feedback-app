<script setup>
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

    </section>
</template>

<style scoped>
    .account{
        width: 600px;
        height: 600px;
        border-radius: 15px;
        border: 1px solid var(--blue-0);
        position: fixed;
        inset: 0;
        margin: auto;
        display: flex;
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
        display: flex;
        flex-direction: column;
        padding-top: 25px;
        gap: 25px;
        border-right: 1px solid var(--blue-0);
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