<script setup>
import { ref } from 'vue';
import { useAccountStore } from '../stores/account';
import { useRouter } from 'vue-router';

const email = ref('');
const accountStore = useAccountStore();
const router = useRouter();

function login() {
  accountStore.signIn();
  router.push({ name: 'home' });
}
</script>

<template>
  <div class="container">
    <div class="row mt-5 justify-content-md-center">
      <div class="col-sm-12 col-lg-6">
        <h1 class="mb-5 text-center">Match2</h1>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="emailInput" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              v-model="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div class="d-grid mt-5">
            <button type="submit" class="btn btn-primary">Send recover link</button>
          </div>
        </form>
        <div class="d-grid mt-3">
          <router-link class="text-end" to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
