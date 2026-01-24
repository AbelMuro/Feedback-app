<script setup>  
    import {ref, watch} from 'vue'

    const image = ref();
    const src = ref('');

    const handleChange = (e) => {
        const file = e.target.files[0];
        image.value = file;
    }

    watch(image, (image) => {
        if(!image) return;
        
        const url = URL.createObjectURL(image);
        src.value = url;
    }, {flush: 'post'});

</script>

<template>
    <fieldset class="fieldset">
        <img v-if="image" class="image" :src="src">
        <label class="label" for='input'>
            Upload Photo
            <input 
                id="input" 
                type="file" 
                class="input" 
                name="image"
                accept="image/*"
                @change="handleChange"
                />
        </label>
    </fieldset>
</template>

<style scoped>
    .fieldset{
        width: 100%;
        border: none;
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
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
        border-radius: 100%;
        object-fit: contain;
        align-self: center;
    }

    @media(max-width: 620px){
        .label{
            font-size: 1.2rem;
        }        
    }
</style>