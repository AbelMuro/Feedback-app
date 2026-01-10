import {defineStore} from 'pinia';

const useDialogStore = defineStore('dialog', {
    state: () => ({open: false, message: ''}),
    actions: {
        showDialog(message) {
            this.open = true;
            this.message = message;
        },
        hideDialog(){
            this.open = false;
        }
    }
});

export default useDialogStore;