import {defineStore} from 'pinia';
import {ref} from 'vue';

const useToastStore = defineStore('toast', {
    state: () => ({open: false, message: ''}),
    actions: {
        showToast(message) {
            this.open = true;
            this.message = message;
        },
        hideToast(){
            this.open = false;
        }
    }
});

export default useToastStore;