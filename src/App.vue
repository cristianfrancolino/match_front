<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import BottomNavigationBar from './components/BottomNavigationBar.vue';
</script>

<template>
  <main>
    <NavBar v-if="!$route.meta.hideNavbar" />
    <RouterView :class="{ mleft: !$route.meta.hideNavbar, mbottom: !$route.meta.hideNavbar }" />
  </main>
  <BottomNavigationBar v-if="!$route.meta.hideNavbar" />
</template>

<style scoped>
@media only screen and (min-width: 768px) {
  .mleft {
    padding-left: 300px;
  }
}

@media only screen and (max-width: 768px) {
  .mbottom {
    padding-bottom: 80px;
  }
}
</style>
