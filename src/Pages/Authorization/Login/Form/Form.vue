<script setup>
    import {ref} from 'vue';
    import {motion} from 'motion-v';
    import { useRouter } from 'vue-router';
    import EnterEmail from '~/Common/Components/EnterEmail';
    import EnterPassword from '~/Common/Components/EnterPassword';
    import {useToastStore} from '~/Store';
    import {VueSpinner} from 'vue3-spinners';

    const router = useRouter();
    const loading = ref(false);
    const store = useToastStore();
    const {showToast} = store;

    const handleSubmit = async (e) => {
        e.preventDefault();
        loading.value = true;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        try{
            const response = await fetch('https://feedback-server.netlify.app /login', {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                }),
                credentials: 'include',
            });


            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                showToast(result);
                const event = new CustomEvent('auth_change');
                document.dispatchEvent(event);
                router.push('/');
            }
            else{
                const result = await response.text();
                console.log(result);
                showToast(result);
            }

        }
        catch(error){
            const message = error.message;
            console.log(message);
            showToast(message);
        }
        finally{
            loading.value = false;
        }
    }

</script>

<template>
    <motion.form 
        layout 
        class="form" 
        @submit="handleSubmit">
            <EnterEmail/>
            <EnterPassword/>
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