<template>
    <fieldset class="name_fieldset">
        <label class="name_label"> 
            Enter Name:
        </label>
        <input class="name_input" type="text"/>
    </fieldset>
</template>

<style scoped>
    .name_fieldset{
        display: flex;
        flex-direction: column;
        gap: 5px;
        border: none;
        padding: 0px;
        margin: 0px;
    }

    .name_label{
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        color: var(--white-200);
    }

    .name_input{
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

    .name_input:focus{
        outline: none;
    }
</style>