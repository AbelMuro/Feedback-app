<script setup>
    import {ref, watch} from 'vue';
    import {motion} from 'motion-v';
    import EnterName from '~/Common/Components/EnterName';
    import EnterEmail from '~/Common/Components/EnterEmail';
    import EnterPassword from '~/Common/Components/ReEnterPassword';
    import ReEnterPassword from '~/Common/Components/ReEnterPassword';
    import UploadImage from '~/Common/Components/UploadImage';
    import {useToastStore} from '~/Store';
    import { VueSpinner } from 'vue3-spinners'
    import { useRouter } from 'vue-router';

    const password = ref('');
    const reEnterPassword = ref('');
    const loading = ref(false);
    const error = ref('');
    const store = useToastStore();
    const {showToast} = store;
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        loading.value = true;
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const reEnterPassword = e.target.elements.reEnterPassword.value;
        const image = e.target.elements.image.files[0];

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);        
        formData.append('password', password);
        formData.append('image', image);


        if(password !== reEnterPassword) {
            error.value = "Password's don't match";
            return;
        };

        try{
            const response = await fetch('http://localhost:4000/register_account', {
                method: 'POST',
                body: formData,
            })   

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                showToast(result);
                router.push('/login');
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

    watch([password, reEnterPassword], () => {
        error.value = '';
    }, {flush: 'sync'})

</script>

<template>
    <motion.form 
        layout 
        class="form" 
        @submit="(e) => handleSubmit(e, password, reEnterPassword)">
            <EnterName/>
            <EnterEmail/>
            <EnterPassword label="Enter Password:" name='password' v-model:password="password"/>
            <ReEnterPassword label="Re-enter Password:" name='reEnterPassword' v-model:password="reEnterPassword"/>
            <UploadImage/>
            <div 
                class="error_message"
                v-if="error"
                >
                {{error}}
            </div>
            <button class="form_submit" v-if="!loading">
                Register
            </button>
            <button class="form_submit" v-else>
                <VueSpinner size="20" color="white"/>
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

    .error_message{
        color: var(--red-100);
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        font-weight: var(--preset-text-3-fontweight);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
    }

    @media(max-width: 620px){
        .form_submit{
            font-size: 1.2rem;
        }        
    }

</style>