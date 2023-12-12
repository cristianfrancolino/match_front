<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <nav class="navbar d-md-none fixed-bottom bg-body-tertiary">
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col">
          <router-link :class="{active: route.path === '/'}" class="nav-link" to="/">
            <i class="bi bi-house-door"></i
          ></router-link>
        </div>
        <div class="col">
          <router-link class="nav-link" to="/asd"> <i class="bi bi-pencil-square"></i></router-link>
        </div>
        <div class="col">
          <router-link class="nav-link" to="/asd"> <i class="bi bi-pencil-square"></i></router-link>
        </div>
        <div class="col">
          <router-link class="nav-link" to="/asd"> <i class="bi bi-pencil-square"></i></router-link>
        </div>
        <div class="col">
          <router-link :class="{active: route.path === '/profile'}" class="nav-link" to="/profile">
            <i class="bi bi-person-circle"></i>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.row {
  width: 110%;
}

i.bi {
  font-size: 1.4rem;
}

.active {
  color: #9475e7;
}
</style>
