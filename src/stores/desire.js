import { ref } from 'vue';
import { defineStore } from 'pinia';
import api from '../services/api';

export const useDesireStore = defineStore(
  'desire',
  () => {
    const desires = ref([]);

    async function getDesires() {
      const response = await api.get('/desires', {});
      desires.value = response.data;
    }

    return {
      getDesires,
      desires,
    };
  },
  {
    persist: true,
  }
);
