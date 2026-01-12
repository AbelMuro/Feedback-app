<script setup>
    import {ref, watch} from 'vue';
    import {motion} from 'motion-v';

    const email = ref('');
    const error = ref('');

    const handleInput = (e) => {
        e.target.setCustomValidity('');
        const input = e.target.value;
        email.value = input;
        error.value = '';
    }


    const handleBlur = (e) => {
        e.target.setCustomValidity('');
        const invalid = e.target.validity.typeMismatch;
        const valueMissing = e.target.validity.valueMissing;

        if(invalid)
            error.value = 'Invalid email';
        else if(valueMissing)
            error.value = "Can't be empty";
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity('');
        const invalid = e.target.validity.typeMismatch;

        if(invalid)
            error.value = 'Invalid email';
        else 
            error.value = "Can't be empty";
    }
    
</script>

<template>
    <motion.fieldset 
        layout
        class="fieldset">
            <motion.label layout class="label">
                Enter Email:
            </motion.label>
            <motion.input 
                name="email"
                layout
                type="email" 
                class='input' 
                :value="email"
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

</style>