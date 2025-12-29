<template>
    <fieldset class="feedback_fieldset">
        <label class="feedback_label"> 
            Enter Feedback:
        </label>
        <textarea class="feedback_input">

        </textarea>
    </fieldset>
</template>

<style scoped>
    .feedback_fieldset{
        display: flex;
        flex-direction: column;
        gap: 5px;
        border: none;
        padding: 0px;
        margin: 0px;
    }

    .feedback_label{
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        color: var(--white-200);
    }

    .feedback_input{
        width: 100%;
        height: 120px;
        border-radius: 5px;
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        border: 1px solid black;
        padding: 0px 20px;
        resize: none;
    }

    .feedback_input:focus{
        outline: none;
    }
</style>