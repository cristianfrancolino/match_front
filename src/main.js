import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import EN from './locales/en.json';
import ES from './locales/es.json';

import App from './App.vue';
import router from './router';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const i18n = createI18n({
  locale: 'ES',
  messages: {
    EN: EN,
    ES: ES,
  }
});

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount('#app');
