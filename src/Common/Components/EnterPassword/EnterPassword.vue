<script setup>
    import {ref} from 'vue';
    import {motion} from 'motion-v';
    import icons from './icons';

    const password = ref('');
    const error = ref('');
    const visible = ref(false);

    const handleInput = (e) => {
        e.target.setCustomValidity('');
        const input = e.target.value;
        password.value = input;
        error.value = '';
    }
    
    const handleVisibility = () => {
        visible.value = !visible.value;
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
    <motion.fieldset layout class="fieldset">
        <motion.label layout class="label">
            Enter Password:
        </motion.label>
        <motion.fieldset class='input_container' layout>
            <input
                name="password"
                :type="visible ? 'text' : 'password'" 
                class='input' 
                :value="password"
                @input="handleInput"
                @blur="handleBlur"
                @invalid="handleInvalid"
                required/>
            <img v-if="visible" class="visible" :src="icons['invisible']" @click="handleVisibility"/>
            <img v-else class="visible" :src="icons['visible']" @click="handleVisibility"/>
        </motion.fieldset>

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
        position: relative;
    }

    .label{
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        font-weight: var(--preset-text-3-fontweight);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        color: var(--white-100);
    }

    .input_container{
        position: relative;
        border: none;
        padding: 0px;
        margin: 0px;
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

    .visible{
        width: 25px;
        object-fit: contain;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 15px;
        cursor: pointer;
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