<script setup>
    import {onMounted} from 'vue';
    import {useToastStore} from '~/Store';
    import {useRouter} from 'vue-router';

    const store = useToastStore();
    const {showToast} = store;
    const router = useRouter();

    const authorization = async () => {
        try{
            const response = await fetch('http://localhost:4000/admin_authorization', {
                method: 'GET',
                credentials: 'include'
            });

            const result = await response.text();
            console.log(result);
            showToast(result);
            
            if(response.status !== 200)
                router.push('/')
        }
        catch(error){
            const message = error.message;
            console.log(message);
            showToast(message);
        }
    }

    onMounted(() => {
        authorization();
    })
</script>

<template>
    
</template>

<style scoped>

</style>