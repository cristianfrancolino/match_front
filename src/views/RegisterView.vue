<script setup>
import { ref } from 'vue';
import { useAccountStore } from '../stores/account';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const accountStore = useAccountStore();
const router = useRouter();

function register() {
  accountStore.register(name.value, email.value, password.value, passwordConfirmation.value);
}
</script>

<template>
  <div class="container">
    <div class="row mt-5 justify-content-md-center">
      <div class="col-sm-12 col-lg-6">
        <h1 class="mb-5 text-center">Match2</h1>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="nameInput" class="form-label">Name</label>
            <input type="text" class="form-control" id="nameInput" v-model="name" required />
          </div>
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
          <div class="mb-3">
            <label for="passwordInput" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              v-model="password"
              required
            />
          </div>
          <div class="mb-3">
            <label for="passwordConfirmationInput" class="form-label">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="passwordConfirmationInput"
              v-model="passwordConfirmation"
              required
            />
          </div>
          <div class="d-grid mt-5">
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        </form>
        <div class="d-grid mt-3">
          <p class="text-end">
            Have an account? <router-link class="" to="/login">Log in</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
