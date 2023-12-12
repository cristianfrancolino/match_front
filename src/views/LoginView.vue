<script setup>
import { ref } from 'vue';
import { useAccountStore } from '../stores/account';
import { useRouter } from 'vue-router';

const loading = ref(false);
const wrongCredentials = ref(false);

const email = ref('');
const password = ref('');
const accountStore = useAccountStore();
const router = useRouter();

async function login() {
  loading.value = true;
  const success = await accountStore.signIn(email.value, password.value);
  loading.value = false;

  wrongCredentials.value = true;
  if (success) {
    wrongCredentials.value = false;
    router.push({ name: 'home' });
  }
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
          <div class="d-grid mt-5">
            <button type="submit" class="btn btn-primary" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Sign in
            </button>
            <div
              v-if="wrongCredentials"
              class="alert alert-danger alert-dismissible fade mt-5"
              :class="{ show: wrongCredentials }"
              role="alert"
            >
              Oops, it seems that the email or password is not correct. Please check and try again.
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                @click="wrongCredentials = false"
              ></button>
            </div>
          </div>
        </form>
        <div class="d-grid mt-3">
          <router-link class="text-end" to="/recover_password">Forgot password?</router-link>
        </div>
        <hr />
        <div class="d-grid mt-3">
          <router-link class="btn btn-dark" to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
