<script setup>
    import EnterEmail from './EnterEmail';
    import EnterName from './EnterName';
    import EnterFeedback from './EnterFeedback';
    import EnterRating from './SelectRating';
</script>

<template>
    <form class="form">
        <EnterEmail/>
        <EnterName/>
        <EnterFeedback/>
        <EnterRating/>
        <button class="submit">
            Submit
        </button>
    </form>
</template>

<style scoped>
    .form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
    }

    .submit{
        width: 100%;
        height: 60px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-family: 'roboto';
        font-size: 1.2rem;
        line-height: 130%;
        letter-spacing: 0px;
        margin-top: 5px;
        background-color: var(--blue-0);
        color: var(--white-200)
    }

    .submit:hover{
        background-color: var(--blue-100);
    }

    .submit:active{
        background-color: var(--blue-200);
    }
</style>