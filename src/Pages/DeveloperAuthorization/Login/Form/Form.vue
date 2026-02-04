<script setup>
    import {ref} from 'vue';
    import {motion} from 'motion-v';
    import EnterEmail from '~/Common/Components/EnterEmail';
    import EnterKey from './EnterKey';
    import {useRouter} from 'vue-router';

    const loading = ref(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        try{
            const email = e.target.elements.email.value;
            const key = e.target.elements.key.value;

            const response = await fetch('http://localhost:4000/developer_login', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, key})
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                router.push('/')
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
    }
</script>

<template>
    <motion.form 
        layout 
        class="form" 
        @submit="handleSubmit">
            <EnterEmail/>
            <EnterKey/>
            <button v-if="!loading" class="form_submit">
                Login
            </button>
            <button v-else class="form_submit">
                <VueSpinner size="25" color="white"/>
            </button>
    </motion.form>
</template>

<style scoped>
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

    @media(max-width: 620px){
        .form_submit{
            font-size: 1.2rem;
        }        
    }


</style>