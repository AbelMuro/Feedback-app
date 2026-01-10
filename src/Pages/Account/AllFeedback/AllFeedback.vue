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
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: auto;
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
</style>