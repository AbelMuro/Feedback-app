import {defineStore} from 'pinia';

const useAccountStore = defineStore('account', {
    state: () => ({email: '', name: ''}),
    actions: {
        updateAccount(email, name) {
            this.email = email;
            this.name = name;
        },
        clearAccount(){
            this.email = '';
            this.name = '';
        }
    }
});

export default useAccountStore;