<script setup>
    import {ref} from 'vue';
    import EnterPassword from '~/Common/Components/ReEnterPassword';
    import ReEnterPassword from '~/Common/Components/ReEnterPassword';
    import {VueSpinner} from 'vue3-spinners';
    import {useToastStore} from '~/Store';
    import {motion} from 'motion-v';
    import {useRouter, useRoute} from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const password = ref('');
    const reEnterPassword = ref('');
    const error = ref('');
    const loading = ref(false);
    const store = useToastStore();
    const {showToast} = store;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const password = e.target.elements.password.value;
            const reEnterPassword = e.target.elements.reEnterPassword.value;
            const token = route.params.token;

            if(password !== reEnterPassword){
                error.value = '';
                return;
            }

            const response = await fetch('http://localhost:4000/reset_password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password, token
                })
            })

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                showToast(result);
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
    }

</script>

<template>
    <motion.form 
        layout 
        class="form" 
        @submit="handleSubmit">
            <EnterPassword v-model="password" name="password" label="Enter Password: "/>
            <ReEnterPassword v-model="reEnterPassword" name="reEnterPassword" label="Re-enter Password: "/>
            <button v-if="!loading" class="form_submit">
                Reset Password
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
</style>