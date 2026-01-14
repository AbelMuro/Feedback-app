<script setup>
    import {ref, watch} from 'vue';
    import {motion} from 'motion-v';
    import icons from './icons';

    const {label, name} = defineProps(['label', 'name']);
    const {password} = defineModel('password');

    const error = ref('');
    const visible = ref(false);

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        error.value = '';
    }

    const handleVisibility = () => {
        visible.value = !visible.value;
    }

    const handleBlur = (e) => {
        e.target.setCustomValidity('');
        const valueMissing = e.target.validity.valueMissing;
        const patternMismatch = e.target.validity.patternMismatch;

        if(valueMissing)
            error.value = "Can't be empty";
        else if(patternMismatch)
            error.value = "Password doesn't meet the requirements"
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity('');
        const valueMissing = e.target.validity.valueMissing;

        if(valueMissing)
            error.value = "Can't be empty";
        else
            error.value = "Password doesn't meet the requirements";
    }   

    watch(() => password, () => {
        error.value = '';
    },{flush: 'post'})

</script>

<template>
    <motion.fieldset layout class="fieldset">
        <motion.label layout class="label">
            {{label}}
        </motion.label>
        <motion.input
            layout 
            :name="name"
            :type="visible ? 'text' : 'password'" 
            class='input' 
            pattern="(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
            v-model="password"
            @change="handleChange"
            @blur="handleBlur"
            @invalid="handleInvalid"
            required/>
        <img v-if="visible" class="visible" :src="icons['invisible']" @click="handleVisibility"/>
        <img v-else class="visible" :src="icons['visible']" @click="handleVisibility"/>
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
        top: 57.4px;
        right: 15px;
        transform: translateY(-50%);
        cursor: pointer;
    }

</style>