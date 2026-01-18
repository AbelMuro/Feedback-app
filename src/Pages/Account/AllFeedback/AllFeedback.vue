<script setup>
    import Feedback from './Feedback';

</script>

<template>
    <section class="all_feedback">
        <h1 class="all_feedback_title">
            My Feedback
        </h1>
        <Feedback/>
    </section>
</template>

<style scoped>
    .all_feedback{
        width: 500px;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 25px;
        margin: auto;
        transition: all 0.2s linear, min-height 0s;
    }
    
    .all_feedback_title{
        font-family: var(--preset-text-1-fontfamily);
        font-size: var(--preset-text-1-fontsize);
        line-height: var(--preset-text-1-lineheight);
        letter-spacing: var(--preset-text-1-letterspacing);
        color: var(--white-0);
        margin: 0px;
        align-self: center;
    }

    @media(max-width: 720px){
        .all_feedback{
            min-height: calc(100vh - 100px - 80px);
        }
    }

    @media(max-width: 620px){
        .all_feedback{
            width: 100%;
            min-height: calc(100vh - 80px - 80px);
        }

        .all_feedback_title{
            font-size: 1.5rem;
        }
    }
</style>