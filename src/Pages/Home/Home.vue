<script setup>
    import NavigationBar from './NavigationBar';
</script>

<template>
    <NavigationBar/>
    <header class="header">
        <section class="header_content">
            <h1 class="header_title">
                Submit Feedback
            </h1>
            <h2 class="header_desc">
                Our team will address your feedback and will
                notify you as soon as possible
            </h2>
            <button class="submit">
                Start Here
            </button>
        </section>

    </header>
</template>

<style scoped>
    .header{
        width: 100%;
        height: calc(100vh - 60px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .header_title{
        font-family: var(--preset-text-0-fontfamily);
        font-size: var(--preset-text-0-fontsize);
        font-weight: var(--preset-text-0-fontweight);
        line-height: var(--preset-text-0-lineheight);
        color: var(--white-0);
        margin: 0px;
    }

    .header_desc{
        width: 600px;
        font-family: var(--preset-text-1-fontfamily);
        font-size: var(--preset-text-1-fontsize);
        font-weight: var(--preset-text-1-fontweight);
        line-height: var(--preset-text-1-lineheight);
        color: var(--white-100);
        margin: 0px;
        text-align: center;
    }

    .submit{
        padding: 0px 15px;
        height: 60px;
        border: 1px solid var(--blue-0);
        border-radius: 10px;
        color: var(--white-0);
        background-color: var(--blue-300);
        font-family: var(--preset-text-1-fontfamily);
        font-size: var(--preset-text-1-fontsize);
        font-weight: var(--preset-text-1-fontweight);
        line-height: var(--preset-text-1-lineheight);
        cursor: pointer;
    }

    .submit:hover{
        background-color: var(--blue-200);
    }

    .submit:active{
        background-color: var(--blue-100);
    }
</style>