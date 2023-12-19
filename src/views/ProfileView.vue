<script setup>
import { onMounted, ref } from 'vue';
import { useProfileStore } from '../stores/profile';
import { useAccountStore } from '../stores/account';
import { useRouter } from 'vue-router';

const profileStore = useProfileStore();
const saving = ref(false);
const loading = ref(false);
const accountStore = useAccountStore();
const router = useRouter();

onMounted(async () => {
  await getProfile();
});

async function getProfile() {
  await profileStore.getProfile();
}

async function saveChanges() {
  saving.value = true;
  await profileStore.update();
  saving.value = false;
}

async function logout() {
  loading.value = true;
  await accountStore.signOut();
  loading.value = false;
  router.push({ name: 'login' });
}
</script>

<template>
  <div class="container mt-5">
    <h1>Profile</h1>
    <div class="mb-3">
      <h5 class="mb-3">Avatar</h5>
      <img id="inputName" src="@/assets/images/man2.png" width="128" alt="avatar" />
    </div>
    <div class="mb-3 mt-5">
      <label for="inputEmail" class="form-label">Email address</label>
      <input
        type="email"
        readonly
        class="form-control"
        id="inputEmail"
        v-model="profileStore.profile.email"
      />
    </div>
    <div class="mb-3">
      <label for="inputName" class="form-label">Name</label>
      <input type="email" class="form-control" id="inputName" v-model="profileStore.profile.name" />
    </div>
    <h3>Interests</h3>
    <div
      v-for="interest in profileStore.profile.interests"
      :key="interest.id"
      class="form-check form-check-inline"
    >
      <input
        class="form-check-input"
        type="checkbox"
        :id="`interest-${interest.id}`"
        value="option1"
      />
      <label class="form-check-label" :for="`interest-${interest.id}`">{{ interest.name }}</label>
    </div>
    <div class="row mt-5">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="saveChanges" :disabled="saving">
          <span
            v-show="saving"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Save changes
        </button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <a href="#" class="btn btn-primary" @click="logout" :disabled="loading">
          <svg
            v-show="!loading"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="me-2"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
            <path
              d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"
            />
          </svg>
          <span
            v-show="loading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Sign out
        </a>
      </div>
    </div>
  </div>
</template>
