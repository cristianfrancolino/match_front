import { ref } from 'vue';
import { defineStore } from 'pinia';
import api from '../services/api';

export const useAccountStore = defineStore(
  'account',
  () => {
    const isAuthenticated = ref(false);

    async function signIn(email, password) {
      const response = await api.post('/login', {
        email,
        password,
      });

      if (response.status === 200) {
        isAuthenticated.value = true;
        return true;
      }

      return false;
    }

    async function signOut() {
      await api.post('/logout');
      isAuthenticated.value = false;
    }

    async function recoverAccount() {
      await api.post('/recover_password');
    }

    async function deleteAccount() {}

    async function register(name, email, password, password_confirmation) {
      await api.post('/register', {
        name,
        email,
        password,
        password_confirmation,
      });
    }

    async function changeEmail() {}

    async function payPremium() {}

    return {
      isAuthenticated,
      signIn,
      signOut,
      recoverAccount,
      deleteAccount,
      register,
      changeEmail,
      payPremium,
    };
  },
  {
    persist: true,
  }
);
