<script setup>
import { onMounted, ref } from 'vue';
import { useDesireStore } from '../stores/desire';
import { calculateDistance } from '@/helpers/distance.js';

const desireStore = useDesireStore();
const loading = ref(false);
const lat = ref(0);
const long = ref(0);

console.log(calculateDistance(52.492454, -1.813785));

onMounted(async () => {
  await getDesires();
  navigator.geolocation.getCurrentPosition((position) => {
    lat.value = position.coords.latitude;
    long.value = position.coords.longitude;
  });
});

async function getDesires() {
  loading.value = true;
  await desireStore.getDesires();
  loading.value = false;
}

function parseDistance(distance) {
  if (distance < 1000) {
    return null;
  }
  return parseFloat(distance / 1000).toFixed(2) + ' km';

}
</script>

<template>
  <div class="container mt-5">
    <h1 class="mb-5">{{ $t('desires') }}</h1>
    <div class="card mb-3" v-for="desire in desireStore.desires" :key="desire.id">
      <h5 class="card-header">{{ desire.name }}</h5>
      <div class="card-body">
        <h5 class="card-title">{{ desire.name }}</h5>
        <p class="card-text">
          {{ desire.description }}
        </p>
        <p class="card-text">Lugar: {{ desire.location.name }} ({{ parseDistance(calculateDistance(lat, long, desire.location.lat, desire.location.long)) || $t('less_than_1km') }})</p>
        <a href="#" class="btn btn-primary">Ver detalles</a>
      </div>
    </div>
  </div>
</template>
