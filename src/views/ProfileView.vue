<script setup>
import { onMounted, ref } from 'vue';
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
const saving = ref(false);

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
  </div>
</template>
