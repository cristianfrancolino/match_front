import { ref } from 'vue';
import { defineStore } from 'pinia';
import api from '../services/api';

export const useProfileStore = defineStore(
  'profile',
  () => {
    const profile = ref({});

    async function getProfile() {
      const response = await api.get('/me', {});
      profile.value = response.data;
      console.log(profile.value);
    }

    async function update() {
      await api.put('/me', {
        name: profile.value.name,
        interests: profile.value.interests,
      });
    }

    async function chat() {}
    async function participateInDesire() {}
    async function updateInterests() {}

    return {
      getProfile,
      update,
      chat,
      participateInDesire,
      updateInterests,
      profile,
    };
  },
  {
    persist: true,
  }
);
