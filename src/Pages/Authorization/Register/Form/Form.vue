<script setup>
    import {ref} from 'vue';
    import {motion} from 'motion-v';
    import EnterEmail from '~/Common/Components/EnterEmail';
    import EnterPassword from '~/Common/Components/ReEnterPassword';
    import ReEnterPassword from '~/Common/Components/ReEnterPassword';
    import {useToastStore} from '~/Store';

    const password = ref('');
    const reEnterPassword = ref('');
    const store = useToastStore();
    const {showToast} = store;

    const handleSubmit = async () => {
        
    }
</script>

<template>
    <motion.form 
        layout 
        class="form" 
        @submit="handleSubmit">
            <EnterEmail/>
            <EnterPassword label="Enter Password:" v-model:password="password"/>
            <ReEnterPassword label="Re-enter Password:" v-model:password="reEnterPassword"/>
            <button class="form_submit">
                Register
            </button>
    </motion.form>
</template>

<style setup>
    .form{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .form_submit{
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

    .form_submit:hover{
        background-color: var(--blue-100);
    }   

    .form_submit:active{
        background-color: var(--blue-200);
    }
</style>