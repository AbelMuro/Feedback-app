<script setup>
    const {messageOwnerId, message, created_at} = defineProps(['messageOwnerId', 'message', 'created_at']);
    
    const formatDate = (timestamp) => {
        const date = new Date(Number(timestamp));
        const month = date.getMonth() + 1;
        const dayOfMonth = date.getDate();
        const year = date.getFullYear();

        return `${month}/${dayOfMonth}/${year}`;
    }   
</script>

<template>
    <section class="response">
        <h1 class="response_name">
            {{''}}
        </h1>
        <img class="response_image" :src="`http://localhost:4000/get_image/${image}`"/>
        <p class="response_content">
            {{message}}
        </p>
        <p class="response_date">
            {{formatDate(created_at)}}
        </p>            

    </section>
</template>

<style scoped>
    .response{
        width: 100%;
        padding: 15px;
        border-radius: 15px;
        border: 1px solid var(--blue-0);
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto 1fr;
        column-gap: 15px;
        row-gap: 10px;
    }

    .response_image{
        width: 40px;
        object-fit: contain;
        border-radius: 100%;
        grid-column: 1/2;
        grid-row: 1/2;
        margin: auto;
    }
    
    .response_name{
        grid-column: 1/2;
        grid-row: 2/3;
        font-family: var(--preset-text-4-fontfamily);
        font-size: var(--preset-text-4-fontsize);
        font-weight: var(--preset-text-4-fontweight);
        line-height: var(--preset-text-4-lineheight);
        letter-spacing: var(--preset-text-4-letterspacing);
        color: var(--white-100);
        margin: 0px;
    }

    .response_content{
        grid-row: 1/4;
        grid-column: 2/4;
        margin: 0px;
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        color: var(--white-0);
    }

    .response_date{
        grid-column: 1/2;
        grid-row: 3/4;
        align-self: end;
        margin: 0px;
        font-family: var(--preset-text-4-fontfamily);
        font-size: var(--preset-text-4-fontsize);
        font-weight: var(--preset-text-4-fontweight);
        line-height: var(--preset-text-4-lineheight);
        letter-spacing: var(--preset-text-4-letterspacing);
        color: var(--white-100);
    }

    @media(max-width: 870px){
        .response_content{
            font-size: 1.1rem;
        }
    }

    @media(max-width: 620px){
        .response{

        }
    }
</style>
