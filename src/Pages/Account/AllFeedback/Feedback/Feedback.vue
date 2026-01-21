<script setup>
    import {useRouter} from 'vue-router';
    const {title, feedback, id} = defineProps(['title', 'feedback', 'id']);

    const router = useRouter();

    const handleLink = () => {
        router.push(`/thread/${id}`);
    }

</script>

<template>
        <article class="feedback">
            <h2 class="feedback_label">
                Title: 
            </h2>
            <p class="feedback_title">
                {{title}}
            </p>
            <h2 class="feedback_label">
                Feedback: 
            </h2>
            <p class="feedback_desc">
                {{feedback}}
            </p>
            <button class="feedback_button" @click="handleLink">
                View Thread
            </button>
        </article>
</template>

<style scoped>
    .all_feedback{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
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

    .feedback_button{
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

    .feedback_button:hover{
        background-color: var(--blue-100);
    }

    .feedback_button:active{
        background-color: var(--blue-200);
    }

    @media(max-width: 620px){
        .feedback_label{
            grid-column: 1/3;
            font-size: 1.2rem;
        }

        .feedback_label:nth-of-type(1){
            grid-row: 1/2;
        }

        .feedback_label:nth-of-type(3){
            grid-row: 3/4;
        }

        .feedback_title{
            font-size: 1.2rem;
            grid-column: 1/3;
            grid-row: 2/3;
        }

        .feedback_desc{
            font-size: 1.2rem;
            grid-column: 1/3;
            grid-row: 4/5;
        }

        .feedback_button{
            font-size: 1.2rem;
            grid-row: 5/6;
        }
    }
</style>