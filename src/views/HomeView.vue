<script setup>
import { onMounted, ref } from 'vue';
import { useDesireStore } from '../stores/desire';

const desireStore = useDesireStore();
const loading = ref(false);

onMounted(async () => {
  await getDesires();
});

async function getDesires() {
  loading.value = true;
  await desireStore.getDesires();
  loading.value = false;
}
</script>

<template>
  <div class="container mt-5">
    <h1 class="mb-5">Desires</h1>
    <p>Test: {{ $t('test') }}</p>
    <div class="card mb-3" v-for="desire in desireStore.desires" :key="desire.id">
      <h5 class="card-header">{{ desire.name }}</h5>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          {{ desire.description }}
        </p>
        <a href="#" class="btn btn-primary">Ver detalles</a>
      </div>
    </div>
  </div>
</template>
