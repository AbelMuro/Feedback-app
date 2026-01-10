<script setup>  
    import {ref} from 'vue'

    const image = ref();
</script>

<template>
    <fieldset class="fieldset">
        <label class="label" for='input'>
            Upload Photo
            <input 
                id="input" 
                type="file" 
                class="input" 
                accept="image/png, image/gif, image/jpeg"
                v-on:change="image"
                />
        </label>
        <img v-if="image" class="image" :src="image">
    </fieldset>
</template>

<style scoped>
    .fieldset{
        width: 100%;
        border: none;
        margin: 0px;
        padding: 0px;
    }

    .input{
        display: none;
    }

    .label{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        border-radius: 10px;
        border: none;
        background-color: var(--blue-0);
        cursor: pointer;
        color: white;
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
    }

    .label:hover{
        background-color: var(--blue-100);
    }   

    .label:active{
        background-color: var(--blue-200);
    }

    .image{
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
</style>