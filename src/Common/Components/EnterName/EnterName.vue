<script setup>
    import {ref, watch} from 'vue';
    import {motion} from 'motion-v';

    const name = ref('');
    const error = ref('');


    const handleInput = (e) => {
        e.target.setCustomValidity('');
        const input = e.target.value;
        name.value = input;
        error.value = '';
    }


    const handleBlur = (e) => {
        e.target.setCustomValidity('');
        const valueMissing = e.target.validity.valueMissing;

        if(valueMissing)
            error.value = "Can't be empty";
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity('');
        error.value = "Can't be empty";
    }
    
</script>

<template>
    <motion.fieldset 
        layout
        class="fieldset">
            <motion.label layout class="label">
                Enter Name:
            </motion.label>
            <motion.input 
                name="name"
                layout
                type="text" 
                class='input' 
                :value="name"
                @input="handleInput"
                @blur="handleBlur"
                @invalid="handleInvalid"
                required/>
            <motion.div 
                layout
                v-if="error"
                class="error_message">
                    {{error}}
            </motion.div>
    </motion.fieldset>
</template>

<style scoped>
    .fieldset{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin: 0px;
        padding: 0px;
        border: none;
    }

    .label{
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        font-weight: var(--preset-text-3-fontweight);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        color: var(--white-100);
    }

    .input{
        width: 100%;
        height: 60px;
        padding: 15px;
        border-radius: 10px;
        border: 1px solid var(--blue-0);
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        font-weight: var(--preset-text-3-fontweight);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        color: var(--white-0);
        background-color: transparent;
    }

    .input:focus{
        outline: none;
        border: 3px solid var(--blue-0);
    }

    .error_message{
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        font-weight: var(--preset-text-3-fontweight);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        color: var(--red-100);
    }

    @media(max-width: 620px){
        .label{
            font-size: 1rem;
        }
        .error_message{
            font-size: 1rem;
        }
    }

</style>