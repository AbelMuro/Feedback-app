<script setup>

</script>

<template>
    <article class="feedback">
        <h2 class="feedback_label">
            Title: 
        </h2>
        <p class="feedback_title">
            Your feature needs to be fixed
        </p>
        <h2 class="feedback_label">
            Feedback: 
        </h2>
        <p class="feedback_desc">
            This is where the feedback description will start
        </p>
        <button class="feedback_thread">
            View Thread
        </button>
    </article>
</template>

<style scoped>
    .feedback{
        width: 100%;
        height: auto;
        padding: 25px;
        border-radius: 15px;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        row-gap: 15px;
        column-gap: 20px;
        border: 1px solid var(--blue-0);
    }

    .feedback_header{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .feedback_title{
        grid-column: 2/3;
        grid-row: 1/2;
        color: var(--white-100);
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        line-height: var(--preset-text-2-line-height);
        letter-spacing: var(--preset-text-2-letterspacing);
        margin: 0px;
    }

    .feedback_label{
        color: var(--white-100);
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        line-height: var(--preset-text-2-line-height);
        letter-spacing: var(--preset-text-2-letterspacing);
        margin: 0px;
    }

    .feedback_label:nth-of-type(1){
        grid-column: 1/2;
        grid-row: 1/2;
    }

    .feedback_label:nth-of-type(3){
        grid-column: 1/2;
        grid-row: 2/3;
    }

    .feedback_desc{
        color: var(--white-200);
        grid-column: 2/3;
        grid-row: 2/3;
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        margin: 0px;
    }

    .feedback_thread{
        grid-column: 1/3;
        grid-row: 3/4;
        height: 60px;
        border-radius: 10px;
        border: none;
        color: var(--white-0);
        background-color: var(--blue-0);
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        cursor: pointer;
    }

    .feedback_thread:hover{
        background-color: var(--blue-100);
    }

    .feedback_thread:active{
        background-color: var(--blue-200);
    }
</style>