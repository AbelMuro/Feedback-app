<script setup>

</script>

<template>
    <fieldset class="email_fieldset">
        <label class="email_label"> 
            Enter Email:
        </label>
        <input class="email_input" type="email"/>
    </fieldset>
</template>

<style scoped>
    .email_fieldset{
        display: flex;
        flex-direction: column;
        gap: 5px;
        border: none;
        padding: 0px;
        margin: 0px;
    }

    .email_label{
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        color: var(--white-200)
    }

    .email_input{
        width: 100%;
        height: 60px;
        border-radius: 5px;
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        border: 1px solid black;
        padding: 0px 20px;
    }

    .email_input:focus{
        outline: none;
    }
</style>