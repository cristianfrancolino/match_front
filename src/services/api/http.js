import Axios from 'axios';
import { loadMocks } from './mocks';

const http = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

if (import.meta.env.VITE_MOCK === 'true') {
  loadMocks(http);
}

export default http;
