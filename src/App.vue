<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import BottomNavigationBar from './components/BottomNavigationBar.vue';
</script>

<template>
  <main>
    <NavBar v-if="!$route.meta.hideNavbar" />
    <RouterView />
  </main>
  <BottomNavigationBar v-if="!$route.meta.hideNavbar" />
</template>

<style scoped>
  main {
    display: flex;
    height: 100vh;
    /* max-height: 100vh; */
    /* flex-wrap: nowrap; */
    /* overflow-x: auto; */
    /* overflow-y: hidden; */
  }
</style>
